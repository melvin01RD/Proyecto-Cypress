import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods{
    static navigateToDemoBlaze(){
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

    static ClickOnSignUp(){
        CommonPageElements.topMenu.signUp.click()
    }
}