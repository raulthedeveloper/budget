export class Form {
}
export class FormRegister extends Form {
}
export class BudgetItem {
    constructor(id, date, desc, amount, type) {
        this.id = id;
        this.date = date;
        this.desc = desc;
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
