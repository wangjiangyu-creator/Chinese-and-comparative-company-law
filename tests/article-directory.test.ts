import { describe, expect, it } from "vitest";

import { getArticleDirectory } from "@/lib/article-directory";
import { getPortalSnapshot } from "@/lib/portal-data";

describe("article directory", () => {
  it("loads an expanded practical-commentary corpus with Chinese and international firms", async () => {
    const snapshot = await getPortalSnapshot();

    expect(snapshot.articleLinks.length).toBeGreaterThanOrEqual(80);
    expect(snapshot.articleLinks.map((item) => item.id)).toEqual(
      expect.arrayContaining([
        "article-junhe-dso-compliance-risks",
        "article-junhe-foreign-invested-company-law-issues",
        "article-haiwen-share-transfer-subscription",
        "article-haiwen-capital-contribution-liability",
        "article-deheng-supervisory-mechanism-choice",
        "article-allbright-shareholder-liability-overview",
        "article-allbright-data-asset-contribution",
        "article-fangda-investment-financing-perspective",
        "article-fangda-vam-company-law-perspective"
      ])
    );
  });

  it("derives topic sections and filter options for the articles index", async () => {
    const snapshot = await getPortalSnapshot();
    const directory = getArticleDirectory(snapshot.articleLinks);

    expect(directory.sections.map((section) => section.topicId)).toContain(
      "directors-officer-loyalty-and-duties"
    );
    expect(directory.sections.map((section) => section.topicId)).not.toContain("director-liability-litigation");
    expect(directory.sections.find((section) => section.topicId === "registered-capital")?.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: "article-haiwen-capital-contribution-liability" }),
        expect.objectContaining({ id: "article-allbright-contribution-in-place" }),
        expect.objectContaining({ id: "article-deheng-capital-system-wealth-management" })
      ])
    );
    expect(directory.publishers).toEqual(
      expect.arrayContaining([
        "JunHe",
        "Haiwen & Partners",
        "DeHeng Law Offices",
        "AllBright Law Offices",
        "Fangda Partners"
      ])
    );
    expect(directory.sourceKinds).toEqual(
      expect.arrayContaining(["law-firm", "scholar", "publisher", "research-platform"])
    );
  });
});
