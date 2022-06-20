import { BudgetItem } from "./Models/BudgetItemModel";



export class View{

public static mainDisplayDom = document.getElementById('main-display') as HTMLElement;  
public static displayIncomeTotal = document.getElementById('income-display') as HTMLElement;
public static displayExpenseTotal = document.getElementById('expense-display') as HTMLElement;
public static expenseColumn = document.getElementById('expense-column') as HTMLElement;
public static incomeColumn = document.getElementById('income-column') as HTMLElement;
public static descriptionDom = document.getElementById('description') as HTMLInputElement;
public static amountDom = document.getElementById('amount') as HTMLInputElement;
public static type = document.getElementById('type') as HTMLInputElement;
public static submit = document.getElementById('submit') as HTMLButtonElement ;

public static email_login = document.getElementById('email_login') as HTMLFormElement
public static email_register = document.getElementById('email_register') as HTMLFormElement

public static password_login = document.getElementById("password_login") as HTMLFormElement
public static password_register = document.getElementById("password_register") as HTMLFormElement

public static submit_user_register = document.getElementById('submit_user_register') as HTMLFormElement;
public static submit_user_login = document.getElementById('submit_user_login') as HTMLFormElement;
public static closeSignInBtn = document.getElementById("close-signin") as HTMLButtonElement;
public static closeRegisterBtn = document.getElementById("close-signup") as HTMLButtonElement;


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

  budgetCardHtml(income:boolean, id:number | string, description:string, amount:string | number):string{
    return `<div id="${id}" class="card mb-3"> <div class="card-header text-center d-flex justify-content-between"><span class="pl-5">${id}</span><span id="inc-${id}"  class="delete-button">X</span></div>
    <div class="card-body"><ul class="list-group"><li class="list-group-item">${description}</li><li class="list-group-item list-group-item-${income ? 'success' : 'danger'}">$<span>${amount}</span></li></ul> <button class="btn btn-dark mt-3" style="
    ">Edit</button> </div></div>`
  }

  addToIncome(data):void{
    //add to income column
    if(data.length > 0){
      View.incomeColumn.innerHTML = ""
      data.forEach((e:BudgetItem) => {
        View.incomeColumn.innerHTML += this.budgetCardHtml(true ,e.id, e.description, e.amount);
      });
      
    }
    
    this.clearField()
  }

  

  clearColumns():void{
    View.expenseColumn.innerHTML = "";
    View.incomeColumn.innerHTML = "";
  }

  addToExpense(data):void{
    //add to expense income
    console.log(data)

    if(data.length > 0){
      View.expenseColumn.innerHTML = ""
      data.forEach((e:BudgetItem)  => {
        View.expenseColumn.innerHTML += this.budgetCardHtml(false ,e.id, e.description, e.amount);

      });
      
    }
    this.clearField()
    
  }




}