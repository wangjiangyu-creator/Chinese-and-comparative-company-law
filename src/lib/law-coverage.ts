import { getBackupOfficialLawSource, getEnglishLawSource } from "@/lib/law-directory";
import type { ResolvedLaw } from "@/lib/portal-data";

type CoverageFamilyDefinition = {
  id: string;
  sectionId: string;
  titleZh: string;
  titleEn: string;
  noteZh: string;
  noteEn: string;
  expectedLawIds: string[];
};

type CoverageSectionDefinition = {
  id: string;
  titleZh: string;
  titleEn: string;
  noteZh: string;
  noteEn: string;
};

export type LawCoverageItem = CoverageFamilyDefinition & {
  presentLawIds: string[];
  missingLawIds: string[];
  missingEnglishSourceIds: string[];
  missingBackupOfficialSourceIds: string[];
};

export type LawCoverageSection = CoverageSectionDefinition & {
  items: LawCoverageItem[];
};

export type LawCoverageChecklist = {
  sections: LawCoverageSection[];
};

const sections: CoverageSectionDefinition[] = [
  {
    id: "national-laws",
    titleZh: "国家级法律",
    titleEn: "National laws",
    noteZh: "优先跟踪公司法、证券法、民法典法人编和合伙企业法等基础法律的版本链、英文链接和全文入口。",
    noteEn: "Tracks version chains, English links, and full-text access for core national statutes such as the Company Law, Securities Law, Civil Code legal-person materials, and the Partnership Enterprise Law."
  },
  {
    id: "administrative-regulations",
    titleZh: "国务院行政法规",
    titleEn: "Administrative regulations",
    noteZh: "重点覆盖公司登记、企业法人登记、市场主体登记和注册资本制度的国务院层级规则。",
    noteEn: "Covers State Council-level rules on company registration, enterprise legal-person registration, market-entity registration, and capital-registration regimes."
  },
  {
    id: "judicial-materials",
    titleZh: "司法材料",
    titleEn: "Judicial materials",
    noteZh: "把最高法院司法解释、会议纪要与地方高院审判指引分层管理。",
    noteEn: "Separates SPC judicial interpretations and policy materials from local high court guidance."
  },
  {
    id: "departmental-rules",
    titleZh: "部门规章与监管规则",
    titleEn: "Departmental and regulatory rules",
    noteZh: "重点跟踪证监会核心规则的现行版、历史版、英文链接和备选全文入口。",
    noteEn: "Tracks current and historical CSRC core rules together with English links and backup full-text sources."
  },
  {
    id: "local-regulations",
    titleZh: "地方法规",
    titleEn: "Local regulations",
    noteZh: "维护地方营商环境与登记规则，以及深圳等早期公司条例资料。",
    noteEn: "Maintains local business-environment and registration rules together with historical Shenzhen company materials."
  }
];

