import { BasePage } from "../../qrpt11Group1Project/basePageJW";
import { Builder, By, Capabilities, promise, until, WebDriver } from "selenium-webdriver";
import { onePlusPageObjects } from "./onePlusPageObjects";

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
//This tests signing in with invalid credentials and then verifies that the error message is displayed.
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
  
test("Invalid credentials signin.", async () => {
   
    await pageObject.click(pageObject.accntBtn); 
    
    await pageObject.click(pageObject.sgninEmail);
    await driver.findElement(pageObject.sgninEmail).sendKeys("tester@test.com");
    await pageObject.click(pageObject.sgninPsswrd);
    await driver.findElement(pageObject.sgninPsswrd).sendKeys("testingPassword");
    await pageObject.click(pageObject.signInBtn);
    const elementExists = await driver.findElements(pageObject.incrtAcctPswdMsg);
    await sleep(1000);
    
    fs.writeFile(`${__dirname}/IncorrectAccountMsg.png`,
    await pageObject.driver.takeScreenshot(), "base64", 
    (e =>{
        if (e) console.log(e);
        else console.log("Incorrect account or password.");
    
        expect(elementExists.length).toBe(0);
    return elementExists.length === 0; 
    }));
    })});

