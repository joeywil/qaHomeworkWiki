import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class employeePage {
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
      //Locators
        header: By = By.css('.titleText')
        addEmployee: By = By.css('[name=addEmployee]')
        newEmployee: By = By.css('[name="employee11"]')
        nameInput: By = By.name('nameEntry')
        phoneInput: By = By.name('phoneEntry')
        titleInput: By = By.name('titleEntry')
        saveBtn: By = By.id('saveBtn')
        //Constructor
            constructor(driver: WebDriver) {
                this.driver = driver
            }    
        //Methods
            async navigate() {
                await this.driver.get(this.url)
                await this.driver.wait(until.elementLocated(this.header))

            };
            async click(elementBy: By) {
                await this.driver.wait(until.elementLocated(elementBy))
                return (await this.driver.findElement(elementBy)).click()
            }
            async sendKeys(elementBy: By, keys) {
                await this.driver.wait(until.elementLocated(elementBy))
                return this.driver.findElement(elementBy).sendKeys(keys)
            }
  }
const emPage = new employeePage(driver)
  describe("Employee Manger Test", () => {
      beforeEach(async () => {
          await emPage.navigate();
      })
      afterAll(async () => {
          await emPage.driver.quit()
      })
      test("adding an employee", async () => {
          await emPage.click(emPage.addEmployee)
          await emPage.click(emPage.newEmployee)
          await emPage.click(emPage.nameInput)
          await driver.findElement(emPage.nameInput).clear()
          await emPage.sendKeys(emPage.nameInput, "Change This")
          await emPage.click(emPage.phoneInput)
          await driver.findElement(emPage.phoneInput).clear()
          await emPage.sendKeys(emPage.phoneInput, "Chang This")
          await emPage.click(emPage.titleInput)
          await driver.findElement(emPage.titleInput).clear()
          await emPage.sendKeys(emPage.titleInput, "Change This")
          await emPage.click(emPage.saveBtn)
    })
})