import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";
import GithubActionsReporter from "vitest-github-actions-reporter";


export default defineConfig({
  plugins: [
    tsconfigPaths()
  ],
  test: {
    reporters: process.env.GITHUB_ACTIONS
      ? ["verbose", new GithubActionsReporter()]
      : "default",
    resolveSnapshotPath: (testPath, snapExtension) =>
      testPath.startsWith(`${process.cwd()}/tests/`)
        ? testPath.replace("/tests/", "/tests/__snapshots__/").replace(/\.ts$/, snapExtension)
        : testPath.replace(/\.ts$/, snapExtension)
  }
});
