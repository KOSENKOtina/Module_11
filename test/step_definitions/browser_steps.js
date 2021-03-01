const { When, setDefaultTimeout } = require("cucumber");
const { browser } = require("protractor");
const { expect } = require("chai");

setDefaultTimeout(15000);

When("I open {string}", async (link) => {
  await browser.get(`https://${link}`);
});

When("Page title should be {string}", async (title) => {
  const actualTitle = await browser.getTitle();
  expect(actualTitle).to.equal(title);
});

When("I wait {int} secs", async (timeout) => {
  await browser.sleep(timeout * 1000);
});

When("I click on nav item with the text Вакансії", async () => {
  await $('[href="/vacancies"]').click();
});

When("I am taken to {string}", async (link) => {
  const currentLink = await browser.getCurrentUrl();
  expect(currentLink).to.contain(link);
});

When(
  "{string} should be present in the header on {int} place",
  async (itemName, nth) => {
    const currentElementText = await $(`li.epam:nth-child(${nth})`).getText();
    expect(currentElementText).to.equal(itemName);
  }
);