const families: CoverageFamilyDefinition[] = [
  {
    id: "company-law",
    sectionId: "national-laws",
    titleZh: "公司法版本链",
    titleEn: "Company Law version chain",
    noteZh: "保持 1993 至 2023 各版本的连续版本链和英文获取入口。",
    noteEn: "Maintains a continuous version chain from 1993 through 2023, together with English access points.",
    expectedLawIds: [
      "cn-company-law-1993",
      "cn-company-law-1999",
      "cn-company-law-2004",
      "cn-company-law-2005",
      "cn-company-law-2013",
      "cn-company-law-2018",
      "cn-company-law-2023"
    ]
  },
  {
    id: "securities-law",
    sectionId: "national-laws",
    titleZh: "证券法版本链",
    titleEn: "Securities Law version chain",
    noteZh: "保持 1998 至 2019 的完整版本序列。",
    noteEn: "Maintains the full version sequence from 1998 through 2019.",
    expectedLawIds: [
      "cn-securities-law-1998",
      "cn-securities-law-2004",
      "cn-securities-law-2005",
      "cn-securities-law-2013",
      "cn-securities-law-2014",
      "cn-securities-law-2019"
    ]
  },
  {
    id: "company-registration-regulations",
    sectionId: "administrative-regulations",
    titleZh: "公司登记管理条例链",
    titleEn: "Company registration regulation chain",
    noteZh: "跟踪公司登记管理条例从 1994 到市场主体登记体系替代前的关键版本。",
    noteEn: "Tracks the Company Registration Regulation from 1994 through the key versions preceding replacement by the market-entity registration regime.",
    expectedLawIds: [
      "cn-company-registration-regulations-1994",
      "cn-company-registration-regulations-2014",
      "cn-company-registration-regulations-2016"
    ]
  },
  {
    id: "enterprise-legal-person-registration-regulations",
    sectionId: "administrative-regulations",
    titleZh: "企业法人登记管理条例链",
    titleEn: "Enterprise legal-person registration regulation chain",
    noteZh: "至少保留 1988 原始法和市场主体登记改革前的末次版本，并与施行细则关联。",
    noteEn: "Keeps at least the 1988 original regulation and the final pre-market-entity-registration version, linked to the implementing rules.",
    expectedLawIds: [
      "cn-enterprise-legal-person-registration-regulations-1988",
      "cn-enterprise-legal-person-registration-regulations-2019",
      "cn-enterprise-legal-person-registration-rules-2017"
    ]
  },
  {
    id: "market-entity-registration-regime",
    sectionId: "administrative-regulations",
    titleZh: "市场主体登记法系",
    titleEn: "Market-entity registration regime",
    noteZh: "包括市场主体登记管理条例及配套细则、名称登记、档案、强制注销和代理规则。",
    noteEn: "Includes the Market Entity Registration Regulations and supporting rules on names, archives, forced deregistration, and filing agents.",
    expectedLawIds: [
      "cn-market-entity-registration-regulations-2021",
      "cn-market-entity-registration-rules-2022",
      "cn-enterprise-name-registration-regulations-2020",
      "cn-enterprise-name-registration-implementation-measures-2023",
      "cn-registration-archives-measures-2025",
      "cn-forced-company-deregistration-measures-2025",
      "cn-registration-application-agency-measures-2025",
      "cn-samr-company-registration-implementation-measures-2024",
      "cn-state-council-registered-capital-rules-2024"
    ]
  },
  {
    id: "spc-company-law-interpretations",
    sectionId: "judicial-materials",
    titleZh: "公司法司法解释与最高法规则材料",
    titleEn: "SPC company-law interpretations and policy materials",
    noteZh: "覆盖公司法司法解释（一）至（五）、时间效力规定和统一解释草案。",
    noteEn: "Covers Company Law Interpretations I-V, the temporal-application provisions, and the unified draft interpretation.",
    expectedLawIds: [
      "cn-spc-company-law-interpretation-1-2006",
      "cn-spc-company-law-interpretation-1-2014",
      "cn-spc-company-law-interpretation-2-2008",
      "cn-spc-company-law-interpretation-2-2020",
      "cn-spc-company-law-interpretation-3-2011",
      "cn-spc-company-law-interpretation-3-2021",
      "cn-spc-company-law-interpretation-4-2017",
      "cn-spc-company-law-interpretation-5-2019",
      "cn-spc-company-law-interpretation-5-2021",
      "cn-spc-company-law-time-effect-2024",
      "cn-spc-company-law-unified-draft-2025",
      "cn-spc-compulsory-liquidation-minutes-2009",
      "cn-national-civil-commercial-trial-minutes-2019"
    ]
  },
  {
    id: "local-high-court-company-guidance",
    sectionId: "judicial-materials",
    titleZh: "地方高院公司与证券审判指引",
    titleEn: "Local high court company and securities guidance",
    noteZh: "聚焦北京、上海、江苏、广东等地高院在公司、证券、破产和营商环境领域的指引与通报。",
    noteEn: "Focuses on Beijing, Shanghai, Jiangsu, and Guangdong high-court materials on company, securities, bankruptcy, and business-environment adjudication.",
    expectedLawIds: [
      "bj-high-court-securities-dispute-opinion-2019",
      "bj-high-court-bankruptcy-fast-track-opinion-2018",
      "bj-high-court-bankruptcy-procedure-rules-2013",
      "sh-high-court-bankruptcy-guideline-2018",
      "sh-high-court-financial-commercial-white-paper-2020",
      "js-high-court-company-disputes-report-2017",
      "gd-high-court-zombie-enterprise-guideline-2019",
      "gd-high-court-bankruptcy-development-opinion-2023",
      "gd-high-court-securities-white-paper-2025"
    ]
  },
  {
    id: "listed-company-disclosure-measures",
    sectionId: "departmental-rules",
    titleZh: "上市公司信息披露管理办法链",
    titleEn: "Listed-company disclosure measures chain",
    noteZh: "至少保持 2007 起点和 2021 现行文本，并区分官方英文与参考英文。",
    noteEn: "Maintains at least the 2007 starting point and the 2021 current text, with explicit distinction between official and reference English sources.",
    expectedLawIds: [
      "cn-listed-company-disclosure-measures-2007",
      "cn-listed-company-disclosure-measures-2021"
    ]
  },
  {
    id: "listed-company-governance-code",
    sectionId: "departmental-rules",
    titleZh: "上市公司治理准则链",
    titleEn: "Listed-company governance code chain",
    noteZh: "把 2002、2018、2025 三个关键版本串联起来。",
    noteEn: "Connects the three key versions from 2002, 2018, and 2025.",
    expectedLawIds: [
      "cn-csrc-listed-company-governance-code-2002",
      "cn-csrc-listed-company-governance-code-2018",
      "cn-csrc-listed-company-governance-code-2025"
    ]
  },
  {
    id: "articles-of-association-guidelines",
    sectionId: "departmental-rules",
    titleZh: "上市公司章程指引链",
    titleEn: "Articles of association guidelines chain",
    noteZh: "把 2016、2022、2025 版本串联，便于查看新公司法下的章程条款演进。",
    noteEn: "Connects the 2016, 2022, and 2025 guideline versions for quick comparison under the new Company Law.",
    expectedLawIds: [
      "cn-csrc-articles-of-association-guidelines-2016",
      "cn-csrc-articles-of-association-guidelines-2022",
      "cn-csrc-articles-of-association-guidelines-2025"
    ]
  },
  {
    id: "major-asset-reorganization-measures",
    sectionId: "departmental-rules",
    titleZh: "重大资产重组管理办法链",
    titleEn: "Major asset reorganization measures chain",
    noteZh: "串联 2008、2014、2025 三个代表性文本。",
    noteEn: "Connects the representative 2008, 2014, and 2025 texts.",
    expectedLawIds: [
      "cn-major-asset-reorganization-measures-2008",
      "cn-major-asset-reorganization-measures-2014",
      "cn-major-asset-reorganization-measures-2025"
    ]
  },
  {
    id: "takeover-measures",
    sectionId: "departmental-rules",
    titleZh: "上市公司收购管理办法链",
    titleEn: "Takeover measures chain",
    noteZh: "至少保持 2006、2014、2020 三个关键节点。",
    noteEn: "Maintains at least the 2006, 2014, and 2020 key nodes.",
    expectedLawIds: [
      "cn-takeover-measures-2006",
      "cn-takeover-measures-2014",
      "cn-takeover-measures-2020"
    ]
  },
  {
    id: "local-business-environment-registration",
    sectionId: "local-regulations",
    titleZh: "地方营商环境与登记规则",
    titleEn: "Local business-environment and registration rules",
    noteZh: "聚焦北京、上海、深圳等地的营商环境和商事登记规则。",
    noteEn: "Focuses on Beijing, Shanghai, Shenzhen, and other local rules on business environment and commercial registration.",
    expectedLawIds: [
      "bj-business-environment-regulations-2024",
      "sz-business-environment-regulations-2020",
      "sz-commercial-registration-rules-2020",
      "sh-business-entity-domicile-measures-2024",
      "sh-enterprise-domicile-measures-2015"
    ]
  },
  {
    id: "historical-local-company-materials",
    sectionId: "local-regulations",
    titleZh: "历史地方公司与商事法规资料",
    titleEn: "Historical local company and commercial materials",
    noteZh: "保留深圳经济特区早期公司条例和组建办法，便于历史沿革检索。",
    noteEn: "Preserves early Shenzhen Special Zone company regulations and incorporation rules for historical research.",
    expectedLawIds: [
      "sz-joint-stock-company-regulations-1993",
      "sz-joint-stock-incorporation-rules-1994",
      "sz-limited-liability-company-regulations-1997",
      "sz-wholly-state-owned-company-regulations-1999"
    ]
  }
];

