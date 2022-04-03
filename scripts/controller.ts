import {
  View
} from './view.js'
import {
  Model
} from './model.js'
import {
  DataAccessLayer
} from "./dal.js"
import { BudgetItem } from './dataModels.js';






export class Controller {

  model: Model = new Model(0, 0, 0);
  view: View = new View();
  userId:string = "1"
  apiUrl:string = `https://localhost:7242/api/Budget/get_user_items/${this.userId}`
  dal: DataAccessLayer = new DataAccessLayer(this.apiUrl);


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

      console.log(this.model)

    });


  }
}