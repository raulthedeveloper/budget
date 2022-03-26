import {BudgetDataInterface,budgetInterface,modelInterface} from "./Interfaces/Interfaces.js"

import {BudgetItem } from "./dataModels.js";
import { DataAccessLayer } from "./dal.js";



export class Model implements modelInterface{
    // User getters and setters to access data
    // Takes values from controller and gives it to income and expense object
    dal:DataAccessLayer = new DataAccessLayer()
    allExp: BudgetDataInterface[];
    allinc: BudgetDataInterface[];
    total: number;
    expenseTotal: number;
    incomeTotal: number;

    constructor(total:number,expenseTotal:number,incomeTotal:number)
    {
        this.total = total;
        this.expenseTotal = expenseTotal;
        this.incomeTotal = incomeTotal;
        this.allExp = [];
        this.allinc = [];
    }
   

    setTotals(value:number,type:string):void
    {
        // Totals are calculated in controller
        
        if(type == 'income')
        {
            this.incomeTotal += value;
            this.total += value;
            
        }
         

        if(type == 'expense')
        {
            this.expenseTotal += value;
            this.total -= value;
        }
   

    }

   
    // Creates Unique ID for object
    uuid = () =>
    "xxxxxxxx-4xxx-yxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });

    getTotals():object
    {
        return {
            total:this.total,
            expenseTotal: this.expenseTotal,
            incomeTotal: this.incomeTotal

        }
    }

    calculateTotals():void{
       
        this.allExp.forEach(e =>{
            this.setTotals(e.amount,e.type)
        })

        this.allinc.forEach(e =>{
            this.setTotals(e.amount,e.type)
        })


    }

    getAllExp(){
        return this.allExp
    }

    getAllInc(){
        return this.allinc
    }

    

    saveDataToArr(date:string,desc:string, amount:number, type:string):void
    {
        

        // let budgetItem = new BudgetItem(this.uuid(),new Date().toLocaleDateString("en-US"),desc,amount,type)

        let budgetItem = new BudgetItem(null,date,desc,amount,type)


        // Push budgetItem to array
        if(type == 'expense')
        {
            this.allExp.push(budgetItem)
        }

        if(type == 'income')
        {
            this.allinc.push(budgetItem)
        }

        

    }

  }