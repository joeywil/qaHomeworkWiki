import { By, WebDriver, until, } from "selenium-webdriver";
const chromedriver = require("chromedriver");
export class employeeManager {
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";

    addEmployee: By = By.css('[name="addEmployee"]');
    newEmployee: By = By.css('[name="employee11"]');
    nameEntry: By = By.css('[name="nameEntry"]');
    saveBtn: By = By.name('save');

    constructor(diver: WebDriver) {
        this.driver = driver;
    }
    async navigate() {
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.addEmployee));
    };
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(this.nameEntry));
        return this.driver.findElement(elementBy).sendKeys(keys);
    };
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    };
    async sendKeys(elementBy: By, keys) {
        return this.driver.findElement(elementBy).sendKeys(keys);
    };
    async getText()

}