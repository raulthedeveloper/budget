import { BudgetItem } from "./dataModels.js";
import { DataAccessLayer } from "./DAL/BudgetDal.js";
export class Model {
    constructor(total, expenseTotal, incomeTotal) {
        // User getters and setters to access data
        // Takes values from controller and gives it to income and expense object
        this.userId = "1";
        this.apiUrl = `https://localhost:7242/api/Budget/get_user_items/${this.userId}`;
        this.dal = new DataAccessLayer(this.apiUrl);
        // Creates Unique ID for object
        this.uuid = () => "xxxxxxxx-4xxx-yxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
        this.total = total;
        this.expenseTotal = expenseTotal;
        this.incomeTotal = incomeTotal;
        this.allExp = [];
        this.allinc = [];
    }
    setTotals(value, type) {
        // Totals are calculated in controller
        if (type == 'income') {
            this.incomeTotal += value;
            this.total += value;
        }
        if (type == 'expense') {
            this.expenseTotal += value;
            this.total -= value;
        }
    }
    getTotals() {
        return {
            total: this.total,
            expenseTotal: this.expenseTotal,
            incomeTotal: this.incomeTotal
        };
    }
    calculateTotals() {
        this.allExp.forEach(e => {
            this.setTotals(e.amount, e.type);
        });
        this.allinc.forEach(e => {
            this.setTotals(e.amount, e.type);
        });
    }
    getAllExp() {
        return this.allExp;
    }
    getAllInc() {
        return this.allinc;
    }
    saveDataToArr(date, desc, amount, type) {
        // let budgetItem = new BudgetItem(this.uuid(),new Date().toLocaleDateString("en-US"),desc,amount,type)
        let budgetItem = new BudgetItem(null, date, desc, amount, type);
        console.log(budgetItem);
        // Push budgetItem to array
        if (type == 'expense') {
            this.allExp.push(budgetItem);
        }
        if (type == 'income') {
            this.allinc.push(budgetItem);
        }
    }
}
