interface budgetInterface 
{
    description: string,
    type:string,
    value:number,        
    
}




class BudgetData implements budgetInterface {
    
    // Contains the same object data and methods as Expense and Income
    constructor(public description:string,public type:string,public value:number){
        
    }  
}


interface modalInterface 
{
    total:number
    expenseTotal:number
    incomeTotal:number
    allExp:object[]
    allinc:object[]
}

export class Model implements modalInterface{
    // User getters and setters to access data
    // Takes values from controller and gives it to income and expense object
    
    allExp: object[];
    allinc: object[];
    total: number;
    expenseTotal: number;
    incomeTotal: number;


    setTotals(total:number,expenseTotal:number,incomeTotal:number):void
    {
        // Totals are calculated in controller
        this.total = total;
        this.expenseTotal = expenseTotal;
        this.incomeTotal = incomeTotal;

        console.log(this.total)
    }

    setIncomeValues(description:string,type:string,value:number):void
    {
        const incomeObj =  new BudgetData(description,type,value);
        incomeObj.description = description;
        incomeObj.type = type;
        incomeObj.value = value;

        this.saveIncomeObj({incomeObj});
    }

    setExpenseValue(description:string,type:string,value:number):void
    {
        const expenseObj = new BudgetData(description,type,value);
        expenseObj.description = description;
        expenseObj.type = type;
        expenseObj.value = value;

        this.saveExpenseObj(expenseObj)
    }

    saveIncomeObj(income:object):void
    {
        // pushes income object into array
        console.log(income)
    }

    saveExpenseObj(expense:object):void
    {
        // pushes expense object into array
        console.log(expense)
    }

    static log(){
          console.log("I am the view"); 
      }
  }