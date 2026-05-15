import { articleSourceKinds, topicIds } from "@/lib/content-schemas";
import type { ResolvedArticleLink } from "@/lib/portal-data";

export type ArticleDirectorySection = {
  topicId: string;
  items: ResolvedArticleLink[];
};

export type ArticleDirectory = {
  sections: ArticleDirectorySection[];
  uncategorized: ResolvedArticleLink[];
  publishers: string[];
  sourceKinds: string[];
};

const articleTopicAliases: Record<string, string> = {
  "director-abuse": "directors-officer-loyalty-and-duties",
  "director-liability-litigation": "directors-officer-loyalty-and-duties"
};

const normalizedTopicOrder = [...new Set(topicIds.map((topicId) => articleTopicAliases[topicId] ?? topicId))];

function normalizeArticleTopic(topicId: string): string {
  return articleTopicAliases[topicId] ?? topicId;
}

function sortArticles(items: ResolvedArticleLink[]): ResolvedArticleLink[] {
  return [...items].sort((left, right) => {
    if (left.year !== right.year) {
      return right.year - left.year;
    }

    return left.titleZh.localeCompare(right.titleZh);
  });
}

export function getPrimaryArticleTopic(article: ResolvedArticleLink): string | undefined {
  return article.topics
    .map((topic) => normalizeArticleTopic(topic))
    .find((topic) => normalizedTopicOrder.includes(topic));
}

export function getArticleSearchText(article: ResolvedArticleLink): string {
  return [
    article.titleZh,
    article.titleEn,
    article.publisher,
    article.authors.join(" "),
    article.abstractZh,
    article.abstractEn,
    ...article.topics
  ]
    .join(" ")
    .toLowerCase();
}

export function getArticleDirectory(articleLinks: ResolvedArticleLink[]): ArticleDirectory {
  const groupedByTopic = normalizedTopicOrder.reduce(
    (acc, topicId) => {
      acc[topicId] = [];
      return acc;
    },
    {} as Record<string, ResolvedArticleLink[]>
  );
  const uncategorized: ResolvedArticleLink[] = [];

  for (const article of articleLinks) {
    const primaryTopic = getPrimaryArticleTopic(article);

    if (primaryTopic) {
      groupedByTopic[primaryTopic].push(article);
      continue;
    }

    uncategorized.push(article);
  }

  const sections = normalizedTopicOrder
    .map((topicId) => ({
      topicId,
      items: sortArticles(groupedByTopic[topicId])
    }))
    .filter((section) => section.items.length > 0);

  const publishers = [...new Set(articleLinks.map((article) => article.publisher))].sort((left, right) =>
    left.localeCompare(right)
  );

  const sourceKinds = articleSourceKinds.filter((kind) =>
    articleLinks.some((article) => article.sourceKind === kind)
  );

  return {
    sections,
    uncategorized: sortArticles(uncategorized),
    publishers,
    sourceKinds
  };
}
