import { BasePage } from "./basePageJW";
import { Builder, By, Capabilities, promise, until, WebDriver } from "selenium-webdriver";
import { onePlusPageObjects } from "./onePlusPageObjects";
function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
//This test filters the phones so none meet the criteria and then verifies the error message is the and takes a screenshot.
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const pageObject = new onePlusPageObjects(driver);
jest.setTimeout(20000);

describe("OnePlus Test", () => {
  beforeEach(async () => {
    await pageObject.navigate();
  });

  afterAll(async () => {
    await pageObject.driver.quit();
  });
const fs = require('fs');
  test("Testing phone filter results.", async () => {
   
    await pageObject.click(pageObject.store); 
    await pageObject.click(pageObject.phones);
    await pageObject.click(pageObject.nordSeries);
    await pageObject.click(pageObject.filter464);
    await sleep(1000);
    fs.writeFile(`${__dirname}/NothingFoundErrorPage.png`,
    await pageObject.driver.takeScreenshot(), "base64", 
    (e =>{
        if (e) console.log(e);
        else console.log("Nothing Found Error Message.")
    }));
    const elementExists = await driver.findElements(pageObject.nothiongFound);
    expect(elementExists.length).toBe(0);
    return elementExists.length === 0; 
    
   
  })});

