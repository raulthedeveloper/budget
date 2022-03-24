
interface budgetInterface 
{
    description: string,
    type:string,
    value:number,        
    
}

interface modalInterface 
{
    total:number
    expenseTotal:number
    incomeTotal:number
    allExp:object[]
    allinc:object[]
}

interface BudgetDataInterface{
    id:string,
    date:string,
    desc:string,
    amount:string,
    type:string
}





class BudgetData implements budgetInterface {
    
    // Contains the same object data and methods as Expense and Income
    constructor(public description:string,public type:string,public value:number){
        
    }  
}




export class Model implements modalInterface{
    // User getters and setters to access data
    // Takes values from controller and gives it to income and expense object
    
    allExp: object[];
    allinc: object[];
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

    getAllExp(){
        return this.allExp
    }

    getAllInc(){
        return this.allinc
    }

    

    saveDataToArr(desc:string, amount:string, type:string):void
    {
        let object:BudgetDataInterface = {
            id:this.uuid(),
            date:new Date().toLocaleDateString("en-US"),
            desc,
            amount,
            type
        }

        // Push object to array
        if(type == 'expense')
        {
            this.allExp.push(object)
        }

        if(type == 'income')
        {
            this.allinc.push(object)
        }

        

    }



    


  }