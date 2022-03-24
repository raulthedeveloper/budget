"use strict";
exports.__esModule = true;
exports.Model = void 0;
var BudgetData = /** @class */ (function () {
    // Contains the same object data and methods as Expense and Income
    function BudgetData(description, type, value) {
        this.description = description;
        this.type = type;
        this.value = value;
    }
    return BudgetData;
}());
var Model = /** @class */ (function () {
    function Model(total, expenseTotal, incomeTotal) {
        // Creates Unique ID for object
        this.uuid = function () {
            return "xxxxxxxx-4xxx-yxxx".replace(/[xy]/g, function (c) {
                var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            });
        };
        this.total = total;
        this.expenseTotal = expenseTotal;
        this.incomeTotal = incomeTotal;
        this.allExp = [];
        this.allinc = [];
    }
    Model.prototype.setTotals = function (value, type) {
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
    };
    Model.prototype.getTotals = function () {
        return {
            total: this.total,
            expenseTotal: this.expenseTotal,
            incomeTotal: this.incomeTotal
        };
    };
    Model.prototype.saveDataToArr = function (desc, amount, type) {
        var object = {
            id: this.uuid(),
            desc: desc,
            amount: amount,
            type: type
        };
        // Push object to array
        if (type == 'expense') {
            this.allExp.push(object);
        }
        if (type == 'income') {
            this.allinc.push(object);
        }
        console.log(this.allinc);
    };
    return Model;
}());
exports.Model = Model;
