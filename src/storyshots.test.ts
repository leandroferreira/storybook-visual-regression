import initStoryShots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";

initStoryShots({
  suite: "Visual Regression",
  test: imageSnapshot({
    storybookUrl: `file://${require("path").resolve("./storybook-static")}`
  })
});
