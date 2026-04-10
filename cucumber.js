module.exports = {
  default: {
    require: [
      "src/fixtures/world.ts",
      "src/hooks/*.ts",
      "src/steps/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress",
      "json:reports/cucumber-report.json",
      "rerun:@rerun.txt"
    ],
    paths: ["features/**/*.feature"],
    publishQuiet: true,
    timeout: 60000
  },

  rerun: {
    require: [
      "src/fixtures/world.ts",
      "src/hooks/*.ts",
      "src/steps/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: ["progress"],
    paths: ["@rerun.txt"],
  }
};