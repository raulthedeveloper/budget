import { LoginForm, RegisterForm } from "./dataModels.js";
import { UserDal } from "./DAL/UserDal.js";
export class UserForm {
    constructor(registerEmail, registerPassword, loginEmail, loginPassword) {
        this.userDal = new UserDal("https://localhost:7242/api/Users");
        this.registerEmail = registerEmail;
        this.registerPassword = registerPassword;
        this.loginEmail = loginEmail;
        this.loginPassword = loginPassword;
    }
    registerUser() {
        //Get user input from view
        this.userDal.RegisterUser(new RegisterForm(this.registerEmail.value, this.registerPassword.value));
    }
    signUserIn() {
        this.userDal.LoginUser(new LoginForm(this.loginEmail.value, this.loginPassword.value));
    }
}
