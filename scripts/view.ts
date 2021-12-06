interface ViewInterface {
  mainDisplayDom:HTMLElement;
  displayIncomeTotal:HTMLElement;
  displayExpenseTotal:HTMLElement;
  descriptionDom:HTMLElement;
  amountDom:HTMLElement;
}



export class View implements ViewInterface{
  
constructor(public mainDisplayDom: HTMLElement, public displayIncomeTotal:HTMLElement, public displayExpenseTotal:HTMLElement, public descriptionDom:HTMLElement, public amountDom:HTMLElement){}


  getDomNodes():object
  {
    const domElements = {
     mainDisplayDom : this.mainDisplayDom,
      descriptionDom: this.descriptionDom,
      displayIncomeTotal: this.displayIncomeTotal,
      displayExpenseTotal: this.displayExpenseTotal,
      amountDom: this.amountDom
    }
    // return dom nodes

    return domElements;
  }

  setDisplayValue(mainDisplay:number,incomeTotal:number,expenseTotal:number):void
  {
    // Sets the display value
    this.mainDisplayDom.innerHTML = mainDisplay.toString();
    this.displayIncomeTotal.innerHTML = incomeTotal.toString();
    this.displayExpenseTotal.innerHTML = expenseTotal.toString();
  }

  static log():void
  {
        console.log("I am the view"); 
    }


}