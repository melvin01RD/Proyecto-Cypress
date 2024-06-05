import { loginElements } from "./login.elements";

export class loginMethods{

    static  InsertUsername(username){

        loginElements.textboxes.username.type(username)

        

    }

    static InsertPassword(password){
    loginElements.textboxes.password.type(password)

    }

      static clickOnLoginButton(){

        loginElements.buttons.login.click()



     }


}


