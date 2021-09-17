class BudgetData {
    // Contains the same object data and methods as Expense and Income
    constructor(description,type,value){
        this.description,
        this.type,
        this.value
    }
}



class Expense extends BudgetData{
    // Creates a Expense object that gets sent to controller and then view
}

class Income extends BudgetData{
        // Creates a Income object that gets sent to controller and then view

}


export class Model {
    // User getters and setters to access data

    get(){

    }

    set(){

    }

    static log(){
          console.log("I am the view"); 
      }
  }