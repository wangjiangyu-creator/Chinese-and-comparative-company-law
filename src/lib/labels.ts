import { pickLocalized, type Locale } from "@/lib/i18n";

type LocalizedLabel = {
  zh: string;
  en: string;
};

const lawAuthorityLabels: Record<string, LocalizedLabel> = {
  "national-law": { zh: "国家法律", en: "National law" },
  "administrative-regulation": { zh: "行政法规", en: "Administrative regulation" },
  "departmental-rule": { zh: "部门规章", en: "Departmental rule" },
  "judicial-interpretation": { zh: "司法解释", en: "Judicial interpretation" },
  "judicial-policy": { zh: "审判政策材料", en: "Adjudication policy" },
  "regulatory-code": { zh: "监管规则", en: "Regulatory code" },
  "exchange-rule": { zh: "交易所规则", en: "Exchange rule" },
  "local-regulation": { zh: "地方法规", en: "Local regulation" },
  "comparative-statute": { zh: "比较法成文法", en: "Comparative statute" }
};

const textStatusLabels: Record<string, LocalizedLabel> = {
  full: { zh: "全文", en: "Full text" },
  "selected-excerpt": { zh: "精选摘录", en: "Curated excerpt" },
  "metadata-only": { zh: "仅元数据", en: "Metadata only" }
};

const recordStatusLabels: Record<string, LocalizedLabel> = {
  effective: { zh: "现行有效", en: "Effective" },
  historical: { zh: "历史版本", en: "Historical" },
  reference: { zh: "参考材料", en: "Reference" }
};

const topicLabels: Record<string, LocalizedLabel> = {
  "business-environment": { zh: "营商环境", en: "Business environment" },
  "corporate-formation": { zh: "公司设立", en: "Corporate formation" },
  "corporate-reorganization": {
    zh: "公司重组与形态变动",
    en: "Corporate reorganization and form changes"
  },
  "corporate-social-responsibility": {
    zh: "企业社会责任",
    en: "Corporate social responsibility"
  },
  "corporate-veil-piercing": {
    zh: "公司人格否认 / 刺破公司面纱",
    en: "Corporate veil piercing"
  },
  "partnership-enterprises": { zh: "合伙企业", en: "Partnership enterprises" },
  "registered-capital": { zh: "注册资本和出资纠纷", en: "Registered capital and contribution disputes" },
  "shareholder-rights": { zh: "股东权利", en: "Shareholder rights" },
  "corporate-governance": { zh: "公司治理", en: "Corporate governance" },
  "legal-representative-and-seal-control": {
    zh: "法定代表人、公司代表权与公章控制",
    en: "Legal representative, representative authority, and seal control"
  },
  "actual-controller-tunneling": {
    zh: "实际控制人及利益输送",
    en: "Actual controllers and tunneling"
  },
  "director-abuse": { zh: "董监高侵害公司利益", en: "Fiduciary abuse by directors/supervisors" },
  "director-liability-litigation": { zh: "董监高责任追责", en: "Director and executive liability litigation" },
  "related-transaction-harm": {
    zh: "关联交易与利益输送",
    en: "Related-party transactions and tunneling"
  },
  "listed-companies": { zh: "上市公司", en: "Listed companies" },
  disclosure: { zh: "信息披露", en: "Disclosure" },
  "dissolution-liquidation": { zh: "解散清算", en: "Dissolution and liquidation" },
  "vam-disputes": { zh: "对赌协议", en: "VAM disputes" },
  "comparative-governance": { zh: "比较治理", en: "Comparative governance" },
  "directors-officer-loyalty-and-duties": {
    zh: "董监高义务与责任",
    en: "Duties and liabilities of directors, supervisors, and executives"
  }
};

const jurisdictionLabels: Record<string, LocalizedLabel> = {
  cn: { zh: "中国", en: "China" },
  us: { zh: "美国", en: "United States" },
  uk: { zh: "英国", en: "United Kingdom" },
  de: { zh: "德国", en: "Germany" },
  hk: { zh: "香港", en: "Hong Kong" },
  sg: { zh: "新加坡", en: "Singapore" }
};

const languageStatusLabels: Record<string, LocalizedLabel> = {
  "official-zh": { zh: "官方中文", en: "Official Chinese" },
  "official-bilingual": { zh: "官方中英文本", en: "Official bilingual" },
  "official-zh-plus-reference-en": {
    zh: "官方中文加参考英文",
    en: "Official Chinese plus reference English"
  },
  "official-en": { zh: "官方英文", en: "Official English" },
  "comparative-bilingual": { zh: "比较法双语", en: "Comparative bilingual" }
};

const caseTypeLabels: Record<string, LocalizedLabel> = {
  "guiding-case": { zh: "指导案例", en: "Guiding case" },
  "reference-case": { zh: "参考案例", en: "Reference case" },
  "database-case": { zh: "入库案例", en: "Database case" },
  "comparative-case": { zh: "比较法案例", en: "Comparative case" }
};

const caseClassificationLabels: Record<string, LocalizedLabel> = {
  "fiduciary-loyalty": { zh: "忠实勤勉义务", en: "Loyalty and diligence" },
  "representative-action": { zh: "代表诉讼与追责", en: "Representative and derivative enforcement" },
  "related-party-misappropriation": { zh: "关联交易与利益输送", en: "Related-party transactions and tunneling" },
  "board-governance-resolution": { zh: "决议与治理结构", en: "Corporate resolutions and governance structure" },
  "legal-representative-and-seal-control": {
    zh: "法定代表人、代表权与公章控制",
    en: "Legal representative, representative authority, and seal control"
  },
  "profit-distribution-remedies": { zh: "利润分配救济", en: "Profit-distribution remedies" },
  "inspection-books-evidence": { zh: "知情权与账簿证据", en: "Inspection rights and corporate books" },
  "shareholder-status-equity-ownership": {
    zh: "股东资格与股权归属",
    en: "Shareholder status and equity ownership"
  },
  "registration-legal-representative": { zh: "公司登记与法定代表人", en: "Company registration and legal representative" },
  "capital-contribution-maintenance": { zh: "出资与资本维持", en: "Capital contribution and capital maintenance" },
  "corporate-reorganization-form-change": {
    zh: "公司重组与形态变动",
    en: "Corporate reorganization and form changes"
  },
  "vam-disputes": { zh: "对赌协议与回购补偿", en: "VAM, buyback, and earnout" },
  "corporate-veil-piercing": {
    zh: "公司人格否认 / 刺破公司面纱",
    en: "Corporate veil piercing"
  },
  "dissolution-liquidation": { zh: "解散清算与人格否认", en: "Dissolution, liquidation, and veil piercing" },
  "corporate-social-responsibility": {
    zh: "企业社会责任与公共利益",
    en: "Corporate social responsibility and public-interest protection"
  },
  "listed-company-governance": { zh: "上市公司治理", en: "Listed-company governance" },
  "partnership-governance": { zh: "合伙企业争议", en: "Partnership-enterprise disputes" },
  "comparative-corporate": { zh: "比较法案例", en: "Comparative case law" },
  "general-corporate-governance": { zh: "一般公司治理", en: "General corporate governance" }
};

