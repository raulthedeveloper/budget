import { BudgetItem } from "../Models/BudgetItemModel";
import { BudgetDataInterface } from "../Interfaces/Interfaces";

 class AppState {

    userId:number;
    allExp: BudgetDataInterface[];
    allInc: BudgetDataInterface[];
    total: number;
    expenseTotal: number;
    incomeTotal: number;

    setUserId(userId:number):void{
        this.userId = userId;
    }
    setAllExp(allExp:BudgetItem[]){
        this.allExp = allExp;
    }
    setAllInc(allInc:BudgetItem[]){
        this.allInc = allInc;
    }

    setTotal(total:number){
        this.total = total;
    }


    


}

export const appState = new AppState();