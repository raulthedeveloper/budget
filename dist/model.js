class BudgetData {
    // Contains the same object data and methods as Expense and Income
    constructor(description, type, value) {
        this.description = description;
        this.type = type;
        this.value = value;
    }
}
export class Model {
    constructor(total, expenseTotal, incomeTotal) {
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
        console.log(this.getTotals());
    }
    getTotals() {
        return {
            total: this.total,
            expenseTotal: this.expenseTotal,
            incomeTotal: this.incomeTotal
        };
    }
    saveDataToArr(desc, amount, type) {
        let object = {
            id: this.uuid(),
            desc,
            amount,
            type
        };
        // Push object to array
        if (type == 'expense') {
            this.allExp.push(object);
        }
        if (type == 'income') {
            this.allinc.push(object);
        }
        console.log(this.allinc);
    }
}
