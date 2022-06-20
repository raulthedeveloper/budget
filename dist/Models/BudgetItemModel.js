export class BudgetItem {
    constructor(id, userId, date, desc, amount, type) {
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.description = desc;
        this.amount = amount;
        this.type = type;
    }
}
