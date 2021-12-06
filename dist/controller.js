import { View } from './view.js';
import { Model } from './model.js';
const mainDisplayDom = document.getElementById('main-display');
const displayIncomeTotal = document.getElementById('income-display');
const displayExpenseTotal = document.getElementById('expense-display');
const descriptionDom = document.getElementById('description');
const amountDom = document.getElementById('amount');
const type = document.getElementById('type');
export class Controller {
    constructor() {
        // Get current total from model and value from input
        this.calculateTotals = (current, value) => current + value;
    }
    static log() {
        console.log("I am the controller");
    }
    init() {
        const model = new Model();
        const view = new View(mainDisplayDom, descriptionDom, displayIncomeTotal, displayExpenseTotal, amountDom);
        // Get calculation inputs and put into total
        model.setTotals(200, 222, 333);
        // Method get called to update values
        view.setDisplayValue(model.total, model.incomeTotal, model.expenseTotal);
    }
}
