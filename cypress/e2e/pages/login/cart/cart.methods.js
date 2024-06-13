import { CartElement } from "./cart.elements";


export class  CartMethods{
    static  ClickOnDeleteLnk(productName){
           
        CartElement.links.delete(productName).click()
        
    }
    
}