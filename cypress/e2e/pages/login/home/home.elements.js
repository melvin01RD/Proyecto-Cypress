export class HomeElements{

    static get categories(){

       return {
           get phones(){
               cy.contains('a', 'Phones')
           },

           get laptops(){
               cy.contains('a', 'Laptops')
           },

           get monitors(){
               cy.contains('a', 'Monitors')
           }
       }
    }

    static  product(productName){
        {
          cy.contains('a' ,productName)
        }
    }

}