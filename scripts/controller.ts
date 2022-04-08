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






export class Controller {

  model: Model = new Model(0, 0, 0);
  view: View = new View();
  userId:string = "3"
  apiUrl:string = `https://localhost:7242/api/Budget/get_user_items/${this.userId}`
  dal: DataAccessLayer = new DataAccessLayer(this.apiUrl);
  userForm: UserForm = new UserForm(View.email_register,View.password_register,View.email_login,View.password_login);


 async loadFromDb() {
  (await this.dal.get()).forEach(e => {
    this.model.saveDataToArr(e.date,e.description, e.amount, e.type)
    this.view.addToIncome(this.model.getAllInc())
    this.view.addToExpense(this.model.getAllExp())
    

  })
    

    this.model.calculateTotals()

  }

  //create submit event listener

  init(): void {
    this.loadFromDb();

    // Get calculation inputs and put into total

    this.view.setDisplayValue(this.model.total, this.model.incomeTotal, this.model.expenseTotal);

    // Submit button
    View.submit.addEventListener("click", () => {

      View.submit.disabled = true

      let amount = parseInt(View.amountDom.value);

      this.dal.post(new BudgetItem(null,null,View.descriptionDom.value, amount, View.type.value))
      // Pass values to model to be created into a object and saved in array
      this.model.saveDataToArr(null,View.descriptionDom.value, amount, View.type.value);

      this.model.setTotals(amount, View.type.value);

      this.view.setDisplayValue(this.model.total, this.model.incomeTotal, this.model.expenseTotal);

      this.view.addToIncome(this.model.getAllInc())
      this.view.addToExpense(this.model.getAllExp())


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
      console.log("submit works on login");
    })

  }
}