const articleSourceLabels: Record<string, LocalizedLabel> = {
  scholar: { zh: "学者文章", en: "Scholarly writing" },
  "law-firm": { zh: "律所文章", en: "Law firm analysis" },
  publisher: { zh: "出版或媒体", en: "Publisher piece" },
  "research-platform": { zh: "研究平台", en: "Research platform" }
};

const sourceLabels: Record<string, LocalizedLabel> = {
  "Official Chinese": { zh: "官方中文", en: "Official Chinese" },
  "Official English": { zh: "官方英文", en: "Official English" },
  "Official English (reference)": {
    zh: "官方英文（参考）",
    en: "Official English (reference)"
  },
  "Public English translation": {
    zh: "公开英文翻译",
    en: "Public English translation"
  },
  "Public English translation (reference)": {
    zh: "公开英文翻译（参考）",
    en: "Public English translation (reference)"
  },
  "Law firm English translation": {
    zh: "律所英文翻译",
    en: "Law firm English translation"
  },
  "Official release": { zh: "官方发布页", en: "Official release" },
  "Official exchange rule": { zh: "交易所正式规则", en: "Official exchange rule" },
  "Official court release": { zh: "法院官方发布", en: "Official court release" },
  "Research platform": { zh: "研究平台", en: "Research platform" },
  "Publisher page": { zh: "出版/媒体页面", en: "Publisher page" },
  "Law firm analysis": { zh: "律所分析", en: "Law firm analysis" }
};

