
import { SignupElements } from "./signup.elements";


export class SignupMethods{

     static InsertUsername(username){
        SignupElements.textboxes.username.invoke('val', username);
     };


     static InsertPassword(password){
        SignupElements.textboxes.password.invoke('val', password);
     };
      
        static clickOnSignupButton(){

             SignupElements.buttons.Signup.click()
   
        };

        static Signup(username,password){
               this.InsertUsername(username);
               this.InsertPassword(password);
               this.clickOnSignupButton()

        }

}