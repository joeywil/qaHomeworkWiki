import { BasePage } from "./basePageJW";
import {Builder, By, Capabilities, promise, until, WebDriver,} from "selenium-webdriver";
const { Key } = require("selenium-webdriver");
export class onePlusPageObjects extends BasePage {
/*This test verifies header links functionality.*/

        //url: string = "https://www.oneplus.com/us";
      //Locators
        phones: By = By.xpath('//*[@id="nav-pages-slide"]/ul/li[1]/a/span');
        audio: By = By.xpath(`//*[@id="nav-pages-slide"]/ul/li[2]/a/span`);
        nordbuds: By = By.xpath(`//*[@id="page-accessory-list"]/div/section/div/div/div[4]/div/div/div[2]/a/div[2]/div[1]/span`);
        nordbudsgallery: By = By.xpath(`//*[@id="one-accessory"]/div[1]/section/div/div/div/div/div/div/div[1]/div/div/div/div/div[2]/ul/li[3]/div`);
        supportPgHeaderPhones: By = By.xpath(`//*[@id="oneplus-header--nav"]/ul/li[1]/a/span`);
        oneplus10pro: By = By.xpath('//*[@id="page-accessory-list"]/div/section/div/div[2]/div[4]/div/div/div[5]/a/div[2]/div[1]/span');
        oneplus11: By = By.xpath(`//*[@id="page-accessory-list"]/div/section/div/div[2]/div[4]/div/div/div[2]/a/div[2]/div[1]/span`);
        seeOffers: By = By.xpath(`//*[@id="topInfo"]/div[4]/a/div`)
        eternalgreen:By = By.xpath(`//*[@id="phoneInfoStart"]/div[1]/div[2]/div[2]`);
        titanblack: By = By.xpath(`//*[@id="phoneInfoStart"]/div[1]/div[2]/div[1]/div/img`)
        volcanicblack: By = By.xpath('//*[@id="phoneInfoStart"]/div[1]/div[2]/div[1]/div/img');
        emeraldforest: By = By.xpath(`//*[@id="phoneInfoStart"]/div[1]/div[2]/div[2]/div/img`);
        gb12gb256: By = By.xpath('//*[@id="phoneInfoStart"]/div[2]/div[2]/div[2]/div[2]');
        gb8gb128: By = By.xpath('//*[@id="phoneInfoStart"]/div[2]/div[2]/div[1]/div[2]');
        addtocart: By = By.xpath('//*[@id="checkout-add"]/div');
        buynow: By = By.xpath(`//*[@id="checkout-buy"]/div/span`);     
        skipaddons: By = By.xpath('(//div[@class="new-button btn-text new-button--primary new-button--small"])');
        cart: By = By.xpath(`//*[@id="header"]/div[1]/ul/li[1]/a[1]/span[2]`);
        checkout: By = By.xpath(`//*[@id="final_checkout"]`);
        cartCheckout: By = By.xpath('(//a[@class="one-button btn-red btn btn-checkout"])');
        gb16gb256: By = By.xpath(`//*[@id="phoneInfoStart"]/div[2]/div[2]/div[2]/div[2]`);
        agreetocookies: By = By.xpath('//*[@id="truste-consent-button"]');
        declineoffer: By = By.xpath('//*[@id="usi_content"]/div/button[1]');
        miniCart: By = By.xpath('(//div[@data-block="minicart"])');
        miniCartQty: By = By.xpath('(//input[@id="cart-item-209177-qty"])');
        miniCartSize4: By = By.xpath('(//input[@size="4"])');
        header: By = By.xpath('(//div[@class="header content"])');
        shoppingCart: By = By.xpath('(//*[@id="maincontent"]/div[1]/div[2]/div/div/div/a)');
        discountText: By = By.xpath('(//*[@id="cart-totals"]/div/table/tbody/tr[2]/td/span/span)');
        comparisonList: By = By.xpath('(//*[@id="maincontent"]/div[1]/div[2]/div/div/div/a)');
        signIn: By = By.xpath('(/html/body/div[1]/header/div[1]/div/ul/li[2]/a)');
        emailField: By = By.xpath('(//*[@id="email"])');
        passwordField: By = By.xpath('(//*[@id="pass"])');
        signInBtn: By = By.xpath('(//*[@id="send2"])');
        reviewArrow: By = By.xpath(`//*[@id="phone-bottom"]/div[2]/div[1]/a/i`);
        store: By = By.xpath(`//*[@id="nav-pages-slide"]/div[1]/ul/li[1]/a/span`);
        filter464: By = By.xpath(`//*[@id="sort-checkbox"]/div/div/div[1]/div[5]/div/label/span`);
        filterFlagship: By = By.xpath(`//*[@id="CAT00004910cus101687151140451"]`);
        nothiongFound: By = By.xpath(`//*[@id="page-accessory-list"]/div/section/div/div[2]/div[5]`);
        nordSeries: By = By.xpath(`//*[@id="sort-checkbox"]/div/div/div[1]/div[2]/div/label/span`);
        filter16256: By = By.xpath(`//*[@id="sort-checkbox"]/div/div/div[1]/div[2]/div/label`);
        //Sign in selectors
        accntBtn: By = By.xpath(`//*[@id="show-user-info"]`);
        incrtAcctPswdMsg: By = By.xpath(`/html/body/div[2]/div[2]/div[2]/div/div/div[2]/div[2]/form/div[4]/div`);
        sgninEmail: By = By.xpath(`/html/body/div[2]/div[2]/div[2]/div/div/div[2]/div[2]/form/div[1]/div/input`);
        sgninPsswrd: By = By.xpath(`/html/body/div[2]/div[2]/div[2]/div/div/div[2]/div[2]/form/div[2]/div[1]`);
        sgninBtn: By = By.xpath(`/html/body/div[2]/div[2]/div[2]/div/div/div[2]/div[2]/form/div[5]/button[1]`);
        //Support page selectors
        supportLink: By = By.xpath(`//*[@id="nav-pages-slide"]/div[1]/ul/li[5]/a/span`);
        supportSearch: By = By.xpath('(//div[@class="el-pc-input relative el-input el-input--prefix el-input--suffix"])')
        supportOnePlusSeries: By = By.xpath(`//*[@id="el-collapse-head-5403"]/i[1]`);
        
        //Constructor
           constructor(driver: WebDriver) {
            super({url:"https://www.oneplus.com/us"});
           }};