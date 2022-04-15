import {
  View
} from './view.js'
import {
  Model
} from './model.js'
import {
  DataAccessLayer
} from "./DAL/BudgetDal.js"
import { BudgetItem } from './dataModels.js';

import {UserForm} from "./userForm.js";
import ApiEndPoints from './DAL/ApiEndPoints.js';
import { appState } from './Store/AppState.js';





export class Controller {

  model: Model = new Model(0, 0, 0);
  view: View = new View();
  userId:number;
  apiUrlBudget:string = ApiEndPoints.budget;
  dal: DataAccessLayer = new DataAccessLayer(null,this.apiUrlBudget);
  userForm: UserForm = new UserForm(View.email_register,View.password_register,View.email_login,View.password_login);

 

  guestMode():void{
    // Will contain the methods that will not persist to database

  }


  userAccountMode():void{
    // Will contain methods that will handle user account
  }

  syncModelWithState()
  {
    this.model.userId = appState.userId
    this.model.allExp = appState.allExp;
    this.model.allinc = appState.allInc;
    this.model.total = appState.total;
    this.model.incomeTotal = appState.incomeTotal;
    this.model.expenseTotal = appState.expenseTotal;
  }

  syncStateWithModel()
  {
    appState.userId  = this.model.userId
    appState.allExp = this.model.allExp;
    appState.allInc = this.model.allinc;
    appState.total = this.model.total;
    appState.incomeTotal = this.model.incomeTotal;
    appState.expenseTotal = this.model.expenseTotal;
  }

  async postToDb(){
    let amount = parseInt(View.amountDom.value);

  //Waits for database to post
    await this.dal.post(new BudgetItem(null,this.model.userId,null,View.descriptionDom.value, amount, View.type.value));

    //After waiting for database grabs the last item with data assigned from Database
    this.getLastItem();

    
    
  }

  getLastItem(){
    let amount = parseInt(View.amountDom.value);

    this.dal.getLastItem(this.model.userId).then((e) => {


      // Pass values to model to be created into a object and saved in array
         this.model.saveDataToArr(e.id,e.userId,e.date,e.description, e.amount, e.type);

         //Totals are set to be used in the display and for other calculations
         this.model.setTotals(amount, View.type.value);

         //The display is set with all of the values
         this.view.setDisplayValue(this.model.total, this.model.incomeTotal, this.model.expenseTotal);

         //Income array is passed to the Income Column
         this.view.addToIncome(this.model.getAllInc())

         //Expense array is passed to the Expense Column
         this.view.addToExpense(this.model.getAllExp())

         this.syncStateWithModel()

         console.log(appState)

         this.view.deleteEventListeners();

   });
  }



  //create submit event listener

  init(): void {
   
    // Get calculation inputs and put into total

    this.view.setDisplayValue(this.model.total, this.model.incomeTotal, this.model.expenseTotal);

    // Submit button
    View.submit.addEventListener("click", () => {

      this.syncModelWithState()
    
      View.submit.disabled = true

      //Saves userId from form to model to get synced up with AppState
      this.model.userId = parseInt(this.userForm.getUserId())

      //Post to database and then gets it from database so it will have an Id and date assigned to it
     this.postToDb();

     
   
    });

    View.descriptionDom.addEventListener("keyup", function() {
      
      View.formValidation()
  });
  
    View.amountDom.addEventListener("keyup", function() {
      View.formValidation()
  });
  
    View.submit.disabled = true



    View.submit_user_register.addEventListener("click", (e) =>{
      e.preventDefault();
      this.userForm.registerUser();
      console.log(this.userForm);
      
    })

    View.submit_user_login.addEventListener("click",(e) =>{
      e.preventDefault();
      this.userForm.signUserIn();

      
      //Capture userId

    })

    



  }
}

