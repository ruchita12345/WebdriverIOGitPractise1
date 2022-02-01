

import Page from './page';
/**
 * Author: One and Only Saurabh
 * sub page containing specific selectors and methods for a specific page
 */
let abc;
class Register extends Page {

    get registerLink() { return $("//a[contains(text(), 'Register')]"); }
    get firstName() { return $("input[id='customer.firstName']"); }
    get lastName() { return $("input[id='customer.lastName']"); }
    get address() { return $("input[id='customer.address.street']"); }
    get city() { return $("input[id='customer.address.city']"); }
    get state() { return $("input[id='customer.address.state']"); }
    get zipCode() { return $("input[id='customer.address.zipCode']"); }
    get phoneNumber() { return $("input[id='customer.phoneNumber']"); }
    get ssn() { return $("input[id='customer.ssn']"); }
    get registerSubmitCTA() { return $("input[value='Register']"); }
    get username() { return $("input[id='customer.username']"); }
    get password() { return $("input[id='customer.password']"); }
    get confirmPassword() { return $("input[id='repeatedPassword']"); }
    get loginWelcomeTitle() { return $("#rightPanel > h1.title"); }
    get loginWelcomeMsg() { return $("#rightPanel > p"); }
    open() {
        return super.open();
    }

    clickOnRegisterLink() {
        this.registerLink.click();
        return this;
    }

    enterFirstName(firstName) {
        browser.pause(2000);
        this.firstName.addValue(firstName);
    }

    enterLastName(lastName) {
        this.lastName.addValue(lastName);
        return this;
    }

    enterAddress(address) {
        this.address.addValue(address);
        return this;
    }

    enterCity(city) {
        this.city.addValue(city);
        return this;
    }

    enterState(state) {
        this.state.addValue(state);
        return this;
    }

    enterZipCode(zipCode) {
        this.zipCode.addValue(zipCode);
        return this;
    }

    enterPhoneNumber(phoneNumber) {
        this.phoneNumber.addValue(phoneNumber);
        return this;
    }

    enterSSN(ssn) {
        this.ssn.addValue(ssn);
        return this;
    }

    async clickOnRegisterSubmitCTA() {
        await browser.pause(2000);
        await this.registerSubmitCTA.click();
        await browser.pause(2000);
    }

    enterUsername(userName) {
        this.username.addValue(userName);
        return this;
    }

    enterPassword(password) {
        this.password.addValue(password);
        return this;
    }

    enterConfirmPassword(confirmPassword) {
        this.confirmPassword.addValue(confirmPassword);
        return this;
    }

    async getWelcomeTitle() {
        await browser.pause(2000);
        await console.log("ruchitaaaa Solankiiiii: ");
        await (abc = await this.loginWelcomeTitle.getText());
        console.log("Mehul Solanki: "+abc);
        return await abc;
    }

    getLoginWelcomeMsg() {
        return this.loginWelcomeMsg.getText();
    }
}

export default new Register();