function sortLawIdsByEffectiveDate(lawIds: string[], lawMap: Map<string, ResolvedLaw>) {
  return [...lawIds].sort((leftId, rightId) => {
    const left = lawMap.get(leftId);
    const right = lawMap.get(rightId);

    if (!left || !right) {
      return leftId.localeCompare(rightId);
    }

    if (left.effectiveDate !== right.effectiveDate) {
      return left.effectiveDate < right.effectiveDate ? -1 : 1;
    }

    return leftId.localeCompare(rightId);
  });
}

export function getLawCoverageChecklist(laws: ResolvedLaw[]): LawCoverageChecklist {
  const lawMap = new Map(laws.map((law) => [law.id, law]));

  return {
    sections: sections.map((section) => {
      const items = families
        .filter((item) => item.sectionId === section.id)
        .map((item) => {
          const presentLawIds = sortLawIdsByEffectiveDate(
            item.expectedLawIds.filter((lawId) => lawMap.has(lawId)),
            lawMap
          );
          const missingLawIds = item.expectedLawIds.filter((lawId) => !lawMap.has(lawId));
          const missingEnglishSourceIds = presentLawIds.filter((lawId) => {
            const law = lawMap.get(lawId);
            return law ? !getEnglishLawSource(law) : false;
          });
          const missingBackupOfficialSourceIds = presentLawIds.filter((lawId) => {
            const law = lawMap.get(lawId);
            return law ? !getBackupOfficialLawSource(law) : false;
          });

          return {
            ...item,
            presentLawIds,
            missingLawIds,
            missingEnglishSourceIds,
            missingBackupOfficialSourceIds
          };
        });

      return {
        ...section,
        items
      };
    })
  };
}
