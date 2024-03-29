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
    budgetCardHtml(income, id, description, amount) {
        return `<div id="${id}" class="card mb-3"> <div class="card-header text-center d-flex justify-content-between"><span class="pl-5">${id}</span><span id="inc-${id}"  class="delete-button">X</span></div>
    <div class="card-body"><ul class="list-group"><li class="list-group-item">${description}</li><li class="list-group-item list-group-item-${income ? 'success' : 'danger'}">$<span>${amount}</span></li></ul> <button class="btn btn-dark mt-3" style="
    ">Edit</button> </div></div>`;
    }
    addToIncome(data) {
        //add to income column
        if (data.length > 0) {
            View.incomeColumn.innerHTML = "";
            data.forEach((e) => {
                View.incomeColumn.innerHTML += this.budgetCardHtml(true, e.id, e.description, e.amount);
            });
        }
        this.clearField();
    }
    clearColumns() {
        View.expenseColumn.innerHTML = "";
        View.incomeColumn.innerHTML = "";
    }
    addToExpense(data) {
        //add to expense income
        console.log(data);
        if (data.length > 0) {
            View.expenseColumn.innerHTML = "";
            data.forEach((e) => {
                View.expenseColumn.innerHTML += this.budgetCardHtml(false, e.id, e.description, e.amount);
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
View.email_login = document.getElementById('email_login');
View.email_register = document.getElementById('email_register');
View.password_login = document.getElementById("password_login");
View.password_register = document.getElementById("password_register");
View.submit_user_register = document.getElementById('submit_user_register');
View.submit_user_login = document.getElementById('submit_user_login');
View.closeSignInBtn = document.getElementById("close-signin");
View.closeRegisterBtn = document.getElementById("close-signup");
