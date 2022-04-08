import { LoginForm,RegisterForm } from "./dataModels.js";
import { UserDal } from "./DAL/UserDal.js";


export class UserForm {

    registerEmail:HTMLFormElement;
    registerPassword:HTMLFormElement;
    loginEmail:HTMLFormElement;
    loginPassword:HTMLFormElement;
    userDal = new UserDal("https://localhost:7242/api/Users");
    

    constructor(registerEmail:HTMLFormElement,registerPassword:HTMLFormElement,loginEmail:HTMLFormElement,loginPassword:HTMLFormElement)
    {
        this.registerEmail = registerEmail;
        this.registerPassword = registerPassword;
        this.loginEmail = loginEmail;
        this.loginPassword = loginPassword
    }

    registerUser():void{
        //Get user input from view
        this.userDal.RegisterUser(new RegisterForm(this.registerEmail.value,this.registerPassword.value));
    }

    signUserIn():void{
        this.userDal.LoginUser(new LoginForm(this.loginEmail.value,this.loginPassword.value));
    }
}