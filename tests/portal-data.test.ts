import { describe, expect, it } from "vitest";

import { getPortalSnapshot } from "@/lib/portal-data";

describe("portal data snapshot", () => {
  it("loads a China-first seeded corpus across all collections", async () => {
    const snapshot = await getPortalSnapshot();

    expect(snapshot.laws.length).toBeGreaterThanOrEqual(23);
    expect(snapshot.cases.length).toBeGreaterThanOrEqual(52);
    expect(snapshot.articleLinks.length).toBeGreaterThanOrEqual(5);
    expect(snapshot.topics.length).toBeGreaterThanOrEqual(7);
    expect(snapshot.jurisdictions.map((item) => item.id)).toEqual(
      expect.arrayContaining(["cn", "hk", "sg", "us", "uk", "de"])
    );
    expect(snapshot.jurisdictions.find((item) => item.id === "us")?.featuredCaseIds).toEqual(
      expect.arrayContaining([
        "us-case-smith-v-van-gorkom",
        "us-case-unocal-v-mesa",
        "us-case-revlon-v-macandrews",
        "us-case-in-re-caremark",
        "us-case-weinberger-v-uop",
        "us-case-kahn-v-mfw",
        "us-case-sinclair-oil-v-levien"
      ])
    );
    expect(snapshot.laws.map((item) => item.id)).toEqual(
      expect.arrayContaining([
        "cn-partnership-enterprise-law-1997",
        "cn-partnership-enterprise-law-2006",
        "cn-partnership-registration-measures-1997",
        "cn-partnership-registration-measures-2007",
        "cn-partnership-registration-measures-2014",
        "cn-partnership-registration-measures-2019",
        "cn-foreign-partnership-establishment-measures-2009",
        "cn-foreign-invested-partnership-registration-provisions-2019",
        "cn-market-entity-registration-regulations-2021",
        "cn-market-entity-registration-rules-2022",
        "cn-enterprise-name-registration-regulations-2020",
        "cn-enterprise-name-registration-implementation-measures-2023",
        "cn-company-registration-regulations-1994",
        "cn-company-registration-regulations-2014",
        "cn-company-registration-regulations-2016",
        "cn-enterprise-legal-person-registration-regulations-1988",
        "cn-enterprise-legal-person-registration-regulations-2019",
        "cn-enterprise-legal-person-registration-rules-2017",
        "cn-registration-archives-measures-2025",
        "cn-forced-company-deregistration-measures-2025",
        "cn-registration-application-agency-measures-2025",
        "cn-listed-company-disclosure-measures-2007",
        "cn-listed-company-disclosure-measures-2021",
        "cn-csrc-listed-company-governance-code-2002",
        "cn-csrc-listed-company-governance-code-2018",
        "cn-listed-company-independent-director-measures-2023",
        "cn-listed-company-disclosure-deferral-exemption-rules-2025",
        "cn-major-asset-reorganization-measures-2008",
        "cn-major-asset-reorganization-measures-2014",
        "cn-major-asset-reorganization-measures-2025",
        "cn-takeover-measures-2006",
        "cn-takeover-measures-2014",
        "cn-takeover-measures-2020",
        "cn-csrc-articles-of-association-guidelines-2016",
        "cn-csrc-articles-of-association-guidelines-2022",
        "cn-share-reduction-measures-2024",
        "cn-management-shareholding-rules-2024",
        "cn-csrc-cash-dividend-guideline-2023",
        "cn-share-repurchase-rules-2023",
        "cn-market-value-management-guideline-2024",
        "cn-nonlisted-public-company-supervision-measures-2021",
        "cn-nonlisted-public-company-disclosure-measures-2021",
        "cn-spc-company-law-interpretation-1-2006",
        "cn-spc-company-law-interpretation-1-2014",
        "cn-spc-company-law-interpretation-2-2008",
        "cn-spc-company-law-interpretation-2-2020",
        "cn-spc-company-law-interpretation-3-2011",
        "cn-spc-company-law-interpretation-3-2021",
        "cn-spc-company-law-interpretation-4-2017",
        "cn-spc-company-law-interpretation-5-2019",
        "cn-spc-company-law-interpretation-5-2021",
        "cn-spc-company-law-unified-draft-2025",
        "cn-spc-compulsory-liquidation-minutes-2009",
        "cn-spc-foreign-invested-enterprise-disputes-1-2021",
        "cn-spc-enterprise-bankruptcy-interpretation-1-2011",
        "cn-spc-enterprise-bankruptcy-interpretation-2-2013",
        "cn-spc-enterprise-bankruptcy-interpretation-3-2019",
        "cn-national-bankruptcy-trial-minutes-2018",
        "bj-high-court-securities-dispute-opinion-2019",
        "bj-high-court-bankruptcy-fast-track-opinion-2018",
        "bj-high-court-bankruptcy-procedure-rules-2013",
        "sh-high-court-bankruptcy-guideline-2018",
        "sh-high-court-financial-commercial-white-paper-2020",
        "js-high-court-company-disputes-report-2017",
        "gd-high-court-zombie-enterprise-guideline-2019",
        "gd-high-court-bankruptcy-development-opinion-2023",
        "gd-high-court-securities-white-paper-2025",
        "sz-business-environment-regulations-2020",
        "bj-business-environment-regulations-2024",
        "sz-commercial-registration-rules-2020",
        "sh-business-entity-domicile-measures-2024",
        "sh-enterprise-domicile-measures-2015",
        "sz-joint-stock-company-regulations-1993",
        "sz-joint-stock-incorporation-rules-1994",
        "sz-limited-liability-company-regulations-1997",
        "sz-wholly-state-owned-company-regulations-1999",
        "us-model-business-corporation-act",
        "us-delaware-general-corporation-law",
        "us-ali-principles-corporate-governance",
        "us-securities-exchange-act-1934",
        "us-sarbanes-oxley-act-2002",
        "uk-companies-act-2006",
        "uk-model-articles-regulations-2008",
        "uk-company-directors-disqualification-act-1986",
        "uk-corporate-governance-code-2024",
        "de-stock-corporation-act",
        "de-limited-liability-companies-act",
        "de-corporate-governance-code-2022",
        "hk-companies-winding-up-miscellaneous-provisions-ordinance-cap-32",
        "hk-securities-and-futures-ordinance-cap-571",
        "sg-insolvency-restructuring-dissolution-act-2018",
        "sg-securities-and-futures-act-2001"
      ])
    );
    expect(snapshot.cases.map((item) => item.id)).toEqual(
      expect.arrayContaining([
        "cn-gazette-case-partnership-share-transfer-xing-furong",
        "cn-gazette-case-limited-partner-derivative-shixin-ronghe",
        "cn-gazette-case-partnership-external-liability-nantong-shuangying",
        "cn-guiding-case-9-liquidation-liability",
        "cn-guiding-case-15-corporate-veil",
        "cn-guiding-case-23-expired-food-punitive-damages",
        "cn-guiding-case-64-china-mobile-disclosure",
        "cn-guiding-case-75-ruitai-environmental-standing",
        "cn-guiding-case-130-zangjinge-entrusted-pollution",
        "cn-guiding-case-131-zhenhua-air-pollution-risk",
        "cn-guiding-case-148-shareholder-standing",
        "cn-guiding-case-163-textile-substantive-consolidation",
        "cn-guiding-case-174-yalong-ecological-prevention",
        "cn-guiding-case-182-bonus-approval-labor-pay",
        "cn-guiding-case-204-yuhuang-retrofit-offset",
        "cn-guiding-case-210-zhengpeng-ecological-damage",
        "cn-guiding-case-215-environmental-veil-piercing",
        "cn-guiding-case-237-platform-outsourcing-labor",
        "cn-guiding-case-238-platform-individual-business-labor",
        "cn-guiding-case-260-shanxi-aluminum-public-interest-settlement",
        "cn-reference-case-fuhai-cherry-air-pollution",
        "cn-reference-case-hyundai-emissions-public-interest-trust",
        "cn-reference-case-pingchuan-three-no-diet-product",
        "cn-reference-case-liang-cook-apprentice-gender-discrimination",
        "cn-reference-case-hbv-carrier-employment-discrimination",
        "cn-reference-case-meihekou-heating-rescue-health",
        "cn-reference-case-nansha-port-safety-injury",
        "cn-reference-case-shareholder-debt-setoff-contribution",
        "cn-gazette-case-wang-qinjie-contribution-extension-creditor-protection",
        "cn-database-case-lu-cao-low-price-transfer-contribution",
        "cn-database-case-wen-sichuan-subscription-limitations",
        "cn-reference-case-zhao-liangchen-capital-withdrawal-offset",
        "cn-reference-case-linzi-malicious-extension-acceleration",
        "cn-reference-case-jimo-unpaid-contribution-liability",
        "cn-reference-case-wang-xu-change-to-ip-contribution",
        "cn-reference-case-yuehua-defective-capital-reduction",
        "cn-reference-case-zhejiang-reduction-not-direct-execution",
        "cn-reference-case-today-seeds-zero-price-transfer-reduction",
        "cn-gazette-case-shareholder-inspection-jiade",
        "cn-reference-case-han-dequan-original-vouchers-inspection",
        "cn-reference-case-jiao-jinzhu-shareholder-inspection",
        "cn-reference-case-zhang-zhiyuan-keluoen-inspection",
        "cn-reference-case-wang-zaozhuang-hotel-inspection",
        "cn-reference-case-lei-zhaozhuang-gift-no-shareholder-status",
        "cn-reference-case-qinzhou-impersonated-employee-no-status",
        "cn-reference-case-wang-baohe-bank-shareholder-status",
        "cn-database-case-sun-beijing-tech-improper-purpose-inspection",
        "cn-reference-case-sun-fengxian-improper-purpose-inspection",
        "cn-reference-case-xiafeng-jiushe-books-not-vouchers",
        "cn-reference-case-jiangmou-real-estate-inspection-professionals",
        "cn-gazette-case-forced-profit-distribution",
        "cn-reference-case-chu-profit-distribution",
        "cn-reference-case-former-shareholder-undistributed-profits-rizhao",
        "cn-reference-case-shanghai-unpaid-contribution-no-dividend-freeze",
        "cn-gazette-case-xu-minghong-profit-distribution-procedure",
        "cn-gazette-case-preemption-zhongjing",
        "cn-gazette-case-xinaote-huarong-preemption-contract-validity",
        "cn-gazette-case-zhang-guiping-founder-transfer-restriction",
        "cn-gazette-case-dilutive-capital-increase",
        "cn-gazette-case-hongri-kechuang-capital-increase-voting",
        "cn-reference-case-ge-saidu-ratification-resolution",
        "cn-reference-case-chen-haidian-unnotified-agenda-resolution",
        "cn-reference-case-li-haidian-board-email-procedure",
        "cn-reference-case-jia-haidian-contribution-deadline-majority",
        "cn-reference-case-chen-shandong-a-beijing-b-resolution",
        "cn-reference-case-zhao-qian-zaozhuang-resolution",
        "cn-reference-case-shanghai-monitor-temporary-meeting-legal-representative",
        "cn-gazette-case-contribution-deadline-resolution",
        "cn-gazette-case-beneficial-owner-zhang-jianzhong",
        "cn-gazette-case-cheng-junping-foreign-beneficial-owner-status",
        "cn-gazette-case-kunming-oke-equity-security-status",
        "cn-gazette-case-shareholder-expulsion-liu-meifang",
        "cn-gazette-case-fie-board-record-xu-minghong",
        "cn-gazette-case-listed-shareholding-shenyin",
        "cn-gazette-case-anji-unauthorized-stock-issuance",
        "cn-gazette-case-lanzhou-minbai-capital-reserve-shares",
        "cn-gazette-case-biaobang-anshan-bank-share-transfer",
        "cn-gazette-case-bafeite-state-owned-off-market-transfer-invalid",
        "cn-gazette-case-changcheng-jilin-gratuitous-transfer-creditor-protection",
        "cn-gazette-case-fengfeng-state-capital-loan-boundary",
        "cn-gazette-case-fabricated-shareholder-meeting-zhang-yanjuan",
        "cn-gazette-case-xinda-tailai-affiliated-company-veil",
        "cn-gazette-case-ying-gaofeng-jiameide-one-person-veil",
        "cn-gazette-case-shao-ping-kuntong-xingtongda-veil",
        "cn-reference-case-meizhou-salt-baked-chicken-agency-veil",
        "cn-reference-case-luo-weikang-nike-affiliate-veil",
        "cn-reference-case-guangzhou-dashun-jiangmen-fengpin-weichang-veil",
        "cn-reference-case-guangzhou-construction-benefit-transfer-veil",
        "cn-reference-case-kunshan-shell-switching-horizontal-veil",
        "cn-reference-case-zibo-sichuang-glade-fushide-beisida-veil",
        "cn-typical-case-self-dealing-shanghai-lan",
        "cn-typical-case-related-transaction-shandong-yue",
        "cn-typical-case-shareholder-inspection-korea-t",
        "cn-typical-case-deadlock-dissolution-german-a",
        "cn-typical-case-certificate-preservation-japan-a",
        "cn-database-case-certificate-return-shanghai-pan",
        "cn-database-case-transfer-agreement-shareholder-inspection",
        "cn-database-case-lv-gansu-investment-shareholder-status",
        "cn-database-case-destroyed-books-inspection",
        "cn-database-case-change-registration-chen-moufei",
        "cn-gazette-case-thumb-legal-representative-publicity",
        "cn-gazette-case-zhenbang-apparent-representation-guarantee",
        "cn-gazette-case-zhongjiancai-ultra-vires-guarantee",
        "cn-gazette-case-guixinyuan-business-scope-own-property-disposal",
        "cn-gazette-case-hk-xinjianye-representative-before-registration",
        "cn-reference-case-hongzhi-authority-not-capacity-share-transfer",
        "cn-database-case-false-seal-legal-representative-real-estate",
        "cn-database-case-port-company-dissolution",
        "cn-gazette-case-shifeng-fujun-deadlock-fault",
        "cn-gazette-case-huiguan-northeast-asia-oppression-dissolution",
        "cn-gazette-case-jilin-financial-no-dissolution",
        "cn-database-case-former-shareholder-inspection-profit",
        "cn-database-case-employee-supervisor-resolution-invalid",
        "cn-database-case-board-resolution-charter-overreach",
        "cn-database-case-profit-distribution-zhao-wang",
        "cn-database-case-related-transaction-gao-cheng",
        "cn-reference-case-xiang-zaozhuang-taxi-energy-supply",
        "cn-reference-case-kou-guo-henan-education-asset-sale",
        "cn-reference-case-shanghai-investment-bio-related-resolution",
        "cn-reference-case-yiming-jinshengli-related-transaction-offset",
        "cn-database-case-equity-security-nominee-vote",
        "cn-database-case-fie-transition-governance",
        "cn-database-case-listed-buyback-vam-nanjing",
        "cn-gazette-case-vam-haifu-investment",
        "cn-database-case-vam-shanghai-preemption-buyback",
        "cn-reference-case-vam-ruifeng-buyback",
        "cn-reference-case-vam-jiuding-tianxia",
        "cn-reference-case-vam-zhongnan-ipo-restoration",
        "cn-reference-case-vam-hu-xiufang-drawer",
        "cn-reference-case-vam-huyue-neeq-delisting",
        "cn-reference-case-vam-hanlin-guarantee",
        "cn-reference-case-vam-huagong-buyback",
        "cn-reference-case-vam-zhang-dongju-damages",
        "cn-reference-case-vam-gaoci-neeq-invalid",
        "cn-database-case-derivative-execution-review",
        "cn-reference-case-closure-operator-liquidation-liability",
        "cn-reference-case-camel-haixia-continuation-settlement-liquidation",
        "cn-reference-case-shengnuo-forced-liquidation-to-bankruptcy",
        "cn-reference-case-upstream-guarantee-no-resolution",
        "cn-reference-case-fang-siwei-related-transaction-monitor",
        "cn-reference-case-hongshida-zhangchen-company-harm",
        "cn-reference-case-lvyuan-patent-transfer-loyalty",
        "cn-reference-case-yuyao-job-invention-loyalty",
        "cn-reference-case-baolu-vehicle-reward-duty-boundary",
        "cn-reference-case-dalian-daxian-jincheng-resolution-validity",
        "cn-reference-case-dazhihui-derivative-recovery",
        "cn-reference-case-st-moden-fund-occupation-derivative",
        "cn-reference-case-taian-ret-fund-occupation-derivative",
        "cn-reference-case-st-lutong-fund-occupation-derivative",
        "cn-reference-case-supervisor-noncompete-binhu",
        "cn-reference-case-jiachen-haima-burden-allocation-veil",
        "cn-reference-case-taiwan-plastics-ningbo-import-export-veil",
        "cn-reference-case-spc-private-economy-reform-debt-stripping",
        "cn-gazette-case-tianyuan-listing-debt-transfer",
        "cn-reference-case-wang-jun-zaozhuang-bank-asset-acquisition-boundary",
        "cn-reference-case-li-xiuxiao-tiantuo-restructuring-debt",
        "cn-reference-case-pingyin-one-person-to-ordinary-llc",
        "cn-gazette-case-icbc-shandong-xincheng-split-debt",
        "cn-reference-case-nanjing-xuanwuhu-split-vs-investment",
        "cn-reference-case-wu-jialun-split-registration-assistance",
        "cn-reference-case-zhengzhou-libao-split-tax-allocation",
        "us-case-unocal-v-mesa",
        "us-case-revlon-v-macandrews",
        "us-case-smith-v-van-gorkom",
        "us-case-in-re-caremark",
        "us-case-weinberger-v-uop",
        "us-case-kahn-v-mfw",
        "us-case-sinclair-oil-v-levien",
        "uk-case-ebrahimi-v-westbourne",
        "uk-case-regal-hastings-v-gulliver",
        "uk-case-prest-v-petrodel",
        "uk-case-salomon-v-salomon",
        "uk-case-foss-v-harbottle",
        "de-case-holzmuller",
        "de-case-macrotron",
        "hk-case-waddington-v-chan",
        "hk-case-yung-kee-holdings",
        "sg-case-ho-yew-kong-sakae",
        "sg-case-ting-shwu-ping-scanone",
        "sg-case-over-and-over-bonvests",
        "sg-case-ang-thiam-swee-v-low-hian-chor"
      ])
    );
    expect(snapshot.articleLinks.map((item) => item.id)).toEqual(
      expect.arrayContaining([
        "article-oup-anatomy-of-corporate-law",
        "article-cambridge-comparative-company-law",
        "article-aba-mbca-at-75",
        "article-pbook-folk-delaware-general-corporation-law",
        "article-pbook-genius-american-corporate-law",
        "article-pbook-gower-davies-principles",
        "article-pbook-introduction-to-company-law-davies",
        "article-pbook-comparative-company-law",
        "article-pbook-annotated-singapore-companies-act",
        "article-pbook-guide-to-company-law-singapore",
        "article-pbook-walter-woon-company-law",
        "article-cambridge-german-company-law-developments",
        "article-pbook-corporate-law-in-germany",
        "article-pbook-hong-kong-company-law",
        "article-pbook-hk-company-law-cases-materials-comments"
      ])
    );
    expect(snapshot.topics.map((item) => item.id)).toEqual(
      expect.arrayContaining([
        "registered-capital",
        "corporate-reorganization",
        "listed-governance",
        "state-owned-company-special-rules",
        "joint-stock-share-issuance-and-transfer",
        "partnership-enterprises",
        "company-registration-and-business-environment",
        "legal-representative-and-seal-control",
        "ultra-vires-and-authority-boundaries",
        "company-dissolution-and-compulsory-liquidation",
        "corporate-social-responsibility",
        "corporate-veil-piercing",
        "shareholder-inspection-and-information-rights",
        "shareholder-status-disputes",
        "preemption-and-equity-transfer-restrictions",
        "vam-disputes"
      ])
    );
    expect(snapshot.siteCopy.id).toBe("default");
  });

  it("consolidates director, supervisor, and executive topics into one merged topic page", async () => {
    const snapshot = await getPortalSnapshot();
    const topicIds = snapshot.topics.map((item) => item.id);

    expect(topicIds).toContain("directors-officer-loyalty-and-duties");
    expect(topicIds).not.toContain("director-abuse");
    expect(topicIds).not.toContain("director-liability-litigation");
    expect(topicIds).not.toContain("director-supervisory-representative-action-pathways");

    const topic = snapshot.topics.find((item) => item.id === "directors-officer-loyalty-and-duties");

    expect(topic?.nameZh).toBe("董监高信义义务、责任追究与代表诉讼专题");
    expect(topic?.caseGroups).toHaveLength(5);
    expect(topic?.relatedCaseIds).toEqual(
      expect.arrayContaining([
        "cn-reference-case-kou-guo-henan-education-asset-sale",
        "cn-reference-case-dazhihui-derivative-recovery",
        "cn-guiding-case-10-board-resolution-review"
      ])
    );
  });

  it("keeps law-to-case and law-to-article cross references valid", async () => {
    const snapshot = await getPortalSnapshot();
    const caseIds = new Set(snapshot.cases.map((item) => item.id));
    const articleIds = new Set(snapshot.articleLinks.map((item) => item.id));

    for (const law of snapshot.laws) {
      expect(law.relatedCaseIds.every((id) => caseIds.has(id))).toBe(true);
      expect(law.relatedArticleIds.every((id) => articleIds.has(id))).toBe(true);
    }
  });

  it("surfaces the first Company Law as passed in 1993 and effective in 1994", async () => {
    const snapshot = await getPortalSnapshot();
    const firstCompanyLaw = snapshot.laws.find((item) => item.id === "cn-company-law-1993");

    expect(firstCompanyLaw).toBeTruthy();
    expect(firstCompanyLaw?.promulgationDate).toBe("1993-12-29");
    expect(firstCompanyLaw?.effectiveDate).toBe("1994-07-01");
    expect(firstCompanyLaw?.summaryZh).toContain("1993年12月29日通过");
    expect(firstCompanyLaw?.summaryZh).toContain("1994年7月1日施行");
  });

  it("stores repeal-basis, applicable-period, and judicial-material metadata", async () => {
    const snapshot = await getPortalSnapshot();
    const companyRegistration2016 = snapshot.laws.find(
      (item) => item.id === "cn-company-registration-regulations-2016"
    );
    const legalPersonRules2017 = snapshot.laws.find(
      (item) => item.id === "cn-enterprise-legal-person-registration-rules-2017"
    );
    const unifiedDraft = snapshot.laws.find((item) => item.id === "cn-spc-company-law-unified-draft-2025");

    expect(companyRegistration2016).toBeTruthy();
    expect(companyRegistration2016?.applicablePeriodZh).toContain("2022年3月1日");
    expect(companyRegistration2016?.repealBasisZh).toContain("市场主体登记管理条例");
    expect(legalPersonRules2017).toBeTruthy();
    expect(legalPersonRules2017?.repealBasisZh).toContain("市场主体登记管理条例实施细则");
    expect(unifiedDraft?.judicialMaterialClass).toBe("spc-draft");
  });

  it("loads topic-level case grouping for the VAM专题", async () => {
    const snapshot = await getPortalSnapshot();
    const vamTopic = snapshot.topics.find((item) => item.id === "vam-disputes");

    expect(vamTopic).toBeTruthy();
    expect(vamTopic?.caseGroups?.length).toBeGreaterThanOrEqual(4);
    expect(vamTopic?.caseGroups?.flatMap((group) => group.caseIds)).toEqual(
      expect.arrayContaining([
        "cn-reference-case-vam-zhongnan-ipo-restoration",
        "cn-reference-case-vam-hu-xiufang-drawer",
        "cn-reference-case-vam-zhang-dongju-damages",
        "cn-reference-case-vam-gaoci-neeq-invalid"
      ])
    );
  });

  it("loads topic-level case grouping for the CSR专题", async () => {
    const snapshot = await getPortalSnapshot();
    const csrTopic = snapshot.topics.find((item) => item.id === "corporate-social-responsibility");

    expect(csrTopic).toBeTruthy();
    expect(csrTopic?.nameZh).toContain("CSR专题");
    expect(csrTopic?.nameEn).toContain("CSR Topic");
    expect(csrTopic?.caseGroups?.length).toBeGreaterThanOrEqual(4);
    expect(csrTopic?.caseGroups?.flatMap((group) => group.caseIds)).toEqual(
      expect.arrayContaining([
        "cn-guiding-case-130-zangjinge-entrusted-pollution",
        "cn-guiding-case-23-expired-food-punitive-damages",
        "cn-guiding-case-237-platform-outsourcing-labor",
        "cn-reference-case-liang-cook-apprentice-gender-discrimination",
        "cn-reference-case-meihekou-heating-rescue-health"
      ])
    );
  });

  it("loads topic-level case grouping for the legal-representative and seal-control topic", async () => {
    const snapshot = await getPortalSnapshot();
    const topic = snapshot.topics.find((item) => item.id === "legal-representative-and-seal-control");

    expect(topic).toBeTruthy();
    expect(topic?.caseGroups?.length).toBeGreaterThanOrEqual(3);
    expect(topic?.caseGroups?.flatMap((group) => group.caseIds)).toEqual(
      expect.arrayContaining([
        "cn-gazette-case-thumb-legal-representative-publicity",
        "cn-database-case-certificate-return-shanghai-pan",
        "cn-gazette-case-zhenbang-apparent-representation-guarantee",
        "cn-database-case-false-seal-legal-representative-real-estate"
      ])
    );
  });

  it("loads topic-level case grouping for the ultra-vires and authority boundaries topic", async () => {
    const snapshot = await getPortalSnapshot();
    const topic = snapshot.topics.find((item) => item.id === "ultra-vires-and-authority-boundaries");

    expect(topic).toBeTruthy();
    expect(topic?.nameZh).toContain("公司越权");
    expect(topic?.nameZh).toContain("经营范围");
    expect(topic?.caseGroups?.length).toBeGreaterThanOrEqual(4);
    expect(topic?.caseGroups?.flatMap((group) => group.caseIds)).toEqual(
      expect.arrayContaining([
        "cn-gazette-case-zhenbang-apparent-representation-guarantee",
        "cn-gazette-case-zhongjiancai-ultra-vires-guarantee",
        "cn-reference-case-upstream-guarantee-no-resolution",
        "cn-guiding-case-10-board-resolution-review",
        "cn-database-case-board-resolution-charter-overreach",
        "cn-database-case-employee-supervisor-resolution-invalid",
        "cn-gazette-case-guixinyuan-business-scope-own-property-disposal",
        "cn-reference-case-limou-financing-lease-scope-registration",
        "cn-reference-case-spring-auto-establishment-registration",
        "cn-reference-case-hongzhi-authority-not-capacity-share-transfer",
        "cn-database-case-false-seal-legal-representative-real-estate",
        "cn-reference-case-nominal-legal-representative-name-seal-loan"
      ])
    );
  });

  it("loads topic-level case grouping for the corporate-veil-piercing topic", async () => {
    const snapshot = await getPortalSnapshot();
    const topic = snapshot.topics.find((item) => item.id === "corporate-veil-piercing");

    expect(topic).toBeTruthy();
    expect(topic?.caseGroups?.length).toBeGreaterThanOrEqual(5);
    expect(topic?.caseGroups?.flatMap((group) => group.caseIds)).toEqual(
      expect.arrayContaining([
        "cn-guiding-case-15-corporate-veil",
        "cn-gazette-case-xinda-tailai-affiliated-company-veil",
        "cn-gazette-case-ying-gaofeng-jiameide-one-person-veil",
        "cn-reference-case-jiachen-haima-burden-allocation-veil",
        "cn-reference-case-closure-operator-liquidation-liability",
        "cn-reference-case-meizhou-salt-baked-chicken-agency-veil",
        "cn-reference-case-luo-weikang-nike-affiliate-veil",
        "cn-reference-case-guangzhou-dashun-jiangmen-fengpin-weichang-veil",
        "cn-reference-case-guangzhou-construction-benefit-transfer-veil",
        "cn-reference-case-kunshan-shell-switching-horizontal-veil",
        "cn-reference-case-zibo-sichuang-glade-fushide-beisida-veil"
      ])
    );
  });

  it("loads topic-level case grouping for the shareholder inspection, voting, and dividend-rights topic", async () => {
    const snapshot = await getPortalSnapshot();
    const topic = snapshot.topics.find((item) => item.id === "shareholder-inspection-and-information-rights");

    expect(topic).toBeTruthy();
    expect(topic?.nameZh).toContain("表决权");
    expect(topic?.nameZh).toContain("分红权");
    expect(topic?.caseGroups?.length).toBeGreaterThanOrEqual(3);
    expect(topic?.caseGroups?.flatMap((group) => group.caseIds)).toEqual(
      expect.arrayContaining([
        "cn-gazette-case-shareholder-inspection-jiade",
        "cn-reference-case-han-dequan-original-vouchers-inspection",
        "cn-reference-case-jiao-jinzhu-shareholder-inspection",
        "cn-reference-case-zhang-zhiyuan-keluoen-inspection",
        "cn-reference-case-wang-zaozhuang-hotel-inspection",
        "cn-database-case-sun-beijing-tech-improper-purpose-inspection",
        "cn-reference-case-sun-fengxian-improper-purpose-inspection",
        "cn-reference-case-xiafeng-jiushe-books-not-vouchers",
        "cn-reference-case-jiangmou-real-estate-inspection-professionals",
        "cn-reference-case-chen-haidian-unnotified-agenda-resolution",
        "cn-reference-case-li-haidian-board-email-procedure",
        "cn-reference-case-ge-saidu-ratification-resolution",
        "cn-reference-case-jia-haidian-contribution-deadline-majority",
        "cn-reference-case-dalian-daxian-jincheng-resolution-validity",
        "cn-reference-case-chen-shandong-a-beijing-b-resolution",
        "cn-reference-case-zhao-qian-zaozhuang-resolution",
        "cn-reference-case-shanghai-monitor-temporary-meeting-legal-representative",
        "cn-gazette-case-hongri-kechuang-capital-increase-voting",
        "cn-gazette-case-forced-profit-distribution",
        "cn-reference-case-chu-profit-distribution",
        "cn-reference-case-former-shareholder-undistributed-profits-rizhao",
        "cn-reference-case-shanghai-unpaid-contribution-no-dividend-freeze",
        "cn-gazette-case-xu-minghong-profit-distribution-procedure",
        "cn-guiding-case-96-shareholder-status"
      ])
    );
  });

  it("loads topic-level case grouping for the shareholder-status-disputes topic", async () => {
    const snapshot = await getPortalSnapshot();
    const topic = snapshot.topics.find((item) => item.id === "shareholder-status-disputes");

    expect(topic).toBeTruthy();
    expect(topic?.caseGroups?.length).toBeGreaterThanOrEqual(4);
    expect(topic?.caseGroups?.flatMap((group) => group.caseIds)).toEqual(
      expect.arrayContaining([
        "cn-guiding-case-96-shareholder-status",
        "cn-gazette-case-beneficial-owner-zhang-jianzhong",
        "cn-gazette-case-cheng-junping-foreign-beneficial-owner-status",
        "cn-database-case-lv-gansu-investment-shareholder-status",
        "cn-gazette-case-kunming-oke-equity-security-status",
        "cn-reference-case-lei-zhaozhuang-gift-no-shareholder-status",
        "cn-reference-case-qinzhou-impersonated-employee-no-status",
        "cn-reference-case-wang-baohe-bank-shareholder-status"
      ])
    );
  });

  it("loads topic-level case grouping for the pre-emption and equity-transfer restrictions topic", async () => {
    const snapshot = await getPortalSnapshot();
    const topic = snapshot.topics.find((item) => item.id === "preemption-and-equity-transfer-restrictions");

    expect(topic).toBeTruthy();
    expect(topic?.nameZh).toContain("优先购买权");
    expect(topic?.nameZh).toContain("股权转让限制");
    expect(topic?.caseGroups?.length).toBeGreaterThanOrEqual(4);
    expect(topic?.caseGroups?.flatMap((group) => group.caseIds)).toEqual(
      expect.arrayContaining([
        "cn-gazette-case-preemption-zhongjing",
        "cn-gazette-case-xinaote-huarong-preemption-contract-validity",
        "cn-gazette-case-zhang-guiping-founder-transfer-restriction",
        "cn-guiding-case-96-shareholder-status",
        "cn-gazette-case-beneficial-owner-zhang-jianzhong",
        "cn-database-case-lv-gansu-investment-shareholder-status",
        "cn-database-case-transfer-agreement-shareholder-inspection",
        "cn-gazette-case-kunming-oke-equity-security-status",
        "cn-database-case-equity-security-nominee-vote"
      ])
    );
  });

  it("loads topic-level case grouping for the registered-capital topic", async () => {
    const snapshot = await getPortalSnapshot();
    const topic = snapshot.topics.find((item) => item.id === "registered-capital");

    expect(topic).toBeTruthy();
    expect(topic?.nameZh).toContain("出资纠纷");
    expect(topic?.caseGroups?.length).toBeGreaterThanOrEqual(4);
    expect(topic?.caseGroups?.flatMap((group) => group.caseIds)).toEqual(
      expect.arrayContaining([
        "cn-gazette-case-wang-qinjie-contribution-extension-creditor-protection",
        "cn-reference-case-linzi-malicious-extension-acceleration",
        "cn-gazette-case-contribution-deadline-resolution",
        "cn-reference-case-jimo-unpaid-contribution-liability",
        "cn-reference-case-zhao-liangchen-capital-withdrawal-offset",
        "cn-database-case-lu-cao-low-price-transfer-contribution",
        "cn-database-case-wen-sichuan-subscription-limitations",
        "cn-reference-case-shareholder-debt-setoff-contribution",
        "cn-reference-case-today-seeds-zero-price-transfer-reduction",
        "cn-gazette-case-dilutive-capital-increase",
        "cn-gazette-case-hongri-kechuang-capital-increase-voting",
        "cn-reference-case-wang-xu-change-to-ip-contribution",
        "cn-reference-case-yuehua-defective-capital-reduction",
        "cn-reference-case-zhejiang-reduction-not-direct-execution"
      ])
    );
  });

  it("loads topic-level case grouping for the joint-stock-share-issuance-and-transfer topic", async () => {
    const snapshot = await getPortalSnapshot();
    const topic = snapshot.topics.find((item) => item.id === "joint-stock-share-issuance-and-transfer");

    expect(topic).toBeTruthy();
    expect(topic?.nameZh).toContain("股票发行");
    expect(topic?.nameZh).toContain("转让");
    expect(topic?.caseGroups?.length).toBeGreaterThanOrEqual(4);
    expect(topic?.caseGroups?.flatMap((group) => group.caseIds)).toEqual(
      expect.arrayContaining([
        "cn-gazette-case-anji-unauthorized-stock-issuance",
        "cn-gazette-case-lanzhou-minbai-capital-reserve-shares",
        "cn-reference-case-vam-gaoci-neeq-invalid",
        "cn-database-case-listed-buyback-vam-nanjing",
        "cn-gazette-case-zhang-guiping-founder-transfer-restriction",
        "cn-gazette-case-listed-shareholding-shenyin",
        "cn-gazette-case-biaobang-anshan-bank-share-transfer"
      ])
    );
  });

  it("loads topic-level case grouping for the corporate-reorganization topic", async () => {
    const snapshot = await getPortalSnapshot();
    const topic = snapshot.topics.find((item) => item.id === "corporate-reorganization");

    expect(topic).toBeTruthy();
    expect(topic?.nameZh).toContain("重组");
    expect(topic?.nameZh).toContain("形态变动");
    expect(topic?.caseGroups?.length).toBeGreaterThanOrEqual(5);
    expect(topic?.caseGroups?.flatMap((group) => group.caseIds)).toEqual(
      expect.arrayContaining([
        "cn-gazette-case-icbc-shandong-xincheng-split-debt",
        "cn-reference-case-nanjing-xuanwuhu-split-vs-investment",
        "cn-reference-case-wu-jialun-split-registration-assistance",
        "cn-reference-case-zhengzhou-libao-split-tax-allocation",
        "cn-guiding-case-163-textile-substantive-consolidation",
        "cn-reference-case-spc-private-economy-reform-debt-stripping",
        "cn-gazette-case-tianyuan-listing-debt-transfer",
        "cn-reference-case-wang-jun-zaozhuang-bank-asset-acquisition-boundary",
        "cn-reference-case-li-xiuxiao-tiantuo-restructuring-debt",
        "cn-reference-case-pingyin-one-person-to-ordinary-llc",
        "cn-guiding-case-96-shareholder-status",
        "cn-database-case-fie-transition-governance"
      ])
    );
  });

  it("loads topic-level case grouping for the related-transaction-harm topic", async () => {
    const snapshot = await getPortalSnapshot();
    const topic = snapshot.topics.find((item) => item.id === "related-transaction-harm");

    expect(topic).toBeTruthy();
    expect(topic?.nameZh).toContain("关联交易");
    expect(topic?.nameZh).toContain("利益输送");
    expect(topic?.caseGroups?.length).toBeGreaterThanOrEqual(4);
    expect(topic?.caseGroups?.flatMap((group) => group.caseIds)).toEqual(
      expect.arrayContaining([
        "cn-database-case-related-transaction-gao-cheng",
        "cn-reference-case-zhengzhou-cable-overpriced-supplies",
        "cn-reference-case-xiang-zaozhuang-taxi-energy-supply",
        "cn-reference-case-actual-controller-overinterest-loan",
        "cn-reference-case-yiming-jinshengli-related-transaction-offset",
        "cn-typical-case-self-dealing-shanghai-lan",
        "cn-reference-case-kou-guo-henan-education-asset-sale",
        "cn-reference-case-fang-siwei-related-transaction-monitor",
        "cn-typical-case-related-transaction-shandong-yue",
        "cn-reference-case-shanghai-investment-bio-related-resolution"
      ])
    );
  });

  it("loads topic-level case grouping for the listed-governance topic", async () => {
    const snapshot = await getPortalSnapshot();
    const topic = snapshot.topics.find((item) => item.id === "listed-governance");

    expect(topic).toBeTruthy();
    expect(topic?.nameZh).toContain("上市公司治理");
    expect(topic?.caseGroups?.length).toBeGreaterThanOrEqual(4);
    expect(topic?.caseGroups?.flatMap((group) => group.caseIds)).toEqual(
      expect.arrayContaining([
        "cn-guiding-case-10-board-resolution-review",
        "cn-reference-case-dazhihui-derivative-recovery",
        "cn-reference-case-st-moden-fund-occupation-derivative",
        "cn-reference-case-taian-ret-fund-occupation-derivative",
        "cn-reference-case-st-lutong-fund-occupation-derivative",
        "cn-gazette-case-anji-unauthorized-stock-issuance",
        "cn-gazette-case-lanzhou-minbai-capital-reserve-shares",
        "cn-database-case-listed-buyback-vam-nanjing",
        "cn-reference-case-vam-gaoci-neeq-invalid",
        "cn-reference-case-vam-huyue-neeq-delisting",
        "cn-gazette-case-listed-shareholding-shenyin",
        "cn-gazette-case-tianyuan-listing-debt-transfer"
      ])
    );
  });

  it("loads topic-level case grouping for the state-owned-company-special-rules topic", async () => {
    const snapshot = await getPortalSnapshot();
    const topic = snapshot.topics.find((item) => item.id === "state-owned-company-special-rules");

    expect(topic).toBeTruthy();
    expect(topic?.nameZh).toContain("国家出资公司");
    expect(topic?.nameZh).toContain("国有股权");
    expect(topic?.caseGroups?.length).toBeGreaterThanOrEqual(4);
    expect(topic?.caseGroups?.flatMap((group) => group.caseIds)).toEqual(
      expect.arrayContaining([
        "cn-gazette-case-preemption-zhongjing",
        "cn-gazette-case-bafeite-state-owned-off-market-transfer-invalid",
        "cn-gazette-case-biaobang-anshan-bank-share-transfer",
        "cn-gazette-case-changcheng-jilin-gratuitous-transfer-creditor-protection",
        "cn-gazette-case-fengfeng-state-capital-loan-boundary"
      ])
    );
  });

  it("loads topic-level case grouping for the company-dissolution-and-compulsory-liquidation topic", async () => {
    const snapshot = await getPortalSnapshot();
    const topic = snapshot.topics.find((item) => item.id === "company-dissolution-and-compulsory-liquidation");

    expect(topic).toBeTruthy();
    expect(topic?.nameZh).toContain("解散");
    expect(topic?.caseGroups?.length).toBeGreaterThanOrEqual(4);
    expect(topic?.caseGroups?.flatMap((group) => group.caseIds)).toEqual(
      expect.arrayContaining([
        "cn-guiding-case-8-company-dissolution",
        "cn-typical-case-deadlock-dissolution-german-a",
        "cn-gazette-case-shifeng-fujun-deadlock-fault",
        "cn-gazette-case-huiguan-northeast-asia-oppression-dissolution",
        "cn-database-case-port-company-dissolution",
        "cn-gazette-case-jilin-financial-no-dissolution",
        "cn-guiding-case-9-liquidation-liability",
        "cn-reference-case-closure-operator-liquidation-liability",
        "cn-reference-case-camel-haixia-continuation-settlement-liquidation",
        "cn-reference-case-shengnuo-forced-liquidation-to-bankruptcy"
      ])
    );
  });
});