const decisionTypeLabels: Record<string, LocalizedLabel> = {
  "公司解散纠纷": { zh: "公司解散纠纷", en: "Company dissolution dispute" },
  "公司决议撤销纠纷": { zh: "公司决议撤销纠纷", en: "Corporate resolution rescission dispute" },
  "公司决议效力确认纠纷": {
    zh: "公司决议效力确认纠纷",
    en: "Corporate resolution validity dispute"
  },
  "股东资格确认纠纷": { zh: "股东资格确认纠纷", en: "Shareholder status dispute" },
  "股东出资纠纷": { zh: "股东出资纠纷", en: "Capital contribution dispute" },
  "股权确认纠纷": { zh: "股权确认纠纷", en: "Equity confirmation dispute" },
  "股东知情权纠纷": { zh: "股东知情权纠纷", en: "Shareholder inspection dispute" },
  "股东权纠纷": { zh: "股东权纠纷", en: "Shareholder rights dispute" },
  "合伙企业财产份额转让纠纷": {
    zh: "合伙企业财产份额转让纠纷",
    en: "Partnership share transfer dispute"
  },
  "环境污染民事公益诉讼": {
    zh: "环境污染民事公益诉讼",
    en: "Environmental public-interest litigation"
  },
  "生态环境损害赔偿、环境民事公益诉讼": {
    zh: "生态环境损害赔偿、环境民事公益诉讼",
    en: "Ecological-damage and environmental public-interest litigation"
  },
  "生态环境保护民事公益诉讼": {
    zh: "生态环境保护民事公益诉讼",
    en: "Ecological-protection public-interest litigation"
  },
  "生态环境损害赔偿诉讼": {
    zh: "生态环境损害赔偿诉讼",
    en: "Ecological-damage compensation litigation"
  },
  "大气污染责任纠纷": { zh: "大气污染责任纠纷", en: "Air-pollution liability dispute" },
  "信托合同纠纷": { zh: "信托合同纠纷", en: "Trust contract dispute" },
  "买卖合同纠纷": { zh: "买卖合同纠纷", en: "Sales contract dispute" },
  "借款担保合同纠纷": { zh: "借款担保合同纠纷", en: "Loan and guarantee dispute" },
  "房屋买卖合同纠纷": { zh: "房屋买卖合同纠纷", en: "Housing sale contract dispute" },
  "电信服务合同纠纷": { zh: "电信服务合同纠纷", en: "Telecom service contract dispute" },
  "合同纠纷": { zh: "合同纠纷", en: "Contract dispute" },
  "民间借贷纠纷": { zh: "民间借贷纠纷", en: "Private lending dispute" },
  "金融不良债权追偿纠纷": {
    zh: "金融不良债权追偿纠纷",
    en: "Recovery of non-performing financial debt dispute"
  },
  "建设工程合同纠纷": { zh: "建设工程合同纠纷", en: "Construction contract dispute" },
  "破产重整": { zh: "破产重整", en: "Bankruptcy reorganization" },
  "执行程序中的异议之诉": {
    zh: "执行程序中的异议之诉",
    en: "Action challenging an objection ruling in enforcement"
  },
  "追加被执行人执行异议之诉": {
    zh: "追加被执行人执行异议之诉",
    en: "Action challenging the addition of a judgment debtor in enforcement"
  },
  "新增资本认购纠纷": { zh: "新增资本认购纠纷", en: "New-capital subscription dispute" },
  "侵害植物新品种权纠纷": {
    zh: "侵害植物新品种权纠纷",
    en: "Plant variety right infringement dispute"
  },
  "侵权责任纠纷": { zh: "侵权责任纠纷", en: "Tort liability dispute" },
  "健康权纠纷": { zh: "健康权纠纷", en: "Right-to-health dispute" },
  "人格权纠纷": { zh: "人格权纠纷", en: "Personality-rights dispute" },
  "平等就业权纠纷": { zh: "平等就业权纠纷", en: "Equal-employment-rights dispute" },
  "追索劳动报酬纠纷": { zh: "追索劳动报酬纠纷", en: "Labor remuneration dispute" },
  "确认劳动关系纠纷": { zh: "确认劳动关系纠纷", en: "Employment-relationship confirmation dispute" },
  "公司盈余分配纠纷": {
    zh: "公司盈余分配纠纷",
    en: "Corporate profit distribution dispute"
  },
  "公司清算责任": { zh: "公司清算责任", en: "Company liquidation liability" },
  "公司法人人格否认": { zh: "公司法人人格否认", en: "Corporate veil piercing" },
  "股东诉讼主体资格": { zh: "股东诉讼主体资格", en: "Shareholder standing" },
  "公司对外担保": { zh: "公司对外担保", en: "Corporate external guarantee" },
  "公司决议纠纷": { zh: "公司决议纠纷", en: "Corporate resolution dispute" },
  "与公司有关的纠纷": { zh: "与公司有关的纠纷", en: "Company-related dispute" },
  "财产权属纠纷": { zh: "财产权属纠纷", en: "Property title dispute" },
  "股权转让纠纷": { zh: "股权转让纠纷", en: "Equity transfer dispute" },
  "公司证照返还纠纷": {
    zh: "公司证照返还纠纷",
    en: "Company certificate return dispute"
  },
  "请求变更公司登记纠纷": {
    zh: "请求变更公司登记纠纷",
    en: "Request to change company registration dispute"
  },
  "公司设立登记行政争议": {
    zh: "公司设立登记行政争议",
    en: "Administrative dispute over company establishment registration"
  },
  "经营范围变更登记行政争议": {
    zh: "经营范围变更登记行政争议",
    en: "Administrative dispute over business-scope change registration"
  },
  "企业名称争议与变更登记行政争议": {
    zh: "企业名称争议与变更登记行政争议",
    en: "Administrative dispute over enterprise-name adjudication and change registration"
  },
  "股东知情权、公司盈余分配纠纷": {
    zh: "股东知情权、公司盈余分配纠纷",
    en: "Shareholder inspection and profit distribution dispute"
  },
  "损害公司利益责任纠纷": {
    zh: "损害公司利益责任纠纷",
    en: "Company-interest damage liability dispute"
  },
  "公司关联交易损害责任纠纷": {
    zh: "公司关联交易损害责任纠纷",
    en: "Related-party transaction damage liability dispute"
  },
  "股份回购合同纠纷": { zh: "股份回购合同纠纷", en: "Share buyback contract dispute" },
  "增资纠纷": { zh: "增资纠纷", en: "Capital increase dispute" },
  "其他合同纠纷": { zh: "其他合同纠纷", en: "Other contract dispute" },
  "请求公司收购股份纠纷": {
    zh: "请求公司收购股份纠纷",
    en: "Request for company share repurchase dispute"
  },
  "执行复议案": { zh: "执行复议案", en: "Execution review case" },
  "董事义务": { zh: "董事义务", en: "Directors' duties" },
  "董事注意义务": { zh: "董事注意义务", en: "Duty of care" },
  "董事监督义务": { zh: "董事监督义务", en: "Duty of oversight" },
  "收购防御审查": { zh: "收购防御审查", en: "Takeover-defense review" },
  "æ”¶è´­é˜²å¾¡å®¡æŸ¥": { zh: "收购防御审查", en: "Takeover-defense review" },
  "Ã¦â€Â¶Ã¨Â´Â­Ã©ËœÂ²Ã¥Â¾Â¡Ã¥Â®Â¡Ã¦Å¸Â¥": { zh: "收购防御审查", en: "Takeover-defense review" },
  "控制权出售义务": { zh: "控制权出售义务", en: "Sale-of-control duties" },
  "æŽ§åˆ¶æƒå‡ºå”®ä¹‰åŠ¡": { zh: "控制权出售义务", en: "Sale-of-control duties" },
  "Ã¦Å½Â§Ã¥Ë†Â¶Ã¦ÂÆ’Ã¥â€¡ÂºÃ¥â€Â®Ã¤Â¹â€°Ã¥Å Â¡": { zh: "控制权出售义务", en: "Sale-of-control duties" },
  "全体公平审查": { zh: "全体公平审查", en: "Entire-fairness review" },
  "控制股东私有化与双重保护": {
    zh: "控制股东私有化与双重保护",
    en: "Controller freeze-out and dual-protection framework"
  },
  "董事获利返还与忠实义务": {
    zh: "董事获利返还与忠实义务",
    en: "Directors' profit accountability and duty of loyalty"
  },
  "揭开公司面纱": { zh: "揭开公司面纱", en: "Corporate veil piercing" },
  "董事权力目的限制": { zh: "董事权力目的限制", en: "Proper-purpose review of directors' powers" },
  "公司独立人格": { zh: "公司独立人格", en: "Separate corporate personality" },
  "少数股东压迫救济": { zh: "少数股东压迫救济", en: "Minority-oppression relief" },
  "派生诉讼与不公平损害": { zh: "派生诉讼与不公平损害", en: "Derivative actions and unfair prejudice" },
  "股东会保留事项与结构变更": { zh: "股东会保留事项与结构变更", en: "Reserved shareholder powers and structural change" },
  "监事会追责义务": { zh: "监事会追责义务", en: "Supervisory-board duty to pursue liability" },
  "离岸控股公司清盘与少数股东救济": {
    zh: "离岸控股公司清盘与少数股东救济",
    en: "Winding up offshore holding companies and minority relief"
  },
  "反射损失与少数股东救济": {
    zh: "反射损失与少数股东救济",
    en: "Reflective loss and minority shareholder remedies"
  },
  "控制股东自我交易审查": {
    zh: "控制股东自我交易审查",
    en: "Controller self-dealing review"
  },
  "派生诉讼许可与善意标准": {
    zh: "派生诉讼许可与善意标准",
    en: "Derivative-action leave and good-faith standard"
  },
  "退市、股东会参与与退出保护": {
    zh: "退市、股东会参与与退出保护",
    en: "Delisting, shareholder participation, and exit protection"
  }
};

