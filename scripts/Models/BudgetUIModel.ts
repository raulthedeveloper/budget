import { BudgetUiInterface } from "../Interfaces/Interfaces.js"


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