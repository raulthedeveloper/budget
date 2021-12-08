export class View {
    setDisplayValue(mainDisplay, incomeTotal, expenseTotal) {
        // Sets the display value
        View.mainDisplayDom.innerHTML = mainDisplay.toString();
        View.displayIncomeTotal.innerHTML = incomeTotal.toString();
        View.displayExpenseTotal.innerHTML = expenseTotal.toString();
    }
    addBudgetItems(data, type) {
        if (type == 'income') {
            console.log(data);
        }
        if (type == 'expense') {
            console.log(data);
        }
    }
    static log() {
        console.log("I am the view");
    }
}
View.mainDisplayDom = document.getElementById('main-display');
View.displayIncomeTotal = document.getElementById('income-display');
View.displayExpenseTotal = document.getElementById('expense-display');
View.descriptionDom = document.getElementById('description');
View.amountDom = document.getElementById('amount');
View.type = document.getElementById('type');
View.submit = document.getElementById('submit');
