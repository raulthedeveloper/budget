


export class View{

static mainDisplayDom = document.getElementById('main-display') as HTMLElement;  
static displayIncomeTotal = document.getElementById('income-display') as HTMLElement;
static displayExpenseTotal = document.getElementById('expense-display') as HTMLElement;
static descriptionDom = document.getElementById('description') as HTMLInputElement;
static amountDom = document.getElementById('amount') as HTMLInputElement;
static type = document.getElementById('type') as HTMLInputElement;
static submit = document.getElementById('submit') as HTMLElement ;
  


  setDisplayValue(mainDisplay:number,incomeTotal:number,expenseTotal:number):void
  {
    // Sets the display value
    View.mainDisplayDom.innerHTML = mainDisplay.toString();
    View.displayIncomeTotal.innerHTML = incomeTotal.toString();
    View.displayExpenseTotal.innerHTML = expenseTotal.toString();
  }

  addBudgetItems(data:object, type:string):void
  {
    if(type == 'income')
    {
      console.log(data);
    }
    
    if(type == 'expense')
    {
      console.log(data);
    }
  }


  static log():void
  {
        console.log("I am the view"); 
    }


}