const versionLabels: Record<string, LocalizedLabel> = {
  "current act": { zh: "现行法文本", en: "Current act" },
  "current chapter": { zh: "现行章节文本", en: "Current chapter" },
  "current code": { zh: "现行守则", en: "Current code" },
  "current model act": { zh: "现行示范法文本", en: "Current model act" },
  "current rulebook": { zh: "现行规则", en: "Current rulebook" },
  "2025 draft": { zh: "2025征求意见稿", en: "2025 draft" },
  "2025 revision": { zh: "2025修订", en: "2025 revision" },
  "2024 revision": { zh: "2024修订", en: "2024 revision" },
  "2024 text": { zh: "2024文本", en: "2024 text" },
  "2025 text": { zh: "2025文本", en: "2025 text" },
  "2022 revision": { zh: "2022修订", en: "2022 revision" },
  "2019 text": { zh: "2019文本", en: "2019 text" },
  "2020 text": { zh: "2020文本", en: "2020 text" },
  "2023 text": { zh: "2023文本", en: "2023 text" },
  "2020 revision": { zh: "2020修订", en: "2020 revision" },
  "current statute": { zh: "现行法文本", en: "Current statute" },
  "2024 initial text": { zh: "2024初始文本", en: "2024 initial text" },
  "1988 original enactment": { zh: "1988制定", en: "1988 original enactment" },
  "2002 text": { zh: "2002文本", en: "2002 text" },
  "2007 text": { zh: "2007文本", en: "2007 text" },
  "2008 text": { zh: "2008文本", en: "2008 text" },
  "1993 original enactment": { zh: "1993制定", en: "1993 original enactment" },
  "1994 text": { zh: "1994文本", en: "1994 text" },
  "1997 original enactment": { zh: "1997制定", en: "1997 original enactment" },
  "1997 text": { zh: "1997文本", en: "1997 text" },
  "1998 original enactment": { zh: "1998制定", en: "1998 original enactment" },
  "1999 text": { zh: "1999文本", en: "1999 text" },
  "1999 first amendment": { zh: "1999第一次修正", en: "1999 first amendment" },
  "2004 first amendment": { zh: "2004第一次修正", en: "2004 first amendment" },
  "2004 second amendment": { zh: "2004第二次修正", en: "2004 second amendment" },
  "2005 revision": { zh: "2005修订", en: "2005 revision" },
  "2006 revision": { zh: "2006修订", en: "2006 revision" },
  "2007 revision": { zh: "2007修订", en: "2007 revision" },
  "2016 revision": { zh: "2016修订", en: "2016 revision" },
  "2016 amendment": { zh: "2016修正", en: "2016 amendment" },
  "2013 text": { zh: "2013文本", en: "2013 text" },
  "2015 text": { zh: "2015文本", en: "2015 text" },
  "2017 text": { zh: "2017文本", en: "2017 text" },
  "2013 amendment": { zh: "2013修正", en: "2013 amendment" },
  "2014 revision": { zh: "2014修订", en: "2014 revision" },
  "2014 amendment": { zh: "2014修正", en: "2014 amendment" },
  "2018 revision": { zh: "2018修订", en: "2018 revision" },
  "2018 amended text": { zh: "2018修正文本", en: "2018 amended text" },
  "2006 interpretation": { zh: "2006司法解释", en: "2006 interpretation" },
  "2008 interpretation": { zh: "2008司法解释", en: "2008 interpretation" },
  "2009 text": { zh: "2009文本", en: "2009 text" },
  "2013 interpretation": { zh: "2013司法解释", en: "2013 interpretation" },
  "2014 revised interpretation": {
    zh: "2014修正司法解释",
    en: "2014 revised interpretation"
  },
  "2018 text": { zh: "2018文本", en: "2018 text" },
  "2020 through-current text": { zh: "2020年至今文本", en: "2020 through-current text" },
  "2020 revised interpretation": { zh: "2020修正司法解释", en: "2020 revised interpretation" },
  "2021 through-current text": { zh: "2021年至今文本", en: "2021 through-current text" },
  "Appendix C1 current version": { zh: "Appendix C1现行版", en: "Appendix C1 current version" },
  "Order No. 95": { zh: "第95号令", en: "Order No. 95" },
  "Order No. 182": { zh: "第182号令", en: "Order No. 182" },
  "Order No. 220": { zh: "第220号令", en: "Order No. 220" },
  "Order No. 224": { zh: "第224号令", en: "Order No. 224" },
  "Order No. 230": { zh: "第230号令", en: "Order No. 230" },
  "Order No. 734": { zh: "第734号令", en: "Order No. 734" },
  "Order No. 746": { zh: "第746号令", en: "Order No. 746" },
  "Order No. 47": { zh: "第47号令", en: "Order No. 47" },
  "Order No. 52": { zh: "第52号令", en: "Order No. 52" },
  "Order No. 567": { zh: "第567号令", en: "Order No. 567" },
  "Order No. 82": { zh: "第82号令", en: "Order No. 82" },
  "Order No. 96": { zh: "第96号令", en: "Order No. 96" },
  "Order No. 105": { zh: "第105号令", en: "Order No. 105" },
  "Announcement No. 8": { zh: "2025年第8号公告", en: "Announcement No. 8" },
  "Announcement No. 9": { zh: "2024年第9号公告", en: "Announcement No. 9" },
  "2019 revision": { zh: "2019修订", en: "2019 revision" },
  "2023 revision": { zh: "2023修订", en: "2023 revision" },
  "2011 interpretation": { zh: "2011司法解释", en: "2011 interpretation" },
  "2017 interpretation": { zh: "2017司法解释", en: "2017 interpretation" },
  "2019 interpretation": { zh: "2019司法解释", en: "2019 interpretation" },
  "2018 code as revised in rulebook": {
    zh: "2018守则（规则体系现行版）",
    en: "2018 code as revised in rulebook"
  }
};

