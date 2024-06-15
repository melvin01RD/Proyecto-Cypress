export class CartElement{

   static get buttons(){
        return{
             get placeOrder(){
              return  cy.get('button[data-toggle="modal"]');
             },
        };
    }

     ////td[text()="Sony xperia z5"]/ancestor::tr/
    static get links(){

        return{
             delete(productName){

               return  cy.contains('td', productName).closest('tr').find('a')

            }
        }
    }
}