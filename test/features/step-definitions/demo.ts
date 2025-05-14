import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";

Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com");
  await browser.pause(1000);
  console.log("Google page opened");
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`Searching for ${searchItem}`);
  let element = $(`[name=q]`);
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

Given(/^A web page is opened$/, async function () {
  await browser.url("inputs");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

When(/^Perform web interations$/, async function () {
  /**
   * 1. input box
   * Actions:
   * 1. Type into input box
   * 2. Clear the field and type or just add value
   * 3. Click and type
   * 4. Slow typiing
   */

  let num = 12345;
  let strNum = num.toString();
  let ele = await $(`[type="number"]`);
  // await ele.click();
  // await ele.scrollIntoView();
  await ele.setValue(strNum);
  await ele.clearValue();
  await browser.pause(3000);
  await ele.click();

  for (let i = 0; i < strNum.length; i++) {
    let charStr = strNum.charAt(i);
    await browser.keys(charStr);
  }
  await browser.debug();
});
