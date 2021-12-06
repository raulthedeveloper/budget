export class View {
    constructor(mainDisplayDom, displayIncomeTotal, displayExpenseTotal, descriptionDom, amountDom) {
        this.mainDisplayDom = mainDisplayDom;
        this.displayIncomeTotal = displayIncomeTotal;
        this.displayExpenseTotal = displayExpenseTotal;
        this.descriptionDom = descriptionDom;
        this.amountDom = amountDom;
    }
    getDomNodes() {
        const domElements = {
            mainDisplayDom: this.mainDisplayDom,
            descriptionDom: this.descriptionDom,
            displayIncomeTotal: this.displayIncomeTotal,
            displayExpenseTotal: this.displayExpenseTotal,
            amountDom: this.amountDom
        };
        // return dom nodes
        return domElements;
    }
    setDisplayValue(mainDisplay, incomeTotal, expenseTotal) {
        // Sets the display value
        this.mainDisplayDom.innerHTML = mainDisplay.toString();
        this.displayIncomeTotal.innerHTML = incomeTotal.toString();
        this.displayExpenseTotal.innerHTML = expenseTotal.toString();
    }
    static log() {
        console.log("I am the view");
    }
}
