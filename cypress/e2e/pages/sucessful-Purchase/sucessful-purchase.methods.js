import { SuccessfulPurchase } from "./sussesful.purchase.elements";

export class SuccessfulPurchaseMethods{
   
    static get ClickOnOKButton(){
        SuccessfulPurchase.button.ok.click();
    }

    static get VerifyCheckMarkIsDisplay(){
        SuccessfulPurchase.icons.greenCheckMark.should('exist');
    }

}