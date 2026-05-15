import { describe, expect, it } from "vitest";

import {
  getBackupOfficialLawSource,
  getChinaLawDirectory,
  getEnglishLawSource,
  getPrimaryLawSource
} from "@/lib/law-directory";
import { getPortalSnapshot } from "@/lib/portal-data";

describe("china law directory", () => {
  it("pins the 2023 Company Law to the top of the national-law section", async () => {
    const snapshot = await getPortalSnapshot();
    const directory = getChinaLawDirectory(snapshot.laws);

    expect(directory.nationalLaws[0]?.id).toBe("cn-company-law-2023");
    expect(directory.nationalLaws.map((law) => law.id)).toEqual(
      expect.arrayContaining([
        "cn-company-law-2023",
        "cn-securities-law-2019",
        "cn-civil-code-2020-legal-person"
      ])
    );
  });

  it("returns an official source for every China law record", async () => {
    const snapshot = await getPortalSnapshot();
    const directory = getChinaLawDirectory(snapshot.laws);

    expect(directory.chinaLaws.every((law) => Boolean(getPrimaryLawSource(law)))).toBe(true);
    expect(getPrimaryLawSource(directory.nationalLaws[0])?.label).toBe("Official Chinese");
  });

  it("prefers official or reference English links when a law record has an English source", async () => {
    const snapshot = await getPortalSnapshot();
    const directory = getChinaLawDirectory(snapshot.laws);
    const companyLaw1993 = directory.chinaLaws.find((law) => law.id === "cn-company-law-1993");
    const companyLaw2018 = directory.chinaLaws.find((law) => law.id === "cn-company-law-2018");
    const companyLaw2023 = directory.chinaLaws.find((law) => law.id === "cn-company-law-2023");
    const partnershipLaw2006 = directory.chinaLaws.find((law) => law.id === "cn-partnership-enterprise-law-2006");
    const securitiesLaw2005 = directory.chinaLaws.find((law) => law.id === "cn-securities-law-2005");

    expect(companyLaw1993).toBeTruthy();
    expect(getEnglishLawSource(companyLaw1993!)).toBeTruthy();
    expect(getEnglishLawSource(companyLaw1993!)?.label).toBe("Public English translation");
    expect(companyLaw2018).toBeTruthy();
    expect(getEnglishLawSource(companyLaw2018!)).toBeTruthy();
    expect(getEnglishLawSource(companyLaw2018!)?.label).toBe("Public English translation");
    expect(companyLaw2023).toBeTruthy();
    expect(getEnglishLawSource(companyLaw2023!)?.label).toBe("Public English translation");
    expect(getEnglishLawSource(companyLaw2023!)?.url).toBe(
      "https://www.hkexnews.hk/listedco/listconews/sehk/2024/1107/11432942/2024110700049_c.pdf"
    );
    expect(partnershipLaw2006).toBeTruthy();
    expect(getEnglishLawSource(partnershipLaw2006!)).toBeTruthy();
    expect(getEnglishLawSource(partnershipLaw2006!)?.label).toBe("Official English");
    expect(securitiesLaw2005).toBeTruthy();
    expect(getEnglishLawSource(securitiesLaw2005!)).toBeTruthy();
    expect(getEnglishLawSource(securitiesLaw2005!)?.label).toBe("Official English (reference)");
    expect(companyLaw2023!.sources.some((source) => source.url.includes("hicom-asia.com"))).toBe(false);
    expect(
      companyLaw2023!.sources.filter((source) =>
        ["Public English translation", "Public English translation (reference)"].includes(source.label)
      ).length
    ).toBeGreaterThanOrEqual(2);
  });

  it("populates the local-regulation layer with current and historical local materials", async () => {
    const snapshot = await getPortalSnapshot();
    const directory = getChinaLawDirectory(snapshot.laws);

    expect(directory.localRegulations.map((law) => law.id)).toEqual(
      expect.arrayContaining([
        "sz-business-environment-regulations-2020",
        "bj-business-environment-regulations-2024",
        "sz-commercial-registration-rules-2020",
        "sh-business-entity-domicile-measures-2024",
        "sz-joint-stock-company-regulations-1993",
        "sz-limited-liability-company-regulations-1997"
      ])
    );
  });

  it("refines judicial-policy layers and exposes backup official sources", async () => {
    const snapshot = await getPortalSnapshot();
    const directory = getChinaLawDirectory(snapshot.laws);
    const companyLaw2023 = directory.chinaLaws.find((law) => law.id === "cn-company-law-2023");

    expect(directory.spcJudicialPolicies.map((law) => law.id)).toEqual(
      expect.arrayContaining([
        "cn-spc-compulsory-liquidation-minutes-2009",
        "cn-national-civil-commercial-trial-minutes-2019",
        "cn-spc-company-law-unified-draft-2025"
      ])
    );
    expect(directory.localHighCourtGuidance.map((law) => law.id)).toEqual(
      expect.arrayContaining([
        "bj-high-court-securities-dispute-opinion-2019",
        "bj-high-court-bankruptcy-fast-track-opinion-2018",
        "bj-high-court-bankruptcy-procedure-rules-2013",
        "sh-high-court-bankruptcy-guideline-2018",
        "gd-high-court-zombie-enterprise-guideline-2019",
        "gd-high-court-bankruptcy-development-opinion-2023"
      ])
    );
    expect(directory.localHighCourtReports.map((law) => law.id)).toEqual(
      expect.arrayContaining([
        "sh-high-court-financial-commercial-white-paper-2020",
        "js-high-court-company-disputes-report-2017",
        "gd-high-court-securities-white-paper-2025"
      ])
    );
    expect(companyLaw2023).toBeTruthy();
    expect(getBackupOfficialLawSource(companyLaw2023!)?.official).toBe(true);
    expect(getBackupOfficialLawSource(companyLaw2023!)?.url).not.toBe(
      getPrimaryLawSource(companyLaw2023!)?.url
    );
  });
});
