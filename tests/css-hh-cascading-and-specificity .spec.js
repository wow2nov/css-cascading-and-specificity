//tests/[css-hh-cascading-and-specificity.spec.js]

// @ts-check
const { test, expect } = require("@playwright/test");
import path from "path";
test("exercise-1-test", async ({ page }) => {
  const currentPath = path.join(process.cwd(), "ex-1/index.html"); // change [Folder] to name of folder to test.

  const url = "file:///" + currentPath;
  await page.setViewportSize({
    width: 1280, //width browser of test
    height: 720, // height browser of test
  });
  await page.goto(url);
  expect(
    await page.screenshot({
      fullPage: true,
    })
  ).toMatchSnapshot({
    name: "css-hh-cascading-and-specificity.png",
    threshold: 0.5,
    maxDiffPixels: 100,
    maxDiffPixelRatio: 0.01,
  });
});
