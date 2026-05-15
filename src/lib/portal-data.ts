import { classifyCaseRecord, type CaseClassificationId } from "@/lib/case-taxonomy";

type TextSection = {
  heading: string;
  paragraphs: string[];
};

type TextDocument = {
  title: string;
  sections: TextSection[];
};

type Source = {
  label: string;
  url: string;
  official: boolean;
  lastVerified: string;
  noteZh?: string;
  noteEn?: string;
};

type TextReference = {
  path: string;
  label: string;
  official: boolean;
  noteZh?: string;
  noteEn?: string;
};

type LawData = {
  titleZh: string;
  titleEn: string;
  shortTitle: string;
  aliases: string[];
  jurisdiction: string;
  documentType: string;
  authorityLevel: string;
  issuingBodyZh: string;
  issuingBodyEn: string;
  promulgationDate: string;
  effectiveDate: string;
  status: string;
  languageStatus: string;
  languages: string[];
  textStatus: string;
  topics: string[];
  summaryZh: string;
  summaryEn: string;
  versionGroup: string;
  versionLabel: string;
  judicialMaterialClass?: string;
  previousVersionId?: string;
  nextVersionId?: string;
  applicablePeriodZh?: string;
  applicablePeriodEn?: string;
  repealBasisZh?: string;
  repealBasisEn?: string;
  relatedCaseIds: string[];
  relatedArticleIds: string[];
  sources: Source[];
  texts?: {
    zh?: TextReference;
    en?: TextReference;
  };
};

type CaseData = {
  titleZh: string;
  titleEn: string;
  forumZh: string;
  forumEn: string;
  citation: string;
  year: number;
  jurisdiction: string;
  caseType: string;
  decisionType: string;
  issuesZh: string[];
  issuesEn: string[];
  holdingZh: string;
  holdingEn: string;
  topics: string[];
  relatedLawIds: string[];
  sources: Source[];
};

type ArticleLinkData = {
  titleZh: string;
  titleEn: string;
  authors: string[];
  publisher: string;
  year: number;
  sourceKind: string;
  jurisdictions: string[];
  topics: string[];
  abstractZh: string;
  abstractEn: string;
  sourceUrl: string;
};

type TopicData = {
  nameZh: string;
  nameEn: string;
  descriptionZh: string;
  descriptionEn: string;
  relatedLawIds: string[];
  relatedCaseIds: string[];
  relatedArticleIds: string[];
  caseGroups?: Array<{
    titleZh: string;
    titleEn: string;
    descriptionZh?: string;
    descriptionEn?: string;
    caseIds: string[];
  }>;
  comparisonRows: Array<{
    labelZh: string;
    labelEn: string;
    cn: string;
    us?: string;
    uk?: string;
    de?: string;
    hk?: string;
    sg?: string;
  }>;
};

type JurisdictionData = {
  nameZh: string;
  nameEn: string;
  emphasisZh: string;
  emphasisEn: string;
  recordPriority: string[];
  featuredLawIds: string[];
  featuredCaseIds: string[];
  featuredArticleIds: string[];
  officialPortals: Source[];
};

type SiteCopyData = {
  defaultLocale: "zh" | "en";
  siteTitleZh: string;
  siteTitleEn: string;
  siteSubtitleZh: string;
  siteSubtitleEn: string;
  homeIntroZh: string;
  homeIntroEn: string;
  moduleOrder: string[];
  moduleLabels: Array<{
    id: string;
    labelZh: string;
    labelEn: string;
    summaryZh: string;
    summaryEn: string;
  }>;
};

const textModules = import.meta.glob("../content/texts/**/*.json", {
  eager: true,
  import: "default"
}) as Record<string, TextDocument>;

const lawModules = import.meta.glob("../content/law/*.json", {
  eager: true,
  import: "default"
}) as Record<string, LawData>;

const caseModules = import.meta.glob("../content/case/*.json", {
  eager: true,
  import: "default"
}) as Record<string, CaseData>;

const articleModules = import.meta.glob("../content/articleLink/*.json", {
  eager: true,
  import: "default"
}) as Record<string, ArticleLinkData>;

const topicModules = import.meta.glob("../content/topic/*.json", {
  eager: true,
  import: "default"
}) as Record<string, TopicData>;

const jurisdictionModules = import.meta.glob("../content/jurisdictionConfig/*.json", {
  eager: true,
  import: "default"
}) as Record<string, JurisdictionData>;

const siteCopyModules = import.meta.glob("../content/siteCopy/*.json", {
  eager: true,
  import: "default"
}) as Record<string, SiteCopyData>;

function toId(modulePath: string): string {
  const match = modulePath.match(/\/([^/]+)\.json$/);
  return match ? match[1] : modulePath;
}

function resolveText(path?: string): TextDocument | undefined {
  if (!path) {
    return undefined;
  }

  return textModules[`../content/texts/${path}`];
}

function withId<T>(entries: Record<string, T>): Array<T & { id: string }> {
  return Object.entries(entries).map(([modulePath, data]) => ({
    id: toId(modulePath),
    ...data
  }));
}

export type ResolvedLaw = LawData & {
  id: string;
  resolvedTexts: {
    zh?: TextDocument;
    en?: TextDocument;
  };
};

export type ResolvedCase = CaseData & {
  id: string;
  classificationId: CaseClassificationId;
};
export type ResolvedArticleLink = ArticleLinkData & { id: string };
export type ResolvedTopic = TopicData & { id: string };
export type ResolvedJurisdiction = JurisdictionData & { id: string };
export type PortalSnapshot = {
  laws: ResolvedLaw[];
  cases: ResolvedCase[];
  articleLinks: ResolvedArticleLink[];
  topics: ResolvedTopic[];
  jurisdictions: ResolvedJurisdiction[];
  siteCopy: SiteCopyData & { id: string };
};

export async function getPortalSnapshot(): Promise<PortalSnapshot> {
  const laws = withId(lawModules)
    .map((law) => ({
      ...law,
      resolvedTexts: {
        zh: resolveText(law.texts?.zh?.path),
        en: resolveText(law.texts?.en?.path)
      }
    }))
    .sort((left, right) => (left.effectiveDate < right.effectiveDate ? 1 : -1));

  const siteCopy = withId(siteCopyModules)[0];

  return {
    laws,
    cases: withId(caseModules).map((record) => ({
      ...record,
      classificationId: classifyCaseRecord(record)
    })),
    articleLinks: withId(articleModules),
    topics: withId(topicModules).map((topic) => ({
      ...topic,
      caseGroups: topic.caseGroups ?? []
    })),
    jurisdictions: withId(jurisdictionModules),
    siteCopy
  };
}
