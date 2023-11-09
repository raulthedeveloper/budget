var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { LoginForm } from "./Models/LoginFormModel";
import { RegisterForm } from "./Models/RegisterFormModel";
import { UserDal } from "./DAL/UserDal";
import ApiEndpoints from "./DAL/ApiEndPoints";
import { View } from "./view";
import { DataAccessLayer } from "./DAL/BudgetDal";
import { Model } from "./model";
import { appState } from "./Store/AppState";
export class UserForm {
    constructor(registerEmail, registerPassword, loginEmail, loginPassword) {
        this.userDal = new UserDal(ApiEndpoints.users);
        this.view = new View();
        this.model = new Model(0, 0, 0);
        this.registerEmail = registerEmail;
        this.registerPassword = registerPassword;
        this.loginEmail = loginEmail;
        this.loginPassword = loginPassword;
    }
    getUserId() {
        return this.userId;
    }
    loadFromDb(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let dal = new DataAccessLayer();
            //Saves id from database to object property to be used for future posts and calls
            this.userId = id;
            //Pass the id to the dal
            (yield dal.get()).forEach((e) => {
                this.model.saveDataToArr(e.id, this.userId, e.date, e.description, e.amount, e.type);
                this.view.addToIncome(this.model.getAllInc());
                this.view.addToExpense(this.model.getAllExp());
                this.model.setTotals(e.amount, e.type);
            });
            appState.userId = parseInt(id);
            appState.allExp = this.model.getAllExp();
            appState.allInc = this.model.getAllInc();
            appState.total = this.model.getTotals().total;
            appState.expenseTotal = this.model.getTotals().expenseTotal;
            appState.incomeTotal = this.model.getTotals().incomeTotal;
            this.view.setDisplayValue(this.model.total, this.model.incomeTotal, this.model.expenseTotal);
            this.model.eventListenersDelete();
        });
    }
    registerUser() {
        //Get user input from view
        this.userDal.RegisterUser(new RegisterForm(this.registerEmail.value, this.registerPassword.value));
        // Login all the user after register
        // this.loginEmail.innerHTML = this.registerEmail.value;
        // this.loginPassword.innerHTML = this.registerPassword.value;
        // this.signUserIn()
        // console.log(this.userId)
        this.view.clearColumns();
        this.model.clearAllData();
        View.closeRegisterBtn.click();
    }
    signUserIn() {
        return __awaiter(this, void 0, void 0, function* () {
            //Async call to data base and then returned Id is set to JSON
            this.userId = JSON.stringify(yield (this.userDal.LoginUser(new LoginForm(this.loginEmail.value, this.loginPassword.value)))).toString();
            this.view.clearColumns();
            this.model.clearAllData();
            this.loadFromDb(this.userId);
            this.loginEmail.value = null;
            this.loginPassword.value = null;
            // Closes modal after submit
            View.closeSignInBtn.click();
        });
    }
}
