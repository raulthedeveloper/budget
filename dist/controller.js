import { View } from './view.js';
import { Model } from './model.js';
export class Controller {
    update() {
    }
    //create submit event listener
    init() {
        const model = new Model(0, 0, 0);
        const view = new View();
        // Get calculation inputs and put into total
        view.setDisplayValue(model.total, model.incomeTotal, model.expenseTotal);
        View.submit.addEventListener("click", () => {
            let amount = parseInt(View.amountDom.value);
            // Pass values to model to be created into a object and saved in array
            model.saveDataToArr(View.descriptionDom.value, View.amountDom.value, View.type.value);
            model.setTotals(amount, View.type.value);
            view.setDisplayValue(model.total, model.incomeTotal, model.expenseTotal);
            // display allInc and allExp
            // view.addBudgetItems();
        });
        // Method get called to update values
    }
}
