
import { placeOrderElements } from "./place-order.elements";

export class placeOrderMethods{
    static insertName(name){
          placeOrderElements.textboxes.name.invoke('val' ,name);
    }
     static insertCountry(country){
       placeOrderElements.textboxes.country.invoke('val', country);
    }
        
     static insertCity(city){
        placeOrderElements.textboxes.city.invoke('val', city);
     }   

     static insertCreditcard(creditcardNumber){
        placeOrderElements.textboxes.creditcard.invoke('val', creditcardNumber);
     }
     static insertMonth(month){
        placeOrderElements.textboxes.month.invoke('val', month);
     }
     static insertYear(year){
        placeOrderElements.textboxes.year.invoke('val', year);
     }

     static ClickOnClosebutton(){
        placeOrderElements.buttons.close.click();
     }
     static ClickOnPurchasebutton(){
        placeOrderElements.buttons.purchase.click();
     }
}