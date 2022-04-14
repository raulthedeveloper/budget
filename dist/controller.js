import { View } from './view.js';
import { Model } from './model.js';
import { DataAccessLayer } from "./DAL/BudgetDal.js";
import { BudgetItem } from './dataModels.js';
import { UserForm } from "./userForm.js";
import ApiEndPoints from './DAL/ApiEndPoints.js';
import { appState } from './Store/AppState.js';
export class Controller {
    constructor() {
        this.model = new Model(0, 0, 0);
        this.view = new View();
        this.apiUrlBudget = ApiEndPoints.budget;
        this.dal = new DataAccessLayer(null, this.apiUrlBudget);
        this.userForm = new UserForm(View.email_register, View.password_register, View.email_login, View.password_login);
    }
    guestMode() {
        // Will contain the methods that will not persist to database
    }
    userAccountMode() {
        // Will contain methods that will handle user account
    }
    syncModelWithState() {
        this.model.userId = appState.userId;
        this.model.allExp = appState.allExp;
        this.model.allinc = appState.allInc;
        this.model.total = appState.total;
        this.model.incomeTotal = appState.incomeTotal;
        this.model.expenseTotal = appState.expenseTotal;
    }
    syncStateWithModel() {
        appState.userId = this.model.userId;
        appState.allExp = this.model.allExp;
        appState.allInc = this.model.allinc;
        appState.total = this.model.total;
        appState.incomeTotal = this.model.incomeTotal;
        appState.expenseTotal = this.model.expenseTotal;
    }
    //create submit event listener
    init() {
        // Get calculation inputs and put into total
        this.view.setDisplayValue(this.model.total, this.model.incomeTotal, this.model.expenseTotal);
        console.log(appState);
        // Submit button
        View.submit.addEventListener("click", () => {
            this.syncModelWithState();
            console.log(appState);
            View.submit.disabled = true;
            this.model.userId = parseInt(this.userForm.getUserId());
            let amount = parseInt(View.amountDom.value);
            //User Id is passed to the api endpoint along with data from the input form
            this.dal.post(new BudgetItem(null, this.model.userId, null, View.descriptionDom.value, amount, View.type.value));
            // Pass values to model to be created into a object and saved in array
            this.model.saveDataToArr(this.model.userId, null, View.descriptionDom.value, amount, View.type.value);
            //Totals are set to be used in the display and for other calculations
            this.model.setTotals(amount, View.type.value);
            //The display is set with all of the values
            this.view.setDisplayValue(this.model.total, this.model.incomeTotal, this.model.expenseTotal);
            //Income array is passed to the Income Column
            this.view.addToIncome(this.model.getAllInc());
            //Expense array is passed to the Expense Column
            this.view.addToExpense(this.model.getAllExp());
            this.syncStateWithModel();
        });
        View.descriptionDom.addEventListener("keyup", function () {
            View.formValidation();
        });
        View.amountDom.addEventListener("keyup", function () {
            View.formValidation();
        });
        View.submit.disabled = true;
        View.submit_user_register.addEventListener("click", (e) => {
            e.preventDefault();
            this.userForm.registerUser();
            console.log(this.userForm);
        });
        View.submit_user_login.addEventListener("click", (e) => {
            e.preventDefault();
            this.userForm.signUserIn();
            //Capture userId
        });
    }
}
