import { BudgetItem } from "./dataModels.js";
import { DataAccessLayer } from "./DAL/BudgetDal.js";
import { View } from "./view.js";
export class Model {
    constructor(total, expenseTotal, incomeTotal) {
        this.dal = new DataAccessLayer();
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
    incomeDelete() {
        //Loops through income column get all id
        for (let index = 0; index < View.incomeColumn.children.length; index++) {
            let id = View.incomeColumn.children[index].children[0].children[1].id;
            document.getElementById(id).addEventListener("click", () => {
                //Loops through expense column to remove item that matches id
                this.allinc.forEach(e => {
                    let elementId = parseInt(id.split("-", 2)[1]);
                    if (elementId == e.id) {
                        let itemIndex = this.allinc.indexOf(e);
                        this.allinc.splice(itemIndex, 1);
                        View.incomeColumn.removeChild(View.incomeColumn.children[itemIndex]);
                        this.dal.delete(parseInt(e.id));
                    }
                });
            });
        }
    }
    expenseDelete() {
        //Loops through expense column get all id
        for (let index = 0; index < View.expenseColumn.children.length; index++) {
            let id = View.expenseColumn.children[index].children[0].children[1].id;
            document.getElementById(id).addEventListener("click", () => {
                //Loops through expense column to remove item that matches id
                this.allExp.forEach(e => {
                    let elementId = parseInt(id.split("-", 2)[1]);
                    if (elementId == e.id) {
                        let itemIndex = this.allExp.indexOf(e);
                        this.allExp.splice(itemIndex, 1);
                        View.expenseColumn.removeChild(View.expenseColumn.children[itemIndex]);
                        this.dal.delete(parseInt(e.id));
                    }
                });
            });
        }
    }
    eventListenersDelete() {
        this.expenseDelete();
        this.incomeDelete();
    }
    getTotals() {
        return {
            total: this.total,
            expenseTotal: this.expenseTotal,
            incomeTotal: this.incomeTotal
        };
    }
    clearAllData() {
        this.total = 0;
        this.allExp = [];
        this.allinc = [];
        this.expenseTotal = 0;
        this.incomeTotal = 0;
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
    saveDataToArr(id, userId, date, desc, amount, type) {
        // let budgetItem = new BudgetItem(this.uuid(),new Date().toLocaleDateString("en-US"),desc,amount,type)
        let budgetItem = new BudgetItem(id, userId, date, desc, amount, type);
        // Push budgetItem to array
        if (type == 'expense') {
            this.allExp.push(budgetItem);
        }
        if (type == 'income') {
            this.allinc.push(budgetItem);
        }
    }
}
