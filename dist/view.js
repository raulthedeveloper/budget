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
    clearField() {
        View.descriptionDom.value = null;
        View.amountDom.value = null;
        View.descriptionDom.focus();
    }
    static formValidation() {
        if (View.descriptionDom.value == "" || View.descriptionDom.value == null || View.amountDom.value == "" || View.amountDom.value == null) {
            View.submit.disabled = true;
        }
        else {
            View.submit.disabled = false;
        }
    }
    addToIncome(data) {
        //add to income column
        if (data.length > 0) {
            View.incomeColumn.innerHTML = "";
            data.forEach(e => {
                View.incomeColumn.innerHTML += `<div class="card mb-3"> <div class="card-header text-center d-flex justify-content-between"><span class="pl-5">${e.date}</span><span>X</span></div>
        <div class="card-body"><ul class="list-group"><li class="list-group-item">${e.desc}<span style="float:right">x</span></li><li class="list-group-item list-group-item-success">$<span>${e.amount}</span></li></ul> </div></div>`;
            });
        }
        this.clearField();
    }
    addToExpense(data) {
        //add to expense income
        if (data.length > 0) {
            View.expenseColumn.innerHTML = "";
            data.forEach(e => {
                View.expenseColumn.innerHTML += `<div class="card mb-3"> <div class="card-header text-center d-flex justify-content-between"><span class="pl-5">${e.date}</span><span>X</span></div><div class="card-body"><ul class="list-group"><li class="list-group-item">${e.desc}<span style="float:right">x</span></li><li class="list-group-item list-group-item-danger">$<span>${e.amount}</span></li></ul> </div></div>`;
            });
        }
        this.clearField();
    }
}
View.mainDisplayDom = document.getElementById('main-display');
View.displayIncomeTotal = document.getElementById('income-display');
View.displayExpenseTotal = document.getElementById('expense-display');
View.expenseColumn = document.getElementById('expense-column');
View.incomeColumn = document.getElementById('income-column');
View.descriptionDom = document.getElementById('description');
View.amountDom = document.getElementById('amount');
View.type = document.getElementById('type');
View.submit = document.getElementById('submit');
