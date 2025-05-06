import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";

Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com");
  await browser.pause(1000);
  console.log("Google page opened");
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`Searching for ${searchItem}`);
  let element =  $(`[name=q]`);
  await element.setValue(searchItem);
  await browser.keys("Enter");

});

Then(/^Click on the first searched result$/, async function () {
  let element = $(`<h3>`);
  await element.click();
});

Then(/^Url should contain (.*)$/, async function (expectedResult) {
  console.log(`>> expectedURL: ${expectedResult}`);
  await expect(browser.getUrl()).to.contain(expectedResult);

});
