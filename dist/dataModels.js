export class LoginForm {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
export class RegisterForm extends LoginForm {
}
export class BudgetItem {
    constructor(id, date, desc, amount, type) {
        this.id = id;
        this.date = date;
        this.description = desc;
        this.amount = amount;
        this.type = type;
    }
}
export class BudgetUI {
    constructor(income, expense, total) {
        this.income = income;
        this.expense = expense;
        this.total;
    }
}
