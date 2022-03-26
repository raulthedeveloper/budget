import {BudgetDataInterface,FormInterface,BudgetUiInterface} from "./Interfaces/Interfaces.js"




export class Form implements FormInterface{
    email:string | undefined
    password:string | undefined
}

export class FormRegister extends Form{
    confirmPassword: string | undefined
}

export class BudgetItem implements BudgetDataInterface {
    id:number | string | null;
    date:string;
    desc:string;
    amount:number;
    type:string;

    constructor(id:string,date:string,desc:string,amount:number,type:string){
        this.id = id;
        this.date = date;
        this.desc = desc;
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