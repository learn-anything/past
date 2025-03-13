import { defineConfig } from "vitepress"
import { generateSidebar } from "vitepress-sidebar"

export default defineConfig({
  title: "Learn Anything Docs",
  srcExclude: ["data/**", "brand/**", "readme.md"],
  // ignoreDeadLinks: true,
  description:
    "Organize world's knowledge, explore connections and curate learning paths",
  cleanUrls: true,
  metaChunk: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],

    sidebar: generateSidebar({
      documentRootPath: "./",
      excludeFolders: ["data", "brand"],
      excludeFiles: ["readme.md"],
      useTitleFromFileHeading: true,
      rootGroupText: "",
      useTitleFromFrontmatter: true,
      convertSameNameSubFileToGroupIndexPage: true,
      folderLinkNotIncludesFileName: true,
    }),

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/learn-anything/docs",
      },
    ],

    search: {
      provider: "local",
    },
  },
})
