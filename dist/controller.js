var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { View } from './view.js';
import { Model } from './model.js';
import { DataAccessLayer } from "./dal.js";
import { BudgetItem } from './dataModels.js';
export class Controller {
    constructor() {
        this.model = new Model(0, 0, 0);
        this.view = new View();
        this.userId = "1";
        this.apiUrl = `https://localhost:7242/api/Budget/get_user_items/${this.userId}`;
        this.dal = new DataAccessLayer(this.apiUrl);
    }
    loadFromDb() {
        return __awaiter(this, void 0, void 0, function* () {
            (yield this.dal.get()).forEach(e => {
                this.model.saveDataToArr(e.date, e.description, e.amount, e.type);
                this.view.addToIncome(this.model.getAllInc());
                this.view.addToExpense(this.model.getAllExp());
            });
            this.model.calculateTotals();
        });
    }
    //create submit event listener
    init() {
        this.loadFromDb();
        // Get calculation inputs and put into total
        this.view.setDisplayValue(this.model.total, this.model.incomeTotal, this.model.expenseTotal);
        // Submit button
        View.submit.addEventListener("click", () => {
            View.submit.disabled = true;
            let amount = parseInt(View.amountDom.value);
            this.dal.post(new BudgetItem(null, null, View.descriptionDom.value, amount, View.type.value));
            // Pass values to model to be created into a object and saved in array
            this.model.saveDataToArr(null, View.descriptionDom.value, amount, View.type.value);
            this.model.setTotals(amount, View.type.value);
            this.view.setDisplayValue(this.model.total, this.model.incomeTotal, this.model.expenseTotal);
            this.view.addToIncome(this.model.getAllInc());
            this.view.addToExpense(this.model.getAllExp());
            console.log(this.model);
        });
    }
}
