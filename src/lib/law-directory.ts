import type { ResolvedLaw } from "@/lib/portal-data";

const coreNationalLawIds = [
  "cn-company-law-2023",
  "cn-securities-law-2019",
  "cn-civil-code-2020-legal-person",
  "cn-company-law-2018"
] as const;

const currentLocalLawIds = [
  "sz-business-environment-regulations-2020",
  "bj-business-environment-regulations-2024",
  "sz-commercial-registration-rules-2020",
  "sh-business-entity-domicile-measures-2024"
] as const;

const historicalLocalLawIds = [
  "sz-joint-stock-company-regulations-1993",
  "sz-joint-stock-incorporation-rules-1994",
  "sz-limited-liability-company-regulations-1997",
  "sz-wholly-state-owned-company-regulations-1999",
  "sh-enterprise-domicile-measures-2015"
] as const;

const primarySourceLabelPriority = [
  "Official Chinese",
  "Official release",
  "Official exchange rule",
  "Official court release",
  "Official English",
  "Official English (reference)"
] as const;

const englishSourceLabelPriority = [
  "Official English",
  "Law firm English translation",
  "Public English translation",
  "Official English (reference)",
  "Public English translation (reference)"
] as const;

function compareByPriority(left: string, right: string, priorityIds: readonly string[]) {
  const leftIndex = priorityIds.indexOf(left);
  const rightIndex = priorityIds.indexOf(right);

  if (leftIndex !== -1 || rightIndex !== -1) {
    if (leftIndex === -1) return 1;
    if (rightIndex === -1) return -1;
    return leftIndex - rightIndex;
  }

  return 0;
}

function statusRank(status: string): number {
  switch (status) {
    case "effective":
      return 0;
    case "historical":
      return 1;
    case "reference":
      return 2;
    default:
      return 3;
  }
}

function compareLaws(left: ResolvedLaw, right: ResolvedLaw, priorityIds: readonly string[] = []) {
  const priorityOrder = compareByPriority(left.id, right.id, priorityIds);
  if (priorityOrder !== 0) {
    return priorityOrder;
  }

  const statusOrder = statusRank(left.status) - statusRank(right.status);
  if (statusOrder !== 0) {
    return statusOrder;
  }

  if (left.effectiveDate !== right.effectiveDate) {
    return left.effectiveDate < right.effectiveDate ? 1 : -1;
  }

  return left.titleZh.localeCompare(right.titleZh, "zh-CN");
}

function isLocalHighCourtMaterial(law: ResolvedLaw) {
  return law.issuingBodyZh.includes("高级人民法院");
}

function getOfficialSources(law: ResolvedLaw) {
  return law.sources.filter((source) => source.official);
}

export function getPrimaryLawSource(law: ResolvedLaw) {
  for (const label of primarySourceLabelPriority) {
    const matched = law.sources.find((source) => source.official && source.label === label);
    if (matched) {
      return matched;
    }
  }

  return law.sources.find((source) => source.official) ?? law.sources[0];
}

export function getBackupOfficialLawSource(law: ResolvedLaw) {
  const primarySource = getPrimaryLawSource(law);

  return getOfficialSources(law).find((source) => source.url !== primarySource?.url);
}

export function getEnglishLawSource(law: ResolvedLaw) {
  for (const label of englishSourceLabelPriority) {
    const matched = law.sources.find((source) => source.label === label);
    if (matched) {
      return matched;
    }
  }

  return undefined;
}

export function getChinaLawDirectory(laws: ResolvedLaw[]) {
  const chinaLaws = laws.filter((law) => law.jurisdiction === "cn");

  const nationalLaws = chinaLaws
    .filter((law) => law.authorityLevel === "national-law")
    .sort((left, right) => compareLaws(left, right, coreNationalLawIds));

  const administrativeRegulations = chinaLaws
    .filter((law) => law.authorityLevel === "administrative-regulation")
    .sort((left, right) => compareLaws(left, right));

  const judicialInterpretations = chinaLaws
    .filter((law) => law.authorityLevel === "judicial-interpretation")
    .sort((left, right) => compareLaws(left, right));

  const spcJudicialPolicies = chinaLaws
    .filter(
      (law) =>
        law.authorityLevel === "judicial-policy" &&
        (law.judicialMaterialClass === "spc-policy" ||
          law.judicialMaterialClass === "spc-draft" ||
          (!law.judicialMaterialClass && !isLocalHighCourtMaterial(law)))
    )
    .sort((left, right) => compareLaws(left, right));

  const localHighCourtGuidance = chinaLaws
    .filter(
      (law) =>
        law.authorityLevel === "judicial-policy" &&
        (law.judicialMaterialClass === "local-high-court-guidance" ||
          (!law.judicialMaterialClass && isLocalHighCourtMaterial(law)))
    )
    .sort((left, right) => compareLaws(left, right));

  const localHighCourtReports = chinaLaws
    .filter(
      (law) =>
        law.authorityLevel === "judicial-policy" &&
        law.judicialMaterialClass === "local-high-court-report"
    )
    .sort((left, right) => compareLaws(left, right));

  const departmentalRules = chinaLaws
    .filter((law) => law.authorityLevel === "departmental-rule" || law.authorityLevel === "regulatory-code")
    .sort((left, right) => compareLaws(left, right));

  const exchangeRules = chinaLaws
    .filter((law) => law.authorityLevel === "exchange-rule")
    .sort((left, right) => compareLaws(left, right));

  const localRegulations = chinaLaws
    .filter((law) => law.authorityLevel === "local-regulation")
    .sort((left, right) => compareLaws(left, right));

  const localCurrentRegulations = localRegulations
    .filter((law) => law.status === "effective")
    .sort((left, right) => compareLaws(left, right, currentLocalLawIds));

  const localHistoricalRegulations = localRegulations
    .filter((law) => law.status !== "effective")
    .sort((left, right) => compareLaws(left, right, historicalLocalLawIds));

  return {
    chinaLaws,
    coreNationalLaws: nationalLaws.slice(0, 3),
    nationalLaws,
    administrativeRegulations,
    judicialInterpretations,
    spcJudicialPolicies,
    localHighCourtGuidance,
    localHighCourtReports,
    judicialPolicyMaterials: spcJudicialPolicies,
    localHighCourtJudicialPolicies: [...localHighCourtGuidance, ...localHighCourtReports].sort((left, right) =>
      compareLaws(left, right)
    ),
    departmentalRules,
    exchangeRules,
    localRegulations,
    localCurrentRegulations,
    localHistoricalRegulations
  };
}
