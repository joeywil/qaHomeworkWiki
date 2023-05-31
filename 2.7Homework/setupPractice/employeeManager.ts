import { By, WebDriver, until, Capabilities, Builder } from "selenium-webdriver";

export class employeeManager {
    driver: WebDriver;

    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";

    addEmployee: By = By.css('[name="addEmployee"]')
    newEmployee: By = By.css('[name="employee11"]')
    nameEntry: By = By.css('[name="nameEntry"]')

    constructor(diver: WebDriver) {
        this.driver = this.driver;
    }
    async navigate() {
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.addEmployee))
    };
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(this.nameEntry))
        return this.driver.findElement(elementBy).sendKeys(keys)
    }
}