import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

import {
  articleLinkSchema,
  caseSchema,
  jurisdictionConfigSchema,
  lawSchema,
  siteCopySchema,
  topicSchema
} from "@/lib/content-schemas";

const law = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/law" }),
  schema: lawSchema
});

const caseCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/case" }),
  schema: caseSchema
});

const articleLink = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/articleLink" }),
  schema: articleLinkSchema
});

const topic = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/topic" }),
  schema: topicSchema
});

const jurisdictionConfig = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/jurisdictionConfig" }),
  schema: jurisdictionConfigSchema
});

const siteCopy = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/siteCopy" }),
  schema: siteCopySchema
});

export const collections = {
  law,
  case: caseCollection,
  articleLink,
  topic,
  jurisdictionConfig,
  siteCopy
};
