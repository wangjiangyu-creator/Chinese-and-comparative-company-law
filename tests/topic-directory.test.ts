import { describe, expect, it } from "vitest";

import { getTopicDirectory } from "@/lib/topic-directory";
import { getPortalSnapshot } from "@/lib/portal-data";

describe("topic directory", () => {
  it("surfaces featured topics in a stable research-first order", async () => {
    const snapshot = await getPortalSnapshot();
    const directory = getTopicDirectory(snapshot.topics);

    expect(directory.featuredTopics.map((item) => item.id)).toEqual([
      "corporate-social-responsibility",
      "company-registration-and-business-environment",
      "legal-representative-and-seal-control",
      "ultra-vires-and-authority-boundaries",
      "registered-capital",
      "corporate-reorganization",
      "state-owned-company-special-rules",
      "actual-controller-tunneling",
      "related-transaction-harm",
      "directors-officer-loyalty-and-duties",
      "shareholder-inspection-and-information-rights",
      "shareholder-status-disputes",
      "preemption-and-equity-transfer-restrictions",
      "joint-stock-share-issuance-and-transfer",
      "vam-disputes",
      "company-dissolution-and-compulsory-liquidation",
      "corporate-veil-piercing",
      "listed-governance"
    ]);
  });

  it("groups topic pages into China-core and comparative clusters", async () => {
    const snapshot = await getPortalSnapshot();
    const directory = getTopicDirectory(snapshot.topics);

    expect(directory.groups).toHaveLength(2);
    expect(directory.groups[0]?.topics.map((item) => item.id)).toEqual([
      "corporate-social-responsibility",
      "company-registration-and-business-environment",
      "legal-representative-and-seal-control",
      "ultra-vires-and-authority-boundaries",
      "registered-capital",
      "corporate-reorganization",
      "state-owned-company-special-rules",
      "actual-controller-tunneling",
      "related-transaction-harm",
      "directors-officer-loyalty-and-duties",
      "shareholder-inspection-and-information-rights",
      "shareholder-status-disputes",
      "preemption-and-equity-transfer-restrictions",
      "joint-stock-share-issuance-and-transfer",
      "vam-disputes",
      "company-dissolution-and-compulsory-liquidation",
      "corporate-veil-piercing",
      "partnership-enterprises"
    ]);
    expect(directory.groups[1]?.topics.map((item) => item.id)).toEqual(["listed-governance"]);
  });
});
