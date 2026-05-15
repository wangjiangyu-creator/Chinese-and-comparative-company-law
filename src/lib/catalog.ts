import type { PortalSnapshot, ResolvedLaw } from "@/lib/portal-data";

export function getPortalStats(snapshot: PortalSnapshot) {
  const chinaLaws = snapshot.laws.filter((law) => law.jurisdiction === "cn");
  const chinaCases = snapshot.cases.filter((item) => item.jurisdiction === "cn");
  const comparativeLaws = snapshot.laws.filter((law) => law.jurisdiction !== "cn");

  return {
    totalLaws: snapshot.laws.length,
    chinaLaws: chinaLaws.length,
    chinaCases: chinaCases.length,
    articleLinks: snapshot.articleLinks.length,
    comparativeLaws: comparativeLaws.length
  };
}

export function getLawFacets(laws: ResolvedLaw[]) {
  const unique = <T>(values: T[]) => [...new Set(values)].sort();

  return {
    authorities: unique(laws.map((law) => law.authorityLevel)),
    issuingBodies: unique(laws.map((law) => law.issuingBodyZh)),
    jurisdictions: unique(laws.map((law) => law.jurisdiction)),
    statuses: unique(laws.map((law) => law.status)),
    topics: unique(laws.flatMap((law) => law.topics))
  };
}

export function findRelatedCases(snapshot: PortalSnapshot, law: ResolvedLaw) {
  const ids = new Set(law.relatedCaseIds);
  return snapshot.cases.filter((item) => ids.has(item.id));
}

export function findRelatedArticles(snapshot: PortalSnapshot, law: ResolvedLaw) {
  const ids = new Set(law.relatedArticleIds);
  return snapshot.articleLinks.filter((item) => ids.has(item.id));
}
