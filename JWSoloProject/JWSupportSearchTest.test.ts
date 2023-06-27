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

class OnePlus extends BasePage {
  url: string = "https://www.oneplus.com/us";
}

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
  test("Support page search and list currency.", async () => {
   
    await pageObject.click(pageObject.supportLink); 
    sleep(2000);
    
    await driver.findElement(pageObject.supportSearch).sendKeys("OnePlus 11\n");
    sleep(5000);
   
    await sleep(1000);
    fs.writeFile(`${__dirname}/Support.png`,
    await pageObject.driver.takeScreenshot(), "base64", 
    (e =>{
        if (e) console.log(e);
        else console.log("Nothing Found Error Message.")
    }));
    const elementExists = await driver.findElements(pageObject.nothiongFound);
    expect(elementExists.length).toBe(0);
    return elementExists.length === 0; 
    
   
  })});

