import {BudgetDataInterface,FormInterface,BudgetUiInterface} from "../Interfaces/Interfaces"


export class LoginForm implements FormInterface{
    
    email:string | undefined
    password:string | undefined

    constructor(email,password){
        this.email = email;
        this.password = password
    }
}