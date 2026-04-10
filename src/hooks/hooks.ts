import { Before, After, AfterStep, Status } from '@cucumber/cucumber';
import { CustomWorld } from '../fixtures/world';
import fs from 'fs';

Before(async function (this: CustomWorld) {
  await this.launchBrowser();
});

After(async function (this: CustomWorld) {
  await this.closeBrowser();

  if (this.videoPath && fs.existsSync(this.videoPath)) {
    const video = fs.readFileSync(this.videoPath);
    await this.attach(video, 'video/webm');
  }
});

After(async function (this: CustomWorld) {
  await this.closeBrowser();
});

  AfterStep( async function ({result}) {
    // This hook will be executed after all steps, and take a screenshot on step failure
    if (result.status === Status.PASSED) {
      const buffer = await this.page.screenshot();
      await this.page.screenshot({ path: 'screenshots/screenshot1.png' });
      this.attach(buffer.toString('base64'), 'base64:image/png');
      console.log("Screenshot logged")

    }
  });