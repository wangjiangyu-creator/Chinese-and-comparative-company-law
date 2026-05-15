import { describe, expect, it } from "vitest";

import {
  formatArticleSourceLabel,
  formatCaseClassificationLabel,
  formatCaseCitationLabel,
  formatCaseTypeLabel,
  formatDecisionTypeLabel,
  formatJurisdictionLabel,
  formatLanguageStatusLabel,
  formatLawAuthorityLabel,
  formatRecordStatusLabel,
  formatSourceLabel,
  formatTextStatusLabel,
  formatTopicLabel,
  formatVersionLabel,
  getLawShortLabel
} from "@/lib/labels";

describe("localized labels", () => {
  it("maps internal law labels to readable Chinese and English text", () => {
    expect(formatLawAuthorityLabel("zh", "national-law")).toBe("国家法律");
    expect(formatLawAuthorityLabel("en", "national-law")).toBe("National law");
    expect(formatLawAuthorityLabel("zh", "local-regulation")).toBe("地方法规");
    expect(formatLawAuthorityLabel("en", "local-regulation")).toBe("Local regulation");
    expect(formatTextStatusLabel("zh", "metadata-only")).toBe("仅元数据");
    expect(formatTextStatusLabel("en", "selected-excerpt")).toBe("Curated excerpt");
    expect(formatLanguageStatusLabel("en", "official-bilingual")).toBe("Official bilingual");
    expect(formatRecordStatusLabel("zh", "historical")).toBe("历史版本");
  });

  it("maps topic, jurisdiction, case, article, and decision labels", () => {
    expect(formatTopicLabel("zh", "registered-capital")).toBe("注册资本和出资纠纷");
    expect(formatTopicLabel("en", "registered-capital")).toBe("Registered capital and contribution disputes");
    expect(formatTopicLabel("en", "partnership-enterprises")).toBe("Partnership enterprises");
    expect(formatTopicLabel("zh", "business-environment")).toBe("营商环境");
    expect(formatTopicLabel("en", "business-environment")).toBe("Business environment");
    expect(formatTopicLabel("zh", "corporate-reorganization")).toBe("公司重组与形态变动");
    expect(formatTopicLabel("en", "corporate-reorganization")).toBe("Corporate reorganization and form changes");
    expect(formatTopicLabel("zh", "related-transaction-harm")).toBe("关联交易与利益输送");
    expect(formatTopicLabel("en", "related-transaction-harm")).toBe("Related-party transactions and tunneling");
    expect(formatTopicLabel("zh", "corporate-social-responsibility")).toBe("企业社会责任");
    expect(formatTopicLabel("en", "corporate-social-responsibility")).toBe("Corporate social responsibility");
    expect(formatTopicLabel("en", "legal-representative-and-seal-control")).toBe(
      "Legal representative, representative authority, and seal control"
    );
    expect(formatTopicLabel("zh", "vam-disputes")).toBe("对赌协议");
    expect(formatJurisdictionLabel("en", "hk")).toBe("Hong Kong");
    expect(formatJurisdictionLabel("zh", "us")).toBe("美国");
    expect(formatJurisdictionLabel("en", "uk")).toBe("United Kingdom");
    expect(formatJurisdictionLabel("en", "de")).toBe("Germany");
    expect(formatCaseClassificationLabel("zh", "related-party-misappropriation")).toBe("关联交易与利益输送");
    expect(formatCaseClassificationLabel("en", "vam-disputes")).toBe("VAM, buyback, and earnout");
    expect(formatCaseClassificationLabel("en", "corporate-social-responsibility")).toBe(
      "Corporate social responsibility and public-interest protection"
    );
    expect(formatCaseClassificationLabel("en", "legal-representative-and-seal-control")).toBe(
      "Legal representative, representative authority, and seal control"
    );
    expect(formatCaseClassificationLabel("en", "registration-legal-representative")).toBe(
      "Company registration and legal representative"
    );
    expect(formatCaseClassificationLabel("en", "corporate-reorganization-form-change")).toBe(
      "Corporate reorganization and form changes"
    );
    expect(formatCaseTypeLabel("en", "guiding-case")).toBe("Guiding case");
    expect(formatCaseCitationLabel("en", "指导案例23号")).toBe("Guiding Case No. 23");
    expect(formatCaseCitationLabel("en", "指导案例64号")).toBe("Guiding Case No. 64");
    expect(formatCaseCitationLabel("en", "指导案例75号")).toBe("Guiding Case No. 75");
    expect(formatCaseCitationLabel("en", "指导案例96号")).toBe("Guiding Case No. 96");
    expect(formatCaseCitationLabel("en", "指导案例130号")).toBe("Guiding Case No. 130");
    expect(formatCaseCitationLabel("en", "指导案例131号")).toBe("Guiding Case No. 131");
    expect(formatCaseCitationLabel("en", "指导案例163号")).toBe("Guiding Case No. 163");
    expect(formatCaseCitationLabel("en", "指导案例174号")).toBe("Guiding Case No. 174");
    expect(formatCaseCitationLabel("en", "指导案例182号")).toBe("Guiding Case No. 182");
    expect(formatCaseCitationLabel("en", "指导性案例204号")).toBe("Guiding Case No. 204");
    expect(formatCaseCitationLabel("en", "指导性案例210号")).toBe("Guiding Case No. 210");
    expect(formatCaseCitationLabel("en", "指导性案例215号")).toBe("Guiding Case No. 215");
    expect(formatCaseCitationLabel("en", "指导性案例237号")).toBe("Guiding Case No. 237");
    expect(formatCaseCitationLabel("en", "指导性案例238号")).toBe("Guiding Case No. 238");
    expect(formatCaseCitationLabel("en", "指导性案例260号")).toBe("Guiding Case No. 260");
    expect(formatCaseCitationLabel("en", "公报案例：股东知情权")).toBe("Gazette Case: Shareholder Inspection");
    expect(formatCaseCitationLabel("en", "公报案例：股东除名决议")).toBe("Gazette Case: Shareholder Expulsion");
    expect(formatCaseCitationLabel("en", "公报案例：延长出资期限不得对抗债权人")).toBe(
      "Gazette Case: Extended Contribution Deadlines Cannot Defeat Creditors"
    );
    expect(formatCaseCitationLabel("en", "公报案例：股东优先购买权")).toBe(
      "Gazette Case: Shareholder Pre-emption"
    );
    expect(formatCaseCitationLabel("en", "公报案例：优先购买权行使阻却履行但不影响合同效力")).toBe(
      "Gazette Case: Pre-emption Bars Performance but Not Contract Validity"
    );
    expect(formatCaseCitationLabel("en", "公报案例：发起人股份转让限制与股份托管")).toBe(
      "Gazette Case: Founder Share Transfer Restrictions and Share Custody"
    );
    expect(formatCaseCitationLabel("en", "公报案例：合伙份额转让")).toBe(
      "Gazette Case: Partnership Share Transfer"
    );
    expect(formatCaseCitationLabel("en", "公报案例：有限合伙人代位诉讼")).toBe(
      "Gazette Case: Limited Partner Derivative Action"
    );
    expect(formatCaseCitationLabel("en", "公报案例：合伙债务对外责任")).toBe(
      "Gazette Case: Partnership External Liability"
    );
    expect(formatCaseCitationLabel("en", "最高法典型案例：高管自我交易")).toBe(
      "SPC Typical Case: Executive Self-Dealing"
    );
    expect(formatCaseCitationLabel("en", "枣庄中院案例：股东借贷型关联交易与公司利益保护")).toBe(
      "Zaozhuang Intermediate Case: Shareholder-Loan Related-Party Transactions and Corporate Protection"
    );
    expect(formatCaseCitationLabel("en", "开封中院案例：关联交易认定与决议撤销边界")).toBe(
      "Kaifeng Intermediate Case: Related-Party Identification and the Limits of Resolution Rescission"
    );
    expect(formatCaseCitationLabel("en", "最高法典型案例：外国投资者股东知情权")).toBe(
      "SPC Typical Case: Foreign Investor Shareholder Inspection"
    );
    expect(formatCaseCitationLabel("en", "地方参考案例：樱桃园大气污染赔偿")).toBe(
      "Local Reference Case: Cherry Orchard Air-Pollution Compensation"
    );
    expect(formatCaseCitationLabel("en", "地方参考案例：现代汽车尾气超标公益诉讼")).toBe(
      "Local Reference Case: Hyundai Emissions Public-Interest Litigation"
    );
    expect(formatCaseCitationLabel("en", "地方参考案例：三无减肥产品退一赔十")).toBe(
      "Local Reference Case: Diet Product Refund and Tenfold Damages"
    );
    expect(formatCaseCitationLabel("en", "地方参考案例：厨房学徒性别歧视")).toBe(
      "Local Reference Case: Kitchen-Apprentice Gender Discrimination"
    );
    expect(formatCaseCitationLabel("en", "地方参考案例：乙肝携带求职歧视")).toBe(
      "Local Reference Case: HBV Carrier Hiring Discrimination"
    );
    expect(formatCaseCitationLabel("en", "地方参考案例：热电作业救助损害")).toBe(
      "Local Reference Case: Rescue Injury in Heating Operations"
    );
    expect(formatCaseCitationLabel("en", "地方参考案例：码头作业区安全保障")).toBe(
      "Local Reference Case: Port Operations Safety"
    );
    expect(formatCaseCitationLabel("en", "最高法市场准入典型案例：设立登记增设许可条件")).toBe(
      "SPC Market-Access Model Case: Extra Conditions for Establishment Registration"
    );
    expect(formatCaseCitationLabel("en", "最高法市场准入典型案例：经营范围变更登记")).toBe(
      "SPC Market-Access Model Case: Business-Scope Change Registration"
    );
    expect(formatCaseCitationLabel("en", "最高法市场准入典型案例：企业名称争议")).toBe(
      "SPC Market-Access Model Case: Enterprise Name Dispute"
    );
    expect(formatCaseCitationLabel("en", "入库编号2024-08-2-267-003")).toBe(
      "Database ID 2024-08-2-267-003"
    );
    expect(formatCaseCitationLabel("en", "入库编号2024-08-2-527-002")).toBe(
      "Database ID 2024-08-2-527-002"
    );
    expect(formatCaseCitationLabel("en", "入库编号2023-08-2-266-001")).toBe(
      "Database ID 2023-08-2-266-001"
    );
    expect(formatCaseCitationLabel("en", "最高法判决：抽逃出资后内部抵销不得对抗第三人")).toBe(
      "SPC Judgment: Internal Set-off After Capital Withdrawal Cannot Defeat Third Parties"
    );
    expect(formatCaseCitationLabel("en", "入库编号2024-10-2-283-002")).toBe(
      "Database ID 2024-10-2-283-002"
    );
    expect(formatCaseCitationLabel("en", "入库编号2024-08-2-270-003")).toBe(
      "Database ID 2024-08-2-270-003"
    );
    expect(formatCaseCitationLabel("en", "入库编号2023-16-2-276-002")).toBe(
      "Database ID 2023-16-2-276-002"
    );
    expect(formatCaseCitationLabel("en", "入库编号2024-08-2-270-001")).toBe(
      "Database ID 2024-08-2-270-001"
    );
    expect(formatCaseCitationLabel("en", "入库编号2023-08-2-308-002")).toBe(
      "Database ID 2023-08-2-308-002"
    );
    expect(formatCaseCitationLabel("en", "入库编号2024-08-2-269-001")).toBe(
      "Database ID 2024-08-2-269-001"
    );
    expect(formatCaseCitationLabel("en", "公报案例：上市重组中的债务转移承诺")).toBe(
      "Gazette Case: Debt-transfer undertaking in a listing reorganization"
    );
    expect(formatCaseCitationLabel("en", "最高法典型民商事案例：改制企业债务剥离边界")).toBe(
      "SPC Typical Civil/Commercial Case: Limits on debt stripping in enterprise restructuring"
    );
    expect(formatCaseCitationLabel("en", "枣庄中院案例：收购合并与资产接收边界")).toBe(
      "Zaozhuang Intermediate Case: the boundary of acquisition, merger, and asset reception"
    );
    expect(formatArticleSourceLabel("zh", "law-firm")).toBe("律所文章");
    expect(formatDecisionTypeLabel("en", "股东资格确认纠纷")).toBe("Shareholder status dispute");
    expect(formatDecisionTypeLabel("en", "股权确认纠纷")).toBe("Equity confirmation dispute");
    expect(formatDecisionTypeLabel("en", "股权转让纠纷")).toBe("Equity transfer dispute");
    expect(formatDecisionTypeLabel("en", "合伙企业财产份额转让纠纷")).toBe(
      "Partnership share transfer dispute"
    );
    expect(formatDecisionTypeLabel("en", "环境污染民事公益诉讼")).toBe(
      "Environmental public-interest litigation"
    );
    expect(formatDecisionTypeLabel("en", "大气污染责任纠纷")).toBe("Air-pollution liability dispute");
    expect(formatDecisionTypeLabel("en", "电信服务合同纠纷")).toBe("Telecom service contract dispute");
    expect(formatDecisionTypeLabel("en", "侵权责任纠纷")).toBe("Tort liability dispute");
    expect(formatDecisionTypeLabel("en", "健康权纠纷")).toBe("Right-to-health dispute");
    expect(formatDecisionTypeLabel("en", "人格权纠纷")).toBe("Personality-rights dispute");
    expect(formatDecisionTypeLabel("en", "平等就业权纠纷")).toBe("Equal-employment-rights dispute");
    expect(formatDecisionTypeLabel("en", "追索劳动报酬纠纷")).toBe("Labor remuneration dispute");
    expect(formatDecisionTypeLabel("en", "确认劳动关系纠纷")).toBe(
      "Employment-relationship confirmation dispute"
    );
    expect(formatDecisionTypeLabel("en", "信托合同纠纷")).toBe("Trust contract dispute");
    expect(formatDecisionTypeLabel("en", "买卖合同纠纷")).toBe("Sales contract dispute");
    expect(formatDecisionTypeLabel("en", "合同纠纷")).toBe("Contract dispute");
    expect(formatDecisionTypeLabel("en", "执行程序中的异议之诉")).toBe(
      "Action challenging an objection ruling in enforcement"
    );
    expect(formatDecisionTypeLabel("en", "追加被执行人执行异议之诉")).toBe(
      "Action challenging the addition of a judgment debtor in enforcement"
    );
    expect(formatDecisionTypeLabel("en", "新增资本认购纠纷")).toBe("New-capital subscription dispute");
    expect(formatDecisionTypeLabel("en", "公司证照返还纠纷")).toBe("Company certificate return dispute");
    expect(formatDecisionTypeLabel("en", "请求变更公司登记纠纷")).toBe(
      "Request to change company registration dispute"
    );
    expect(formatDecisionTypeLabel("en", "公司设立登记行政争议")).toBe(
      "Administrative dispute over company establishment registration"
    );
    expect(formatDecisionTypeLabel("en", "经营范围变更登记行政争议")).toBe(
      "Administrative dispute over business-scope change registration"
    );
    expect(formatDecisionTypeLabel("en", "企业名称争议与变更登记行政争议")).toBe(
      "Administrative dispute over enterprise-name adjudication and change registration"
    );
    expect(formatDecisionTypeLabel("en", "股东知情权、公司盈余分配纠纷")).toBe(
      "Shareholder inspection and profit distribution dispute"
    );
    expect(formatDecisionTypeLabel("en", "损害公司利益责任纠纷")).toBe(
      "Company-interest damage liability dispute"
    );
    expect(formatDecisionTypeLabel("en", "股份回购合同纠纷")).toBe("Share buyback contract dispute");
    expect(formatDecisionTypeLabel("en", "增资纠纷")).toBe("Capital increase dispute");
    expect(formatDecisionTypeLabel("en", "其他合同纠纷")).toBe("Other contract dispute");
    expect(formatDecisionTypeLabel("en", "请求公司收购股份纠纷")).toBe(
      "Request for company share repurchase dispute"
    );
    expect(formatDecisionTypeLabel("en", "执行复议案")).toBe("Execution review case");
    expect(formatDecisionTypeLabel("en", "与公司有关的纠纷")).toBe("Company-related dispute");
    expect(formatDecisionTypeLabel("en", "公司盈余分配纠纷")).toBe("Corporate profit distribution dispute");
    expect(formatVersionLabel("zh", "2025 revision")).toBe("2025修订");
    expect(formatVersionLabel("zh", "2020 text")).toBe("2020文本");
    expect(formatVersionLabel("en", "2025 text")).toBe("2025 text");
    expect(formatVersionLabel("en", "2023 text")).toBe("2023 text");
    expect(formatVersionLabel("en", "2020 revision")).toBe("2020 revision");
    expect(formatVersionLabel("zh", "2024 text")).toBe("2024文本");
    expect(formatVersionLabel("en", "2015 text")).toBe("2015 text");
    expect(formatVersionLabel("en", "2013 text")).toBe("2013 text");
    expect(formatVersionLabel("en", "2017 text")).toBe("2017 text");
    expect(formatVersionLabel("zh", "1994 text")).toBe("1994文本");
    expect(formatVersionLabel("en", "1997 text")).toBe("1997 text");
    expect(formatVersionLabel("zh", "1999 text")).toBe("1999文本");
    expect(formatVersionLabel("zh", "1997 original enactment")).toBe("1997制定");
    expect(formatVersionLabel("en", "2006 revision")).toBe("2006 revision");
    expect(formatVersionLabel("en", "2007 revision")).toBe("2007 revision");
    expect(formatVersionLabel("zh", "1993 original enactment")).toBe("1993制定");
    expect(formatVersionLabel("en", "2004 first amendment")).toBe("2004 first amendment");
    expect(formatVersionLabel("zh", "2004 second amendment")).toBe("2004第二次修正");
    expect(formatVersionLabel("en", "2005 revision")).toBe("2005 revision");
    expect(formatVersionLabel("zh", "2013 amendment")).toBe("2013修正");
    expect(formatVersionLabel("zh", "2014 amendment")).toBe("2014修正");
    expect(formatVersionLabel("zh", "2014 revised interpretation")).toBe("2014修正司法解释");
    expect(formatVersionLabel("en", "2013 interpretation")).toBe("2013 interpretation");
    expect(formatVersionLabel("zh", "2025 draft")).toBe("2025征求意见稿");
    expect(formatVersionLabel("en", "current chapter")).toBe("Current chapter");
    expect(formatVersionLabel("en", "current model act")).toBe("Current model act");
    expect(formatVersionLabel("en", "current code")).toBe("Current code");
    expect(formatVersionLabel("en", "Order No. 230")).toBe("Order No. 230");
    expect(formatVersionLabel("zh", "Order No. 52")).toBe("第52号令");
    expect(formatVersionLabel("en", "Order No. 82")).toBe("Order No. 82");
    expect(formatVersionLabel("zh", "Order No. 96")).toBe("第96号令");
    expect(formatVersionLabel("en", "Order No. 105")).toBe("Order No. 105");
    expect(formatVersionLabel("zh", "Order No. 734")).toBe("第734号令");
    expect(formatVersionLabel("en", "Order No. 746")).toBe("Order No. 746");
    expect(formatVersionLabel("en", "Order No. 567")).toBe("Order No. 567");
    expect(formatVersionLabel("zh", "2017 interpretation")).toBe("2017司法解释");
    expect(formatSourceLabel("zh", "Official release")).toBe("官方发布页");
    expect(formatSourceLabel("en", "Official Chinese")).toBe("Official Chinese");
    expect(formatSourceLabel("zh", "Public English translation")).toBe("公开英文翻译");
    expect(formatSourceLabel("en", "Public English translation (reference)")).toBe(
      "Public English translation (reference)"
    );
  });

  it("returns short English law labels where available", () => {
    expect(getLawShortLabel("en", "cn-partnership-enterprise-law-2006", "合伙企业法")).toBe(
      "Partnership Enterprise Law"
    );
    expect(
      getLawShortLabel("en", "cn-partnership-registration-measures-2019", "合伙企业登记管理办法")
    ).toBe("Partnership Registration Measures");
    expect(
      getLawShortLabel("en", "cn-market-entity-registration-regulations-2021", "市场主体登记管理条例")
    ).toBe("Market Entity Registration Regulations");
    expect(
      getLawShortLabel("en", "cn-enterprise-name-registration-regulations-2020", "企业名称登记管理规定")
    ).toBe("Enterprise Name Regulations");
    expect(
      getLawShortLabel("en", "cn-registration-archives-measures-2025", "经营主体登记档案管理办法")
    ).toBe("Registration Archives Measures");
    expect(
      getLawShortLabel("en", "cn-forced-company-deregistration-measures-2025", "强制注销公司登记制度实施办法")
    ).toBe("Forced Deregistration Measures");
    expect(getLawShortLabel("en", "cn-company-law-1993", "公司法（1993）")).toBe("Company Law (1993)");
    expect(getLawShortLabel("en", "cn-company-law-2005", "公司法（2005）")).toBe("Company Law (2005)");
    expect(getLawShortLabel("en", "cn-securities-law-2014", "证券法（2014）")).toBe("Securities Law (2014)");
    expect(
      getLawShortLabel("en", "cn-state-council-registered-capital-rules-2024", "注册资本登记规则")
    ).toBe("Capital Registration Rules");
    expect(getLawShortLabel("en", "cn-spc-compulsory-liquidation-minutes-2009", "公司强制清算纪要")).toBe(
      "Compulsory Liquidation Minutes"
    );
    expect(
      getLawShortLabel("en", "cn-spc-foreign-invested-enterprise-disputes-1-2021", "外商投资企业纠纷司法解释（一）")
    ).toBe("FIE Dispute Interpretation I");
    expect(
      getLawShortLabel("en", "cn-spc-enterprise-bankruptcy-interpretation-1-2011", "企业破产法司法解释（一）")
    ).toBe("Bankruptcy Interpretation I");
    expect(
      getLawShortLabel("en", "cn-spc-company-law-interpretation-3-2021", "公司法司法解释（三）")
    ).toBe("SPC Company Law Interpretation III");
    expect(
      getLawShortLabel("en", "cn-spc-company-law-unified-draft-2025", "公司法统一司法解释草案")
    ).toBe("Company Law Draft Interpretation");
    expect(
      getLawShortLabel("en", "cn-spc-enterprise-bankruptcy-interpretation-2-2013", "企业破产法司法解释（二）")
    ).toBe("Bankruptcy Interpretation II");
    expect(
      getLawShortLabel("en", "sz-business-environment-regulations-2020", "深圳经济特区优化营商环境条例")
    ).toBe("SZ Business Environment Regulations");
    expect(
      getLawShortLabel("en", "sh-business-entity-domicile-measures-2024", "上海市经营主体住所登记管理办法")
    ).toBe("Shanghai Domicile Measures");
    expect(
      getLawShortLabel("en", "bj-high-court-securities-dispute-opinion-2019", "北京高院群体性证券纠纷意见")
    ).toBe("BJ Securities Dispute Opinion");
    expect(
      getLawShortLabel("en", "sh-high-court-bankruptcy-guideline-2018", "上海高院破产审判指引")
    ).toBe("SH Bankruptcy Guideline");
    expect(
      getLawShortLabel("en", "js-high-court-company-disputes-report-2017", "江苏公司纠纷审判情况通报")
    ).toBe("JS Company Disputes Report");
    expect(
      getLawShortLabel("en", "gd-high-court-bankruptcy-development-opinion-2023", "广东高院破产高质量发展意见")
    ).toBe("GD Bankruptcy Development Opinion");
    expect(getLawShortLabel("en", "us-model-business-corporation-act", "美国示范公司法")).toBe(
      "Model Business Corporation Act"
    );
    expect(getLawShortLabel("en", "us-delaware-general-corporation-law", "特拉华总公司法")).toBe(
      "Delaware General Corporation Law"
    );
    expect(
      getLawShortLabel("en", "us-ali-principles-corporate-governance", "ALI公司治理原则")
    ).toBe("ALI Principles of Corporate Governance");
    expect(getLawShortLabel("en", "us-securities-exchange-act-1934", "美国《1934年证券交易法》")).toBe(
      "Securities Exchange Act of 1934"
    );
    expect(getLawShortLabel("en", "us-sarbanes-oxley-act-2002", "美国《萨班斯-奥克斯利法》")).toBe(
      "Sarbanes-Oxley Act"
    );
    expect(getLawShortLabel("en", "uk-companies-act-2006", "英国《公司法》")).toBe("Companies Act 2006");
    expect(
      getLawShortLabel("en", "uk-model-articles-regulations-2008", "英国《公司示范章程细则条例》")
    ).toBe("Model Articles Regulations");
    expect(
      getLawShortLabel("en", "uk-company-directors-disqualification-act-1986", "英国《公司董事取消资格法》")
    ).toBe("Company Directors Disqualification Act");
    expect(getLawShortLabel("en", "uk-corporate-governance-code-2024", "英国公司治理守则")).toBe(
      "UK Corporate Governance Code"
    );
    expect(getLawShortLabel("en", "de-stock-corporation-act", "德国股份公司法")).toBe(
      "German Stock Corporation Act"
    );
    expect(
      getLawShortLabel("en", "de-limited-liability-companies-act", "德国有限责任公司法")
    ).toBe("German Limited Liability Companies Act");
    expect(getLawShortLabel("en", "de-corporate-governance-code-2022", "德国公司治理守则")).toBe(
      "German Corporate Governance Code"
    );
    expect(
      getLawShortLabel("en", "hk-securities-and-futures-ordinance-cap-571", "香港《证券及期货条例》")
    ).toBe("Securities and Futures Ordinance");
    expect(
      getLawShortLabel(
        "en",
        "hk-companies-winding-up-miscellaneous-provisions-ordinance-cap-32",
        "香港《公司（清盘及杂项条文）条例》"
      )
    ).toBe("Companies (Winding Up and Miscellaneous Provisions) Ordinance");
    expect(getLawShortLabel("en", "sg-securities-and-futures-act-2001", "新加坡《证券与期货法》")).toBe(
      "Securities and Futures Act"
    );
    expect(
      getLawShortLabel(
        "en",
        "sg-insolvency-restructuring-dissolution-act-2018",
        "新加坡《2018年破产、重组与解散法》"
      )
    ).toBe("Insolvency, Restructuring and Dissolution Act");
    expect(
      getLawShortLabel("en", "sz-joint-stock-company-regulations-1993", "深圳经济特区股份有限公司条例")
    ).toBe("SZ Joint Stock Company Regulations");
    expect(getLawShortLabel("zh", "cn-company-law-2023", "公司法")).toBe("公司法");
  });

  it("maps newly added comparative decision-type labels", () => {
    expect(formatDecisionTypeLabel("en", "控制股东自我交易审查")).toBe("Controller self-dealing review");
    expect(formatDecisionTypeLabel("en", "派生诉讼许可与善意标准")).toBe(
      "Derivative-action leave and good-faith standard"
    );
    expect(formatDecisionTypeLabel("en", "退市、股东会参与与退出保护")).toBe(
      "Delisting, shareholder participation, and exit protection"
    );
    expect(formatDecisionTypeLabel("en", "æ”¶è´­é˜²å¾¡å®¡æŸ¥")).toBe("Takeover-defense review");
    expect(formatDecisionTypeLabel("en", "æŽ§åˆ¶æƒå‡ºå”®ä¹‰åŠ¡")).toBe("Sale-of-control duties");
  });
});