const caseCitationLabelsEn: Record<string, string> = {
  "指导案例23号": "Guiding Case No. 23",
  "指导案例64号": "Guiding Case No. 64",
  "指导案例75号": "Guiding Case No. 75",
  "指导案例96号": "Guiding Case No. 96",
  "指导案例8号": "Guiding Case No. 8",
  "指导案例9号": "Guiding Case No. 9",
  "指导案例10号": "Guiding Case No. 10",
  "指导案例15号": "Guiding Case No. 15",
  "指导案例130号": "Guiding Case No. 130",
  "指导案例131号": "Guiding Case No. 131",
  "指导案例148号": "Guiding Case No. 148",
  "指导案例163号": "Guiding Case No. 163",
  "指导案例174号": "Guiding Case No. 174",
  "指导案例182号": "Guiding Case No. 182",
  "指导性案例204号": "Guiding Case No. 204",
  "指导性案例210号": "Guiding Case No. 210",
  "指导性案例215号": "Guiding Case No. 215",
  "指导性案例237号": "Guiding Case No. 237",
  "指导性案例238号": "Guiding Case No. 238",
  "指导性案例260号": "Guiding Case No. 260",
  "域外法查明入库案例6": "Database Case No. 6",
  "公报案例：股东知情权": "Gazette Case: Shareholder Inspection",
  "公报案例：强制盈余分配": "Gazette Case: Forced Profit Distribution",
  "公报案例：股东优先购买权": "Gazette Case: Shareholder Pre-emption",
  "公报案例：优先购买权行使阻却履行但不影响合同效力": "Gazette Case: Pre-emption Bars Performance but Not Contract Validity",
  "公报案例：合伙份额转让": "Gazette Case: Partnership Share Transfer",
  "公报案例：有限合伙人代位诉讼": "Gazette Case: Limited Partner Derivative Action",
  "公报案例：合伙债务对外责任": "Gazette Case: Partnership External Liability",
  "公报案例：稀释增资无效": "Gazette Case: Dilutive Capital Increase",
  "公报案例：出资期限决议": "Gazette Case: Contribution Deadline Resolution",
  "公报案例：延长出资期限不得对抗债权人": "Gazette Case: Extended Contribution Deadlines Cannot Defeat Creditors",
  "公报案例：代持股权显名": "Gazette Case: Nominee Equity Registration",
  "公报案例：发起人股份转让限制与股份托管": "Gazette Case: Founder Share Transfer Restrictions and Share Custody",
  "公报案例：外籍隐名股东显名": "Gazette Case: Foreign Beneficial Owner Registration",
  "公报案例：股权让与担保名义股东": "Gazette Case: Nominee Shareholder Under Equity Security",
  "公报案例：股东除名决议": "Gazette Case: Shareholder Expulsion",
  "公报案例：涉港董事会记录": "Gazette Case: Hong Kong Board Record",
  "公报案例：上市公司股份代持": "Gazette Case: Listed Share Nominee Holding",
  "公报案例：虚构股东会决议": "Gazette Case: Fabricated Shareholder Resolution",
  "公报案例：法定代表人登记公示": "Gazette Case: Publicity of Legal-Representative Registration",
  "公报案例：表见代表与公司担保": "Gazette Case: Apparent Representation and Corporate Guarantee",
  "公报案例：免职未变更登记前代表权": "Gazette Case: Representative Authority Before Registration Change",
  "公报案例：泰来关联公司人格混同": "Gazette Case: Tailai affiliated-company commingling",
  "公报案例：一人公司人格否认与举证责任": "Gazette Case: One-person company veil piercing and burden of proof",
  "公报案例：昆通/兴通达人格混同": "Gazette Case: Kuntong / Xingtongda commingling",
  "最高法一巡案例：嘉宸公司诉海马公司人格混同举证责任": "SPC First Circuit Case: Jiachen v. Haima burden allocation",
  "台胞权益保障十大典型案例（三）": "Ten Typical Taiwan-rights Cases No. 3",
  "广东法院典型案例：盐焗鸡产业人格否认": "Guangdong Model Case: Salt-baked chicken industry veil piercing",
  "广东法院典型案例：维康/尼克关联公司人格混同": "Guangdong Model Case: Weikang / Nike affiliated-company commingling",
  "广东法院典型案例：江门丰品/江门维昌人格混同": "Guangdong Model Case: Jiangmen Fengpin / Weichang commingling",
  "广东法院典型案例：资质转移与受益子公司责任": "Guangdong Model Case: License transfer and beneficiary-subsidiary liability",
  "江苏法院案例：换壳交易与横向人格否认": "Jiangsu Courts Case: shell switching and horizontal veil piercing",
  "山东法院裁判要旨：格莱德/富仕德/贝斯达人格混同": "Shandong Judicial Summary: Gelaide / Fushide / Beisida commingling",
  "最高法典型案例：高管自我交易": "SPC Typical Case: Executive Self-Dealing",
  "最高法典型案例：关联交易损害责任": "SPC Typical Case: Harmful Related-Party Transaction",
  "枣庄中院案例：股东借贷型关联交易与公司利益保护": "Zaozhuang Intermediate Case: Shareholder-Loan Related-Party Transactions and Corporate Protection",
  "开封中院案例：关联交易认定与决议撤销边界": "Kaifeng Intermediate Case: Related-Party Identification and the Limits of Resolution Rescission",
  "最高法典型案例：外国投资者股东知情权": "SPC Typical Case: Foreign Investor Shareholder Inspection",
  "最高法二巡典型案例：股东会决议效力与公司自治": "SPC Second Circuit Model Case: Shareholder Resolution Validity and Corporate Autonomy",
  "最高法二巡典型案例：股东知情权与原始凭证查阅": "SPC Second Circuit Model Case: Inspection Rights and Underlying Vouchers",
  "青岛中院优化营商环境案例：焦某诉金珠公司股东知情权": "Qingdao Model Case: Jiao v. Jinzhu shareholder inspection",
  "青岛中院案例：张志远诉克罗恩公司股东知情权": "Qingdao Case: Zhang Zhiyuan v. Kron shareholder inspection",
  "枣庄法院中小投资者案例：王某诉酒店公司股东知情权": "Zaozhuang Investor-Protection Case: Wang inspection dispute",
  "奉贤法院案例：孙某查账不正当目的": "Fengxian Court Case: Sun improper-purpose inspection",
  "上海一中院案例：夏丰诉酒奢公司知情权边界": "Shanghai No. 1 Intermediate Case: Xia Feng inspection boundaries",
  "南通法院案例：江某委托专业人员查阅会计凭证": "Nantong Court Case: Jiang Mou professional-assisted voucher inspection",
  "北京公司审判案例：赛都广告决议追认": "Beijing Corporate Case: Saidu resolution ratification",
  "海淀法院典型案例：未提前通知会议议题": "Haidian Model Case: unnotified meeting agenda",
  "海淀法院典型案例：章程约定的董事会邮件表决": "Haidian Model Case: charter-based board email voting",
  "海淀法院典型案例：修改出资期限不得简单适用资本多数决": "Haidian Model Case: contribution deadlines and majority rule",
  "梁山法院中小投资者案例：陈某某诉山东A公司决议不成立": "Liangshan Investor-Protection Case: Chen resolution non-establishment",
  "枣庄法院中小投资者案例：赵某、钱某诉枣庄某公司决议不成立": "Zaozhuang Investor-Protection Case: Zhao and Qian resolution non-establishment",
  "枣庄中院案例：股权赠与未完成不取得股东资格": "Zaozhuang Intermediate Case: Incomplete Equity Gift Does Not Create Shareholder Status",
  "上海高院裁判文书：监事召集临时股东会与法定代表人变更": "Shanghai High Court Judgment: supervisor-convened meeting and legal-representative change",
  "秦州法院案例：离职员工被冒名登记为股东": "Qinzhou Court Case: Former Employee Falsely Registered as Shareholder",
  "包河法院典型案例：商业银行股东资格继受": "Baohe Model Case: Successor Shareholding in a Commercial Bank",
  "成武法院案例：楚某诉某公司股东盈余分配": "Chengwu Court Case: Chu profit distribution",
  "鲁法案例〔2024〕739": "Shandong Case 2024 No. 739",
  "上海金融法院执行复议：未实缴出资与利润分配请求权": "Shanghai Financial Court Review: unpaid contribution and dividend rights",
  "最高法典型案例：公司僵局解散": "SPC Typical Case: Corporate Deadlock Dissolution",
  "最高法典型案例：公司证照保全": "SPC Typical Case: Company Certificate Preservation",
  "公报案例：新增资本优先认缴": "Gazette Case: Pre-emptive Subscription for New Capital",
  "公报案例：股东分红诉请的主体与程序": "Gazette Case: Standing and Procedure for Shareholder Dividend Claims",
  "公报案例：上市重组中的债务转移承诺": "Gazette Case: Debt-transfer undertaking in a listing reorganization",
  "最高法典型民商事案例：改制企业债务剥离边界": "SPC Typical Civil/Commercial Case: Limits on debt stripping in enterprise restructuring",
  "枣庄中院案例：收购合并与资产接收边界": "Zaozhuang Intermediate Case: the boundary of acquisition, merger, and asset reception",
  "济南历城法院案例：集体企业改制后的债务承继": "Jinan Licheng Court Case: debt succession after collective-enterprise restructuring",
  "平阴法院案例：一人公司变更为普通有限公司后的旧债责任": "Pingyin Court Case: pre-change debt liability after conversion from a one-person company",
  "地方参考案例：樱桃园大气污染赔偿": "Local Reference Case: Cherry Orchard Air-Pollution Compensation",
  "地方参考案例：现代汽车尾气超标公益诉讼": "Local Reference Case: Hyundai Emissions Public-Interest Litigation",
  "地方参考案例：三无减肥产品退一赔十": "Local Reference Case: Diet Product Refund and Tenfold Damages",
  "地方参考案例：厨房学徒性别歧视": "Local Reference Case: Kitchen-Apprentice Gender Discrimination",
  "地方参考案例：乙肝携带求职歧视": "Local Reference Case: HBV Carrier Hiring Discrimination",
  "地方参考案例：热电作业救助损害": "Local Reference Case: Rescue Injury in Heating Operations",
  "地方参考案例：码头作业区安全保障": "Local Reference Case: Port Operations Safety",
  "最高法市场准入典型案例：设立登记增设许可条件": "SPC Market-Access Model Case: Extra Conditions for Establishment Registration",
  "最高法市场准入典型案例：经营范围变更登记": "SPC Market-Access Model Case: Business-Scope Change Registration",
  "最高法市场准入典型案例：企业名称争议": "SPC Market-Access Model Case: Enterprise Name Dispute",
  "入库编号2023-08-2-084-028": "Database ID 2023-08-2-084-028",
  "入库编号2023-08-2-262-009": "Database ID 2023-08-2-262-009",
  "入库编号2024-08-2-483-011": "Database ID 2024-08-2-483-011",
  "入库编号2025-08-2-284-001": "Database ID 2025-08-2-284-001",
  "入库编号2024-08-2-267-003": "Database ID 2024-08-2-267-003",
  "入库编号2024-08-2-267-002": "Database ID 2024-08-2-267-002",
  "入库编号2024-08-2-264-001": "Database ID 2024-08-2-264-001",
  "入库编号2024-08-2-527-002": "Database ID 2024-08-2-527-002",
  "入库编号2024-10-2-283-002": "Database ID 2024-10-2-283-002",
  "入库编号2023-08-2-267-001": "Database ID 2023-08-2-267-001",
  "入库编号2024-08-2-270-003": "Database ID 2024-08-2-270-003",
  "入库编号2024-08-2-270-002": "Database ID 2024-08-2-270-002",
  "入库编号2024-08-2-272-001": "Database ID 2024-08-2-272-001",
  "入库编号2023-08-2-274-003": "Database ID 2023-08-2-274-003",
  "入库编号2023-08-2-266-001": "Database ID 2023-08-2-266-001",
  "入库编号2023-16-2-276-002": "Database ID 2023-16-2-276-002",
  "入库编号2024-08-2-270-001": "Database ID 2024-08-2-270-001",
  "入库编号2024-10-2-270-001": "Database ID 2024-10-2-270-001",
  "入库编号2023-08-2-308-002": "Database ID 2023-08-2-308-002",
  "入库编号2024-08-2-269-001": "Database ID 2024-08-2-269-001",
  "入库编号2023-08-2-267-002": "Database ID 2023-08-2-267-002",
  "最高法判决：抽逃出资后内部抵销不得对抗第三人": "SPC Judgment: Internal Set-off After Capital Withdrawal Cannot Defeat Third Parties",
  "临淄法院案例：恶意延长出资期限时出资义务加速到期": "Linzi Court Case: Malicious Extension and Accelerated Contribution",
  "即墨法院案例：未履行出资义务股东的补充责任": "Jimo Court Case: Supplementary Liability for Unpaid Contributions",
  "北京高院案例：货币出资改知识产权出资不得对抗债权人": "Beijing High Court Case: Cash-to-IP Contribution Change Cannot Defeat Creditors",
  "重庆五中院案例：瑕疵减资与认缴出资加速到期": "Chongqing Fifth Intermediate Case: Defective Reduction and Accelerated Subscribed Capital",
  "浙江高院案例：未届期减资不宜直接追加被执行人": "Zhejiang High Court Case: Unmatured Reduction Does Not Warrant Direct Enforcement Joinder",
  "最高法知产法庭案例：零元转股并减资逃避侵权之债": "SPC IP Tribunal Case: Zero-Price Share Transfer and Capital Reduction to Evade Infringement Debt",
  "入库编号2024-17-5-202-006": "Database ID 2024-17-5-202-006",
  "入库编号2025-16-2-091-001": "Database ID 2025-16-2-091-001"
};

