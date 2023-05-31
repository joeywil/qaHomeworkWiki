import { By, WebDriver, until, Capabilities, Builder } from "selenium-webdriver";

export class SpecPage {
    driver: WebDriver;

    url: string = "https://google.com";

    searchBar: By = By.css('[name="q"]')
    results: By = By.id("rso")

    constructor(diver: WebDriver) {
        this.driver = this.driver;
    }

    async navigate() {
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.searchBar))
    }
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(this.searchBar))
        return this.driver.findElement(elementBy).sendKeys(keys)
    }
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy))
        return (await this.driver.findElement(elementBy)).getText()
    }
    async doSearch(text: string) { 
        return this.sendKeys(this.searchBar, `${text}\n`)
    }
    async getResults() {
        return this.getText(this.results)
    }

}
