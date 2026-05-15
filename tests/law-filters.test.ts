import { describe, expect, it } from "vitest";

import { filterLawRecords, getLawVersionChain } from "@/lib/law-filters";
import { getPortalSnapshot } from "@/lib/portal-data";

describe("law filtering", () => {
  it("finds registered-capital materials across legislative and regulatory layers", async () => {
    const snapshot = await getPortalSnapshot();
    const filtered = filterLawRecords(snapshot.laws, {
      topics: ["registered-capital"]
    });

    expect(filtered.map((item) => item.id)).toEqual(
      expect.arrayContaining([
        "cn-company-law-2023",
        "cn-market-entity-registration-regulations-2021",
        "cn-market-entity-registration-rules-2022",
        "cn-state-council-registered-capital-rules-2024",
        "cn-samr-company-registration-implementation-measures-2024"
      ])
    );
  });

  it("finds partnership-enterprise materials across law and registration layers", async () => {
    const snapshot = await getPortalSnapshot();
    const filtered = filterLawRecords(snapshot.laws, {
      topics: ["partnership-enterprises"]
    });

    expect(filtered.map((item) => item.id)).toEqual(
      expect.arrayContaining([
        "cn-partnership-enterprise-law-2006",
        "cn-partnership-registration-measures-2019",
        "cn-foreign-partnership-establishment-measures-2009"
      ])
    );
  });

  it("finds local business-environment and registration materials through the topic filter", async () => {
    const snapshot = await getPortalSnapshot();
    const filtered = filterLawRecords(snapshot.laws, {
      topics: ["business-environment"]
    });

    expect(filtered.map((item) => item.id)).toEqual(
      expect.arrayContaining([
        "cn-market-entity-registration-regulations-2021",
        "cn-market-entity-registration-rules-2022",
        "cn-enterprise-name-registration-regulations-2020",
        "cn-enterprise-name-registration-implementation-measures-2023",
        "cn-registration-archives-measures-2025",
        "cn-forced-company-deregistration-measures-2025",
        "cn-registration-application-agency-measures-2025",
        "sz-business-environment-regulations-2020",
        "bj-business-environment-regulations-2024",
        "sz-commercial-registration-rules-2020",
        "sh-business-entity-domicile-measures-2024"
      ])
    );
  });

  it("exposes version chains for major statutes with historical editions", async () => {
    const snapshot = await getPortalSnapshot();
    const companyLawVersionChain = getLawVersionChain(snapshot.laws, "cn-company-law-2023");
    const securitiesLawVersionChain = getLawVersionChain(snapshot.laws, "cn-securities-law-2019");
    const partnershipLawVersionChain = getLawVersionChain(snapshot.laws, "cn-partnership-enterprise-law-2006");
    const partnershipRegistrationVersionChain = getLawVersionChain(
      snapshot.laws,
      "cn-partnership-registration-measures-2019"
    );
    const shDomicileMeasuresVersionChain = getLawVersionChain(
      snapshot.laws,
      "sh-business-entity-domicile-measures-2024"
    );

    expect(companyLawVersionChain.map((item) => item.id)).toEqual([
      "cn-company-law-2023",
      "cn-company-law-2018",
      "cn-company-law-2013",
      "cn-company-law-2005",
      "cn-company-law-2004",
      "cn-company-law-1999",
      "cn-company-law-1993"
    ]);

    expect(securitiesLawVersionChain.map((item) => item.id)).toEqual([
      "cn-securities-law-2019",
      "cn-securities-law-2014",
      "cn-securities-law-2013",
      "cn-securities-law-2005",
      "cn-securities-law-2004",
      "cn-securities-law-1998"
    ]);

    expect(partnershipLawVersionChain.map((item) => item.id)).toEqual([
      "cn-partnership-enterprise-law-2006",
      "cn-partnership-enterprise-law-1997"
    ]);

    expect(partnershipRegistrationVersionChain.map((item) => item.id)).toEqual([
      "cn-partnership-registration-measures-2019",
      "cn-partnership-registration-measures-2014",
      "cn-partnership-registration-measures-2007",
      "cn-partnership-registration-measures-1997"
    ]);

    expect(shDomicileMeasuresVersionChain.map((item) => item.id)).toEqual([
      "sh-business-entity-domicile-measures-2024",
      "sh-enterprise-domicile-measures-2015"
    ]);
  });
});
