import { HomeElements } from "./home.elements";

export class HomeMethods {
    static clickOnPhonesOption(){
        HomeElements.categories.phones.click();
    }

    static clickOnlaptopsOption(){
        HomeElements.categories.laptops.click();
    }

    static clickOnMonitorsOption(){
        HomeElements.categories.monitors.click();
    }

    
    static clickOnMonitorsOption(){
        HomeElements.product.productName.click();
      }

}