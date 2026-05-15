import { describe, expect, it } from "vitest";

import { getPortalSnapshot } from "@/lib/portal-data";
import { getTextPresentationMode } from "@/lib/presentation";

describe("text presentation", () => {
  it("uses parallel display only when a record has both Chinese and English text bodies", async () => {
    const snapshot = await getPortalSnapshot();
    const securitiesLaw = snapshot.laws.find(
      (item) => item.id === "cn-securities-law-2019"
    );
    const companyLaw = snapshot.laws.find((item) => item.id === "cn-company-law-2023");
    const sseRules = snapshot.laws.find(
      (item) => item.id === "cn-sse-stock-listing-rules-2025"
    );

    expect(securitiesLaw).toBeDefined();
    expect(companyLaw).toBeDefined();
    expect(sseRules).toBeDefined();

    expect(getTextPresentationMode(securitiesLaw!)).toBe("parallel");
    expect(getTextPresentationMode(companyLaw!)).toBe("source-only");
    expect(getTextPresentationMode(sseRules!)).toBe("metadata-only");
  });
});
