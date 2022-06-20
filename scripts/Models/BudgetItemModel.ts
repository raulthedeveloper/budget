import {BudgetDataInterface} from "../Interfaces/Interfaces.js"


export class BudgetItem implements BudgetDataInterface {
    id:number | string | null;
    userId: number;
    date:string | Date;
    description:string;
    amount:number;
    type:string;

    constructor(id:string,userId:number,date:string | Date,desc:string,amount:number,type:string){
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.description = desc;
        this.amount = amount;
        this.type = type

    }
}