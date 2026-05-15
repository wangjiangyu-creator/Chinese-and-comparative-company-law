export type Locale = "zh" | "en";

export function pickLocalized(locale: Locale, zh: string, en: string): string {
  return locale === "en" ? en : zh;
}

function withBase(path: string): string {
  const base = import.meta.env.BASE_URL ?? "/";

  if (base === "/") {
    return path;
  }

  return `${base.replace(/\/$/, "")}${path}`;
}

export function toLocalePath(locale: Locale, path: string): string {
  if (locale === "zh") {
    return withBase(path);
  }

  if (path === "/") {
    return withBase("/en/");
  }

  return withBase(`/en${path}`);
}

export function getAlternatePath(locale: Locale, path: string): string {
  if (locale === "en") {
    return withBase(path.replace(/^\/en/, "") || "/");
  }

  return toLocalePath("en", path);
}
