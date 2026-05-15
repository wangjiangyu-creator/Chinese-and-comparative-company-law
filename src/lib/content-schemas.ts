import { z } from "astro:content";

export const jurisdictions = ["cn", "us", "uk", "de", "hk", "sg"] as const;
export const lawDocumentTypes = [
  "code",
  "statute",
  "law",
  "administrative-regulation",
  "departmental-rule",
  "judicial-interpretation",
  "judicial-policy",
  "regulatory-code",
  "exchange-rule"
] as const;
export const lawAuthorityLevels = [
  "national-law",
  "administrative-regulation",
  "departmental-rule",
  "judicial-interpretation",
  "judicial-policy",
  "regulatory-code",
  "exchange-rule",
  "local-regulation",
  "comparative-statute"
] as const;
export const caseTypes = [
  "guiding-case",
  "reference-case",
  "database-case",
  "comparative-case"
] as const;
export const articleSourceKinds = ["scholar", "law-firm", "publisher", "research-platform"] as const;
export const textStatusValues = ["full", "selected-excerpt", "metadata-only"] as const;
export const recordStatuses = ["effective", "historical", "reference"] as const;
export const topicIds = [
  "business-environment",
  "corporate-formation",
  "corporate-reorganization",
  "corporate-social-responsibility",
  "corporate-veil-piercing",
  "partnership-enterprises",
  "registered-capital",
  "shareholder-rights",
  "corporate-governance",
  "legal-representative-and-seal-control",
  "actual-controller-tunneling",
  "director-abuse",
  "director-liability-litigation",
  "related-transaction-harm",
  "listed-companies",
  "disclosure",
  "dissolution-liquidation",
  "vam-disputes",
  "comparative-governance",
  "directors-officer-loyalty-and-duties"
] as const;
export const languageStatusValues = [
  "official-zh",
  "official-bilingual",
  "official-zh-plus-reference-en",
  "official-en",
  "comparative-bilingual"
] as const;
export const sourceLabels = [
  "Official Chinese",
  "Official English",
  "Official English (reference)",
  "Public English translation",
  "Public English translation (reference)",
  "Law firm English translation",
  "Official release",
  "Official exchange rule",
  "Official court release",
  "Research platform",
  "Publisher page",
  "Law firm analysis"
] as const;
export const judicialMaterialClasses = [
  "spc-policy",
  "spc-draft",
  "local-high-court-guidance",
  "local-high-court-report"
] as const;

const textReferenceSchema = z.object({
  path: z.string(),
  label: z.enum(sourceLabels),
  official: z.boolean(),
  noteZh: z.string().optional(),
  noteEn: z.string().optional()
});

const sourceSchema = z.object({
  label: z.enum(sourceLabels),
  url: z.string().url(),
  noteZh: z.string().optional(),
  noteEn: z.string().optional(),
  official: z.boolean(),
  lastVerified: z.string()
});

export const lawSchema = z.object({
  titleZh: z.string(),
  titleEn: z.string(),
  shortTitle: z.string(),
  aliases: z.array(z.string()).default([]),
  jurisdiction: z.enum(jurisdictions),
  documentType: z.enum(lawDocumentTypes),
  authorityLevel: z.enum(lawAuthorityLevels),
  issuingBodyZh: z.string(),
  issuingBodyEn: z.string(),
  promulgationDate: z.string(),
  effectiveDate: z.string(),
  status: z.enum(recordStatuses),
  languageStatus: z.enum(languageStatusValues),
  languages: z.array(z.enum(["zh", "en"])).min(1),
  textStatus: z.enum(textStatusValues),
  topics: z.array(z.enum(topicIds)),
  summaryZh: z.string(),
  summaryEn: z.string(),
  versionGroup: z.string(),
  versionLabel: z.string(),
  judicialMaterialClass: z.enum(judicialMaterialClasses).optional(),
  previousVersionId: z.string().optional(),
  nextVersionId: z.string().optional(),
  applicablePeriodZh: z.string().optional(),
  applicablePeriodEn: z.string().optional(),
  repealBasisZh: z.string().optional(),
  repealBasisEn: z.string().optional(),
  relatedCaseIds: z.array(z.string()).default([]),
  relatedArticleIds: z.array(z.string()).default([]),
  sources: z.array(sourceSchema).min(1),
  texts: z
    .object({
      zh: textReferenceSchema.optional(),
      en: textReferenceSchema.optional()
    })
    .optional()
});

export const caseSchema = z.object({
  titleZh: z.string(),
  titleEn: z.string(),
  forumZh: z.string(),
  forumEn: z.string(),
  citation: z.string(),
  year: z.number().int(),
  jurisdiction: z.enum(jurisdictions),
  caseType: z.enum(caseTypes),
  decisionType: z.string(),
  issuesZh: z.array(z.string()),
  issuesEn: z.array(z.string()),
  holdingZh: z.string(),
  holdingEn: z.string(),
  topics: z.array(z.enum(topicIds)),
  relatedLawIds: z.array(z.string()),
  sources: z.array(sourceSchema).min(1),
  excerpts: z
    .object({
      zh: textReferenceSchema.optional(),
      en: textReferenceSchema.optional()
    })
    .optional()
});

export const articleLinkSchema = z.object({
  titleZh: z.string(),
  titleEn: z.string(),
  authors: z.array(z.string()),
  publisher: z.string(),
  year: z.number().int(),
  sourceKind: z.enum(articleSourceKinds),
  jurisdictions: z.array(z.enum(jurisdictions)),
  topics: z.array(z.enum(topicIds)),
  abstractZh: z.string(),
  abstractEn: z.string(),
  sourceUrl: z.string().url()
});

export const topicSchema = z.object({
  nameZh: z.string(),
  nameEn: z.string(),
  descriptionZh: z.string(),
  descriptionEn: z.string(),
  relatedLawIds: z.array(z.string()),
  relatedCaseIds: z.array(z.string()),
  relatedArticleIds: z.array(z.string()),
  caseGroups: z
    .array(
      z.object({
        titleZh: z.string(),
        titleEn: z.string(),
        descriptionZh: z.string().optional(),
        descriptionEn: z.string().optional(),
        caseIds: z.array(z.string())
      })
    )
    .default([]),
  comparisonRows: z.array(
    z.object({
      labelZh: z.string(),
      labelEn: z.string(),
      cn: z.string(),
      us: z.string().optional(),
      uk: z.string().optional(),
      de: z.string().optional(),
      hk: z.string().optional(),
      sg: z.string().optional()
    })
  )
});

export const jurisdictionConfigSchema = z.object({
  nameZh: z.string(),
  nameEn: z.string(),
  emphasisZh: z.string(),
  emphasisEn: z.string(),
  recordPriority: z.array(z.string()),
  featuredLawIds: z.array(z.string()).default([]),
  featuredCaseIds: z.array(z.string()).default([]),
  featuredArticleIds: z.array(z.string()).default([]),
  officialPortals: z.array(sourceSchema)
});

export const siteCopySchema = z.object({
  defaultLocale: z.enum(["zh", "en"]),
  siteTitleZh: z.string(),
  siteTitleEn: z.string(),
  siteSubtitleZh: z.string(),
  siteSubtitleEn: z.string(),
  homeIntroZh: z.string(),
  homeIntroEn: z.string(),
  moduleOrder: z.array(z.string()),
  moduleLabels: z.array(
    z.object({
      id: z.string(),
      labelZh: z.string(),
      labelEn: z.string(),
      summaryZh: z.string(),
      summaryEn: z.string()
    })
  )
});

export type TopicId = (typeof topicIds)[number];
