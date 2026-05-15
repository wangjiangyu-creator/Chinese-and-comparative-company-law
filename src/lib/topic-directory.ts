import type { ResolvedTopic } from "@/lib/portal-data";

type TopicGroupConfig = {
  id: string;
  titleZh: string;
  titleEn: string;
  noteZh: string;
  noteEn: string;
  topicIds: string[];
};

const featuredTopicIds = [
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
] as const;

const groupConfigs: TopicGroupConfig[] = [
  {
    id: "china-core",
    titleZh: "中国主库专题",
    titleEn: "China-core topics",
    noteZh: "优先串联中国法律法规主库、最高法院材料和公司登记规则，服务于直接检索和研究写作。",
    noteEn: "Prioritizes China-law materials, SPC materials, and company-registration rules for direct research use.",
    topicIds: [
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
    ]
  },
  {
    id: "comparative-governance",
    titleZh: "比较法与上市治理专题",
    titleEn: "Comparative and listed-governance topics",
    noteZh: "把中国上市公司治理规则与香港、新加坡的治理和披露结构放在同一检索路径下。",
    noteEn: "Places China listed-company governance alongside Hong Kong and Singapore governance and disclosure structures.",
    topicIds: ["listed-governance"]
  }
];

function mapTopicsById(topics: ResolvedTopic[]) {
  return new Map(topics.map((topic) => [topic.id, topic]));
}

function resolveTopics(topicMap: Map<string, ResolvedTopic>, topicIds: readonly string[]) {
  return topicIds
    .map((id) => topicMap.get(id))
    .filter((topic): topic is ResolvedTopic => Boolean(topic));
}

export function getTopicDirectory(topics: ResolvedTopic[]) {
  const topicMap = mapTopicsById(topics);
  const featuredTopics = resolveTopics(topicMap, featuredTopicIds);
  const groupedIds = new Set(groupConfigs.flatMap((group) => group.topicIds));
  const groups = groupConfigs
    .map((group) => ({
      ...group,
      topics: resolveTopics(topicMap, group.topicIds)
    }))
    .filter((group) => group.topics.length > 0);

  const additionalTopics = topics
    .filter((topic) => !groupedIds.has(topic.id))
    .sort((left, right) => left.nameZh.localeCompare(right.nameZh, "zh-CN"));

  if (additionalTopics.length > 0) {
    groups.push({
      id: "additional-topics",
      titleZh: "补充专题",
      titleEn: "Additional topics",
      noteZh: "随着主库扩展继续补入的专题页。",
      noteEn: "Additional topic pages added as the corpus expands.",
      topicIds: additionalTopics.map((topic) => topic.id),
      topics: additionalTopics
    });
  }

  return {
    featuredTopics,
    groups
  };
}
