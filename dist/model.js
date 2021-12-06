class BudgetData {
    // Contains the same object data and methods as Expense and Income
    constructor(description, type, value) {
        this.description = description;
        this.type = type;
        this.value = value;
    }
}
export class Model {
    setTotals(total, expenseTotal, incomeTotal) {
        // Totals are calculated in controller
        this.total = total;
        this.expenseTotal = expenseTotal;
        this.incomeTotal = incomeTotal;
        console.log(this.total);
    }
    setIncomeValues(description, type, value) {
        const incomeObj = new BudgetData(description, type, value);
        incomeObj.description = description;
        incomeObj.type = type;
        incomeObj.value = value;
        this.saveIncomeObj({ incomeObj });
    }
    setExpenseValue(description, type, value) {
        const expenseObj = new BudgetData(description, type, value);
        expenseObj.description = description;
        expenseObj.type = type;
        expenseObj.value = value;
        this.saveExpenseObj(expenseObj);
    }
    saveIncomeObj(income) {
        // pushes income object into array
        console.log(income);
    }
    saveExpenseObj(expense) {
        // pushes expense object into array
        console.log(expense);
    }
    static log() {
        console.log("I am the view");
    }
}
