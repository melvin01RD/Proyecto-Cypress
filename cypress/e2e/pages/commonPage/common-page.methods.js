
import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods{
    static navigateToDemoBlaze(){
        cy.clearCookies();
        cy.visit(CommonPageData.url);
    }

    static ClickOnHomeOption(){
        CommonPageElements.topMenu.home.click()
    }

    static ClickOnContactOption(){
        CommonPageElements.topMenu.contact.click()
    }

    static ClickOnAboutUS(){
        CommonPageElements.topMenu.aboutUs.click()
    }

    static ClickOnCartOption(){
        CommonPageElements.topMenu.cart.click()
    }

    static ClickOnLoginOption(){
        CommonPageElements.topMenu.login.click()
    }

    static ClickOnSignUpOption(){
        CommonPageElements.topMenu.signUp.click()
    }

    static verifyAlert(expectedMessage){
        cy.on ('window:alert', (str) => {
            expect(str).to.eq(expectedMessage)
                                           
        })
    }
     
     static GenerateRandomString(length=10) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

}


