import { fileURLToPath } from "node:url";

import { defineConfig } from "astro/config";

const githubRepository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isProjectPagesBuild =
  process.env.GITHUB_ACTIONS === "true" &&
  Boolean(githubRepository) &&
  !githubRepository?.endsWith(".github.io");

export default defineConfig({
  site: process.env.SITE_URL ?? "https://pages.github.io",
  base: process.env.BASE_PATH ?? (isProjectPagesBuild ? `/${githubRepository}` : undefined),
  server: {
    host: true
  },
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    }
  }
});
