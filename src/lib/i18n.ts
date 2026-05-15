export type Locale = "zh" | "en";

export function pickLocalized(locale: Locale, zh: string, en: string): string {
  return locale === "en" ? en : zh;
}

export function toLocalePath(locale: Locale, path: string): string {
  if (locale === "zh") {
    return path;
  }

  if (path === "/") {
    return "/en/";
  }

  return `/en${path}`;
}

export function getAlternatePath(locale: Locale, path: string): string {
  if (locale === "en") {
    return path.replace(/^\/en/, "") || "/";
  }

  return toLocalePath("en", path);
}
