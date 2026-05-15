export const caseClassificationIds = [
  "fiduciary-loyalty",
  "representative-action",
  "related-party-misappropriation",
  "board-governance-resolution",
  "legal-representative-and-seal-control",
  "profit-distribution-remedies",
  "inspection-books-evidence",
  "shareholder-status-equity-ownership",
  "registration-legal-representative",
  "capital-contribution-maintenance",
  "corporate-reorganization-form-change",
  "vam-disputes",
  "corporate-veil-piercing",
  "dissolution-liquidation",
  "corporate-social-responsibility",
  "listed-company-governance",
  "partnership-governance",
  "comparative-corporate",
  "general-corporate-governance"
] as const;

export type CaseClassificationId = (typeof caseClassificationIds)[number];

type CaseLike = {
  jurisdiction: string;
  decisionType: string;
  issuesZh: string[];
  issuesEn: string[];
  topics: string[];
  titleZh: string;
  titleEn: string;
  holdingZh: string;
  holdingEn: string;
};

function includesAny(haystack: string, needles: string[]): boolean {
  return needles.some((needle) => haystack.includes(needle));
}

export function classifyCaseRecord(record: CaseLike): CaseClassificationId {
  const text = [
    record.titleZh,
    record.titleEn,
    record.decisionType,
    ...record.issuesZh,
    ...record.issuesEn,
    record.holdingZh,
    record.holdingEn,
    ...record.topics
  ]
    .join(" ")
    .toLowerCase();

  if (record.jurisdiction !== "cn") {
    return "comparative-corporate";
  }

  if (record.topics.includes("partnership-enterprises")) {
    return "partnership-governance";
  }

  if (
    record.topics.includes("corporate-reorganization") ||
    includesAny(text, [
      "吸收合并",
      "公司分立",
      "企业分立",
      "公司兼并",
      "收购合并",
      "资产接收",
      "企业改制",
      "改制为有限责任公司",
      "变更公司形式",
      "组织形式变更",
      "实质合并破产",
      "合并重整",
      "listing reorganization",
      "substantive consolidation",
      "corporate reorganization",
      "form change"
    ])
  ) {
    return "corporate-reorganization-form-change";
  }

  if (
    record.topics.includes("vam-disputes") ||
    includesAny(text, ["对赌", "估值调整", "业绩补偿", "vam", "valuation adjustment", "earnout"])
  ) {
    return "vam-disputes";
  }

  if (
    includesAny(text, [
      "股东资格",
      "股权确认",
      "隐名股东",
      "名义股东",
      "实际出资人",
      "股份代持",
      "股权代持",
      "冒名登记",
      "显名",
      "equity confirmation",
      "beneficial owner",
      "nominee shareholder",
      "actual investor",
      "impersonated registration"
    ])
  ) {
    return "shareholder-status-equity-ownership";
  }

  if (
    record.topics.includes("corporate-veil-piercing") ||
    record.decisionType === "公司法人人格否认" ||
    (!record.topics.includes("registered-capital") &&
      includesAny(text, [
        "公司法人人格否认",
        "人格混同",
        "一人有限责任公司",
        "一人公司",
        "corporate veil",
        "veil piercing",
        "separate corporate personality",
        "one-person company",
        "commingling"
      ]))
  ) {
    return "corporate-veil-piercing";
  }

  if (
    record.topics.includes("corporate-social-responsibility") ||
    includesAny(text, [
      "社会责任",
      "公益诉讼",
      "环境污染",
      "生态环境",
      "大气污染",
      "消费者",
      "食品安全",
      "电信服务",
      "劳动关系",
      "劳动报酬",
      "平台用工",
      "个体工商户",
      "environmental pollution",
      "ecological environment",
      "food safety",
      "consumer",
      "telecom service",
      "labor relation",
      "labor remuneration",
      "platform labor"
    ])
  ) {
    return "corporate-social-responsibility";
  }

  if (
    record.topics.includes("listed-companies") ||
    includesAny(text, ["上市公司", "证券市场", "回购", "股份回购", "listed company", "securities market", "buyback"])
  ) {
    return "listed-company-governance";
  }

  if (
    includesAny(text, [
      "代表诉讼",
      "代位诉讼",
      "股东代表诉讼",
      "监事代表诉讼",
      "supervisory representative",
      "representative action",
      "derivative action",
      "derivative enforcement",
      "execution review case"
    ])
  ) {
    return "representative-action";
  }

  if (
    record.topics.includes("related-transaction-harm") ||
    record.topics.includes("actual-controller-tunneling") ||
    includesAny(text, [
      "关联交易",
      "利益输送",
      "自我交易",
      "商业机会",
      "占用公司资金",
      "related-party transaction",
      "tunneling",
      "self-dealing",
      "business opportunity"
    ])
  ) {
    return "related-party-misappropriation";
  }

  if (
    record.topics.includes("dissolution-liquidation") ||
    includesAny(text, ["解散", "清算", "liquidation", "dissolution", "人格否认", "veil piercing"])
  ) {
    return "dissolution-liquidation";
  }

  if (
    record.topics.includes("director-abuse") ||
    record.topics.includes("director-liability-litigation") ||
    (record.topics.includes("directors-officer-loyalty-and-duties") &&
      includesAny(text, [
        "忠实义务",
        "勤勉义务",
        "损害公司利益",
        "董监高",
        "duty of loyalty",
        "duty of diligence",
        "harming corporate interests",
        "director liability"
      ]))
  ) {
    return "fiduciary-loyalty";
  }

  if (
    record.topics.includes("legal-representative-and-seal-control") ||
    includesAny(text, [
      "法定代表人变更",
      "法定代表人辞任",
      "法定代表人免职",
      "法定代表人登记",
      "法定代表人印章",
      "法定代表人越权",
      "表见代表",
      "公司代表权",
      "公章",
      "证照返还",
      "公司证照",
      "营业执照",
      "私刻公章",
      "假章",
      "人名章",
      "legal representative change",
      "resignation of legal representative",
      "dismissal of a legal representative",
      "legal-representative registration",
      "representative authority",
      "apparent representation",
      "apparent authority",
      "company seal",
      "corporate seal",
      "company chop",
      "certificate return",
      "company certificate",
      "false seal",
      "name seal"
    ])
  ) {
    return "legal-representative-and-seal-control";
  }

  if (
    includesAny(text, [
      "股东知情权",
      "账簿",
      "会计账簿",
      "财务资料",
      "证照",
      "inspection",
      "books",
      "financial records",
      "certificate"
    ])
  ) {
    return "inspection-books-evidence";
  }

  if (
    includesAny(text, [
      "表决权",
      "表决程序",
      "股东会决议不成立",
      "voting rights",
      "voting procedure",
      "non-establishment of shareholder resolution"
    ])
  ) {
    return "board-governance-resolution";
  }

  if (
    includesAny(text, [
      "盈余分配",
      "利润分配",
      "profit distribution",
      "distributable profits",
      "dividend"
    ])
  ) {
    return "profit-distribution-remedies";
  }

  if (
    record.topics.includes("registered-capital") ||
    includesAny(text, [
      "注册资本",
      "股东出资",
      "认缴出资",
      "出资义务",
      "抽逃出资",
      "股东除名",
      "capital contribution",
      "registered capital",
      "capital withdrawal"
    ])
  ) {
    return "capital-contribution-maintenance";
  }

  if (
    includesAny(text, [
      "法定代表人变更",
      "公司登记",
      "变更登记",
      "legal representative change",
      "company registration",
      "registration"
    ])
  ) {
    return "registration-legal-representative";
  }

  if (
    includesAny(text, [
      "公司决议",
      "董事会",
      "股东会",
      "决议撤销",
      "决议效力",
      "board",
      "shareholders' resolution",
      "resolution",
      "governance structure"
    ])
  ) {
    return "board-governance-resolution";
  }

  if (record.topics.includes("directors-officer-loyalty-and-duties")) {
    return "fiduciary-loyalty";
  }

  return "general-corporate-governance";
}
