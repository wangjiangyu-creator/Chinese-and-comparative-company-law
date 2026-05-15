import type { ResolvedLaw } from "@/lib/portal-data";

export function getTextPresentationMode(
  law: ResolvedLaw
): "parallel" | "source-only" | "metadata-only" {
  if (law.resolvedTexts.zh && law.resolvedTexts.en) {
    return "parallel";
  }

  if (law.resolvedTexts.zh || law.resolvedTexts.en) {
    return "source-only";
  }

  return "metadata-only";
}
