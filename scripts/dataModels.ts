import {BudgetDataInterface,FormInterface,BudgetUiInterface} from "./Interfaces/Interfaces.js"




export class LoginForm implements FormInterface{
    
    email:string | undefined
    password:string | undefined

    constructor(email,password){
        this.email = email;
        this.password = password
    }
}

export class RegisterForm extends LoginForm{
    confirmPassword: string | undefined
    //Add confirm password
}

export class BudgetItem implements BudgetDataInterface {
    id:number | string | null;
    userId: number;
    date:string;
    description:string;
    amount:number;
    type:string;

    constructor(id:string,userId:number,date:string,desc:string,amount:number,type:string){
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.description = desc;
        this.amount = amount;
        this.type = type

    }
}

export class BudgetUI implements BudgetUiInterface{
    income;
    expense;
    total;

    constructor(income:number,expense:number,total:number){
        this.income = income;
        this.expense = expense;
        this.total;
    }

}