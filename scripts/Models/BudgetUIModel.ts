import { BudgetUiInterface } from "../Interfaces/Interfaces"


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