


export class View{

static mainDisplayDom = document.getElementById('main-display') as HTMLElement;  
static displayIncomeTotal = document.getElementById('income-display') as HTMLElement;
static displayExpenseTotal = document.getElementById('expense-display') as HTMLElement;
static expenseColumn = document.getElementById('expense-column') as HTMLElement;
static incomeColumn = document.getElementById('income-column') as HTMLElement;
static descriptionDom = document.getElementById('description') as HTMLInputElement;
static amountDom = document.getElementById('amount') as HTMLInputElement;
static type = document.getElementById('type') as HTMLInputElement;
static submit = document.getElementById('submit') as HTMLButtonElement ;

static email_login = document.getElementById('email_login') as HTMLFormElement
static email_register = document.getElementById('email_register') as HTMLFormElement

static password_login = document.getElementById("password_login") as HTMLFormElement
static password_register = document.getElementById("password_register") as HTMLFormElement

static submit_user_register = document.getElementById('submit_user_register') as HTMLFormElement;
static submit_user_login = document.getElementById('submit_user_login') as HTMLFormElement;
  


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

  clearField():void{
    View.descriptionDom.value = null;
    View.amountDom.value = null;

    View.descriptionDom.focus()
  }

 

  static formValidation():void{
      if(View.descriptionDom.value == "" || View.descriptionDom.value == null || View.amountDom.value == "" || View.amountDom.value == null){
        View.submit.disabled = true
      }else{
        View.submit.disabled = false
      }
  }

  addToIncome(data):void{
    //add to income column
    if(data.length > 0){
      View.incomeColumn.innerHTML = ""
      data.forEach(e => {
        View.incomeColumn.innerHTML += `<div class="card mb-3"> <div class="card-header text-center d-flex justify-content-between"><span class="pl-5">${e.date}</span><span  class="delete-button">X</span></div>
        <div class="card-body"><ul class="list-group"><li class="list-group-item">${e.description}</li><li class="list-group-item list-group-item-success">$<span>${e.amount}</span></li></ul> </div></div>`
      });
      
    }
    
    this.clearField()
  }

  addToExpense(data):void{
    //add to expense income
    if(data.length > 0){
      View.expenseColumn.innerHTML = ""
      data.forEach(e => {
        View.expenseColumn.innerHTML += `<div class="card mb-3"> <div class="card-header text-center d-flex justify-content-between"><span class="pl-5">${e.date}</span><span class="delete-button">X</span></div><div class="card-body"><ul class="list-group"><li class="list-group-item">${e.description}</li><li class="list-group-item list-group-item-danger">$<span>${e.amount}</span></li></ul> </div></div>`
      });
      
    }
    this.clearField()
    
  }




}