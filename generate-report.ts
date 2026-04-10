const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "reports",
  reportPath: "reports/html",
  displayDuration: true,
  openReportInBrowser: true,
  metadata: {
    browser: { name: "chromium" },
    device: "local",
    platform: { name: "macOS" }
  }
});
