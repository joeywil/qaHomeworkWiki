import { BasePage } from "./basePageJW";
import { Builder, By, Capabilities, promise, until, WebDriver } from "selenium-webdriver";
import { onePlusPageObjects } from "./onePlusPageObjects";
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
/*This test adds a number of items to the cart.*/

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

class OnePlus extends BasePage {
  
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

  test("adding items to cart", async () => {
    
    await pageObject.click(pageObject.phones);
    await pageObject.click(pageObject.oneplus11);
    
    let currentTabs = await pageObject.driver.getAllWindowHandles();
    await pageObject.driver.switchTo().window(currentTabs[1]);
    
    await pageObject.click(pageObject.eternalgreen);
    await pageObject.click(pageObject.gb16gb256);
    await pageObject.click(pageObject.addtocart);
    sleep(2000);
    await pageObject.click(pageObject.skipaddons);
    await pageObject.click(pageObject.cart);
    await pageObject.click(pageObject.miniCartQty);
    await pageObject.setInput(pageObject.miniCartQty, "100\n");

    await pageObject.click(pageObject.cartCheckout);
    
    
  });
});



