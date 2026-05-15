import { describe, expect, it } from "vitest";

import { getLawCoverageChecklist } from "@/lib/law-coverage";
import { getPortalSnapshot } from "@/lib/portal-data";

describe("law coverage checklist", () => {
  it("tracks registration and CSRC rule families with gap metadata", async () => {
    const snapshot = await getPortalSnapshot();
    const checklist = getLawCoverageChecklist(snapshot.laws);

    expect(checklist.sections.map((section) => section.id)).toEqual(
      expect.arrayContaining([
        "national-laws",
        "administrative-regulations",
        "judicial-materials",
        "departmental-rules",
        "local-regulations"
      ])
    );

    const registrationFamily = checklist.sections
      .flatMap((section) => section.items)
      .find((item) => item.id === "company-registration-regulations");
    const governanceFamily = checklist.sections
      .flatMap((section) => section.items)
      .find((item) => item.id === "listed-company-governance-code");

    expect(registrationFamily).toBeTruthy();
    expect(registrationFamily?.expectedLawIds).toEqual(
      expect.arrayContaining([
        "cn-company-registration-regulations-1994",
        "cn-company-registration-regulations-2014",
        "cn-company-registration-regulations-2016"
      ])
    );
    expect(registrationFamily?.missingLawIds).toEqual([]);
    expect(governanceFamily).toBeTruthy();
    expect(governanceFamily?.presentLawIds).toEqual(
      expect.arrayContaining([
        "cn-csrc-listed-company-governance-code-2002",
        "cn-csrc-listed-company-governance-code-2018",
        "cn-csrc-listed-company-governance-code-2025"
      ])
    );
  });
});
