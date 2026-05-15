import type { ResolvedLaw } from "@/lib/portal-data";

export type LawFilterState = {
  search?: string;
  topics?: string[];
  authorityLevels?: string[];
  issuingBodies?: string[];
  statuses?: string[];
  jurisdictions?: string[];
  hasHistory?: boolean;
  hasEnglish?: boolean;
};

function matchesSearch(law: ResolvedLaw, search?: string): boolean {
  if (!search) {
    return true;
  }

  const query = search.toLowerCase().trim();
  if (!query) {
    return true;
  }

  return [
    law.titleZh,
    law.titleEn,
    law.shortTitle,
    ...law.aliases,
    law.summaryZh,
    law.summaryEn
  ]
    .join(" ")
    .toLowerCase()
    .includes(query);
}

export function filterLawRecords(laws: ResolvedLaw[], filters: LawFilterState): ResolvedLaw[] {
  return laws.filter((law) => {
    if (!matchesSearch(law, filters.search)) {
      return false;
    }
    if (filters.topics?.length && !filters.topics.some((topic) => law.topics.includes(topic as never))) {
      return false;
    }
    if (
      filters.authorityLevels?.length &&
      !filters.authorityLevels.includes(law.authorityLevel)
    ) {
      return false;
    }
    if (
      filters.issuingBodies?.length &&
      !filters.issuingBodies.includes(law.issuingBodyZh)
    ) {
      return false;
    }
    if (filters.statuses?.length && !filters.statuses.includes(law.status)) {
      return false;
    }
    if (
      filters.jurisdictions?.length &&
      !filters.jurisdictions.includes(law.jurisdiction)
    ) {
      return false;
    }
    if (filters.hasHistory && !law.previousVersionId && !law.nextVersionId) {
      return false;
    }
    if (filters.hasEnglish && !law.languages.includes("en")) {
      return false;
    }
    return true;
  });
}

export function getLawVersionChain(laws: ResolvedLaw[], lawId: string): ResolvedLaw[] {
  const seed = laws.find((law) => law.id === lawId);
  if (!seed) {
    return [];
  }

  return laws
    .filter((law) => law.versionGroup === seed.versionGroup)
    .sort((left, right) => left.effectiveDate < right.effectiveDate ? 1 : -1);
}