const lawShortLabelsEn: Record<string, string> = {
  "sz-business-environment-regulations-2020": "SZ Business Environment Regulations",
  "bj-business-environment-regulations-2024": "Beijing Business Environment Regulations",
  "bj-high-court-securities-dispute-opinion-2019": "BJ Securities Dispute Opinion",
  "bj-high-court-bankruptcy-fast-track-opinion-2018": "BJ Fast Bankruptcy Opinion",
  "bj-high-court-bankruptcy-procedure-rules-2013": "BJ Bankruptcy Procedure Rules",
  "sz-commercial-registration-rules-2020": "SZ Commercial Registration Rules",
  "sh-high-court-bankruptcy-guideline-2018": "SH Bankruptcy Guideline",
  "sh-high-court-financial-commercial-white-paper-2020": "SH Financial White Paper",
  "sh-business-entity-domicile-measures-2024": "Shanghai Domicile Measures",
  "sh-enterprise-domicile-measures-2015": "Shanghai Enterprise Domicile Measures",
  "js-high-court-company-disputes-report-2017": "JS Company Disputes Report",
  "sz-joint-stock-company-regulations-1993": "SZ Joint Stock Company Regulations",
  "sz-joint-stock-incorporation-rules-1994": "SZ Joint Stock Incorporation Rules",
  "sz-limited-liability-company-regulations-1997": "SZ Limited Liability Company Regulations",
  "sz-wholly-state-owned-company-regulations-1999": "SZ Wholly State-Owned Company Regulations",
  "gd-high-court-zombie-enterprise-guideline-2019": "GD Zombie Enterprise Guideline",
  "gd-high-court-bankruptcy-development-opinion-2023": "GD Bankruptcy Development Opinion",
  "gd-high-court-securities-white-paper-2025": "GD Securities White Paper",
  "cn-partnership-enterprise-law-1997": "Partnership Enterprise Law (1997)",
  "cn-partnership-enterprise-law-2006": "Partnership Enterprise Law",
  "cn-partnership-registration-measures-1997": "Partnership Registration Measures (1997)",
  "cn-partnership-registration-measures-2007": "Partnership Registration Measures (2007)",
  "cn-partnership-registration-measures-2014": "Partnership Registration Measures (2014)",
  "cn-partnership-registration-measures-2019": "Partnership Registration Measures",
  "cn-market-entity-registration-regulations-2021": "Market Entity Registration Regulations",
  "cn-market-entity-registration-rules-2022": "Market Entity Registration Rules",
  "cn-company-registration-regulations-1994": "Company Registration Regulation (1994)",
  "cn-company-registration-regulations-2014": "Company Registration Regulation (2014)",
  "cn-company-registration-regulations-2016": "Company Registration Regulation (2016)",
  "cn-enterprise-legal-person-registration-regulations-1988": "Enterprise Legal Person Regulation (1988)",
  "cn-enterprise-legal-person-registration-regulations-2019": "Enterprise Legal Person Regulation (2019)",
  "cn-enterprise-legal-person-registration-rules-2017": "Enterprise Legal Person Rules (2017)",
  "cn-enterprise-name-registration-regulations-2020": "Enterprise Name Regulations",
  "cn-enterprise-name-registration-implementation-measures-2023": "Enterprise Name Measures",
  "cn-registration-archives-measures-2025": "Registration Archives Measures",
  "cn-forced-company-deregistration-measures-2025": "Forced Deregistration Measures",
  "cn-registration-application-agency-measures-2025": "Registration Agency Measures",
  "cn-foreign-partnership-establishment-measures-2009": "Foreign Partnership Establishment Measures",
  "cn-foreign-invested-partnership-registration-provisions-2019": "FIP Registration Provisions",
  "cn-csrc-listed-company-governance-code-2025": "Governance Code",
  "cn-csrc-listed-company-governance-code-2002": "Governance Code (2002)",
  "cn-csrc-listed-company-governance-code-2018": "Governance Code (2018)",
  "cn-listed-company-disclosure-measures-2007": "Disclosure Measures (2007)",
  "cn-szse-stock-listing-rules-2025": "SZSE Listing Rules",
  "cn-sse-stock-listing-rules-2025": "SSE Listing Rules",
  "cn-bse-stock-listing-rules-2025": "BSE Listing Rules",
  "cn-csrc-articles-of-association-guidelines-2025": "AoA Guidelines",
  "cn-csrc-articles-of-association-guidelines-2016": "AoA Guidelines (2016)",
  "cn-csrc-articles-of-association-guidelines-2022": "AoA Guidelines (2022)",
  "cn-samr-company-registration-implementation-measures-2024": "Registration Measures",
  "hk-corporate-governance-code": "HK Governance Code",
  "cn-state-council-registered-capital-rules-2024": "Capital Registration Rules",
  "cn-spc-company-law-time-effect-2024": "Time-Effect Rules",
  "cn-spc-foreign-invested-enterprise-disputes-1-2021": "FIE Dispute Interpretation I",
  "cn-company-law-1993": "Company Law (1993)",
  "cn-company-law-1999": "Company Law (1999)",
  "cn-company-law-2004": "Company Law (2004)",
  "cn-company-law-2005": "Company Law (2005)",
  "cn-company-law-2013": "Company Law (2013)",
  "cn-company-law-2023": "Company Law",
  "cn-civil-code-2020-legal-person": "Civil Code: Legal Persons",
  "cn-securities-law-1998": "Securities Law (1998)",
  "cn-securities-law-2004": "Securities Law (2004)",
  "cn-securities-law-2005": "Securities Law (2005)",
  "cn-securities-law-2013": "Securities Law (2013)",
  "cn-securities-law-2014": "Securities Law (2014)",
  "cn-securities-law-2019": "Securities Law",
  "cn-spc-company-law-interpretation-1-2006": "SPC Company Law Interpretation I",
  "cn-spc-company-law-interpretation-1-2014": "SPC Company Law Interpretation I",
  "cn-spc-company-law-interpretation-2-2008": "SPC Company Law Interpretation II",
  "cn-spc-company-law-interpretation-2-2020": "SPC Company Law Interpretation II",
  "cn-spc-compulsory-liquidation-minutes-2009": "Compulsory Liquidation Minutes",
  "cn-spc-company-law-interpretation-3-2021": "SPC Company Law Interpretation III",
  "cn-spc-company-law-interpretation-5-2021": "SPC Company Law Interpretation V",
  "cn-spc-company-law-unified-draft-2025": "Company Law Draft Interpretation",
  "cn-spc-enterprise-bankruptcy-interpretation-1-2011": "Bankruptcy Interpretation I",
  "cn-spc-enterprise-bankruptcy-interpretation-2-2013": "Bankruptcy Interpretation II",
  "cn-spc-enterprise-bankruptcy-interpretation-3-2019": "Bankruptcy Interpretation III",
  "cn-national-bankruptcy-trial-minutes-2018": "Bankruptcy Trial Minutes",
  "cn-listed-company-disclosure-measures-2021": "Listed Disclosure Measures",
  "cn-listed-company-independent-director-measures-2023": "Independent Director Measures",
  "cn-listed-company-disclosure-deferral-exemption-rules-2025": "Disclosure Exemption Rules",
  "cn-major-asset-reorganization-measures-2008": "Major Reorganization Measures (2008)",
  "cn-major-asset-reorganization-measures-2014": "Major Reorganization Measures (2014)",
  "cn-major-asset-reorganization-measures-2025": "Major Asset Reorganization Measures",
  "cn-takeover-measures-2006": "Takeover Measures (2006)",
  "cn-takeover-measures-2014": "Takeover Measures (2014)",
  "cn-takeover-measures-2020": "Takeover Measures",
  "cn-share-reduction-measures-2024": "Share Reduction Measures",
  "cn-management-shareholding-rules-2024": "Management Shareholding Rules",
  "cn-csrc-cash-dividend-guideline-2023": "Cash Dividend Guideline",
  "cn-share-repurchase-rules-2023": "Share Repurchase Rules",
  "cn-market-value-management-guideline-2024": "Market Value Guideline",
  "cn-nonlisted-public-company-supervision-measures-2021": "Non-listed Public Company Supervision",
  "cn-nonlisted-public-company-disclosure-measures-2021": "Non-listed Public Disclosure",
  "cn-spc-company-law-interpretation-3-2011": "SPC Company Law Interpretation III",
  "cn-spc-company-law-interpretation-4-2017": "SPC Company Law Interpretation IV",
  "cn-spc-company-law-interpretation-5-2019": "SPC Company Law Interpretation V",
  "cn-national-civil-commercial-trial-minutes-2019": "Civil-Commercial Minutes",
  "sg-mainboard-rules-governance": "SGX Mainboard Rules",
  "sg-code-of-corporate-governance-2018": "SG Governance Code",
  "cn-company-law-2018": "Company Law (2018)",
  "hk-companies-ordinance-cap-622": "Companies Ordinance",
  "hk-securities-and-futures-ordinance-cap-571": "Securities and Futures Ordinance",
  "hk-takeovers-code-2023": "Takeovers and Share Buy-backs Codes",
  "sg-companies-act-1967": "Companies Act",
  "sg-securities-and-futures-act-2001": "Securities and Futures Act",
  "us-model-business-corporation-act": "Model Business Corporation Act",
  "us-delaware-general-corporation-law": "Delaware General Corporation Law",
  "us-ali-principles-corporate-governance": "ALI Principles of Corporate Governance",
  "us-sarbanes-oxley-act-2002": "Sarbanes-Oxley Act",
  "us-securities-exchange-act-1934": "Securities Exchange Act of 1934",
  "uk-companies-act-2006": "Companies Act 2006",
  "uk-model-articles-regulations-2008": "Model Articles Regulations",
  "uk-company-directors-disqualification-act-1986": "Company Directors Disqualification Act",
  "uk-insolvency-act-1986": "Insolvency Act 1986",
  "uk-corporate-governance-code-2024": "UK Corporate Governance Code",
  "uk-takeover-code-2023": "City Code on Takeovers and Mergers",
  "de-stock-corporation-act": "German Stock Corporation Act",
  "de-limited-liability-companies-act": "German Limited Liability Companies Act",
  "de-transformation-act": "German Transformation Act",
  "de-corporate-governance-code-2022": "German Corporate Governance Code",
  "hk-companies-winding-up-miscellaneous-provisions-ordinance-cap-32":
    "Companies (Winding Up and Miscellaneous Provisions) Ordinance",
  "sg-insolvency-restructuring-dissolution-act-2018": "Insolvency, Restructuring and Dissolution Act"
};

