// Reference contract only. The package does NOT exist yet.
// Codex should refine this API after the V2 architecture gate.
// import { defineVisualDirector } from "@starbots/visual-director/config";

export const exampleVisualDirectorConfig = {
  schemaVersion: "1",
  project: { name: "starbots-web", root: "." },
  preset: "starbots-web",
  designTokensPath: "./design/tokens.json",
  componentRegistryPath: "./design/components.json",
  pageContractsGlob: "./design/contracts/*.json",
  themes: ["dark", "light"],
  defaultTheme: "dark",
  viewports: [
    { name: "mobile-small", width: 360, height: 780 },
    { name: "mobile", width: 390, height: 844 },
    { name: "tablet", width: 768, height: 1024 },
    { name: "desktop", width: 1440, height: 900 },
  ],
  browser: { baseURL: "http://localhost:3000", allowHosts: ["localhost", "127.0.0.1"], maxPages: 12 },
  rules: { mode: "observe", exceptionsPath: "./design/exceptions.json" },
  snapshots: { approvedDir: "./visual-baselines", humanApprovalRequired: true },
  reports: { dir: "./.visual-director/reports", formats: ["json", "markdown", "html"] },
  ai: { enabled: false, uploadScreenshots: false },
} as const;
