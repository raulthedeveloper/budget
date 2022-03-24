"use strict";
exports.__esModule = true;
exports.Controller = void 0;
var view_js_1 = require("./view.js");
var model_js_1 = require("./model.js");
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.update = function () {
    };
    //create submit event listener
    Controller.prototype.init = function () {
        var model = new model_js_1.Model(0, 0, 0);
        var view = new view_js_1.View();
        // Get calculation inputs and put into total
        view.setDisplayValue(model.total, model.incomeTotal, model.expenseTotal);
        view_js_1.View.submit.addEventListener("click", function () {
            var amount = parseInt(view_js_1.View.amountDom.value);
            // Pass values to model to be created into a object and saved in array
            model.saveDataToArr(view_js_1.View.descriptionDom.value, view_js_1.View.amountDom.value, view_js_1.View.type.value);
            model.setTotals(amount, view_js_1.View.type.value);
            view.setDisplayValue(model.total, model.incomeTotal, model.expenseTotal);
            // display allInc and allExp
            // view.addBudgetItems();
        });
        // Method get called to update values
    };
    return Controller;
}());
exports.Controller = Controller;
