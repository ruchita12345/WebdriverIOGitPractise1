import Register from '../pageobjects/register.page';
import Common from '../utils/common';
const registerData = require('../data/register'); 
import SecurePage from '../pageobjects/secure.page';
import allureReporter from '@wdio/allure-reporter'

describe('Parabank register and login scenarios', () => {
    it('Verify that user should be able to register successfully', async () => {
        allureReporter.addSeverity('Critical');
        allureReporter.addFeature('Register');
        const userName = Common.getUsername();
        console.log("Ruchita Solanki: "+userName);
        Register.open();

        Register.clickOnRegisterLink()
        Register.enterFirstName(registerData.firstName)
        // Register.enterLastName(registerData.lastName)
        //     .enterAddress(registerData.address)
        //     .enterCity(registerData.city)
        //     .enterState(registerData.state)
        //     .enterZipCode(registerData.zipcode)
        //     .enterPhoneNumber(registerData.phonenumber)
        //     .enterSSN(registerData.ssn)
        //     .enterUsername(userName)
        //     .enterPassword(userName)
        //     .enterConfirmPassword(userName)
        // await Register.clickOnRegisterSubmitCTA();

        // await expect(Register.getWelcomeTitle()).toHaveTextContaining("Welcome");
        // expect(Register.getLoginWelcomeMsg()).toHaveTextContaining(
        //     'Your account was created successfully. You are now logged in.');
    });
});