function humanizeCode(value: string): string {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function labelFromMap(
  locale: Locale,
  value: string,
  labels: Record<string, LocalizedLabel>
): string {
  const label = labels[value];
  if (!label) {
    return locale === "en" ? humanizeCode(value) : value;
  }

  return pickLocalized(locale, label.zh, label.en);
}

export function formatLawAuthorityLabel(locale: Locale, value: string): string {
  return labelFromMap(locale, value, lawAuthorityLabels);
}

export function formatTextStatusLabel(locale: Locale, value: string): string {
  return labelFromMap(locale, value, textStatusLabels);
}

export function formatRecordStatusLabel(locale: Locale, value: string): string {
  return labelFromMap(locale, value, recordStatusLabels);
}

export function formatTopicLabel(locale: Locale, value: string): string {
  return labelFromMap(locale, value, topicLabels);
}

export function formatJurisdictionLabel(locale: Locale, value: string): string {
  return labelFromMap(locale, value, jurisdictionLabels);
}

export function formatLanguageStatusLabel(locale: Locale, value: string): string {
  return labelFromMap(locale, value, languageStatusLabels);
}

export function formatCaseTypeLabel(locale: Locale, value: string): string {
  return labelFromMap(locale, value, caseTypeLabels);
}

export function formatCaseClassificationLabel(locale: Locale, value: string): string {
  return labelFromMap(locale, value, caseClassificationLabels);
}

export function formatArticleSourceLabel(locale: Locale, value: string): string {
  return labelFromMap(locale, value, articleSourceLabels);
}

export function formatSourceLabel(locale: Locale, value: string): string {
  return labelFromMap(locale, value, sourceLabels);
}

export function formatDecisionTypeLabel(locale: Locale, value: string): string {
  return labelFromMap(locale, value, decisionTypeLabels);
}

export function formatVersionLabel(locale: Locale, value: string): string {
  return labelFromMap(locale, value, versionLabels);
}

export function formatCaseCitationLabel(locale: Locale, value: string): string {
  if (locale === "zh") {
    return value;
  }

  return caseCitationLabelsEn[value] ?? value;
}

export function getLawShortLabel(locale: Locale, lawId: string, shortTitle: string): string {
  if (locale === "zh") {
    return shortTitle;
  }

  return lawShortLabelsEn[lawId] ?? shortTitle;
}


