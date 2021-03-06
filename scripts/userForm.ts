import { BudgetItem } from "./Models/BudgetItemModel";
import { LoginForm } from "./Models/LoginFormModel";
import { RegisterForm } from "./Models/RegisterFormModel";
import { UserDal } from "./DAL/UserDal";
import  ApiEndpoints  from "./DAL/ApiEndPoints";
import { View } from "./view";
import { DataAccessLayer } from "./DAL/BudgetDal";
import { Model } from "./model";
import { appState } from "./Store/AppState";


export class UserForm {

    registerEmail:HTMLFormElement;
    registerPassword:HTMLFormElement;
    loginEmail:HTMLFormElement;
    loginPassword:HTMLFormElement;
    userDal = new UserDal(ApiEndpoints.users);
    view:View = new View();
    model:Model = new Model(0,0,0)
    userId:string;
    

    constructor(registerEmail:HTMLFormElement,registerPassword:HTMLFormElement,loginEmail:HTMLFormElement,loginPassword:HTMLFormElement)
    {
        this.registerEmail = registerEmail;
        this.registerPassword = registerPassword;
        this.loginEmail = loginEmail;
        this.loginPassword = loginPassword
    }

    getUserId():string{
        return this.userId;
    }

    async loadFromDb(id:string) {
 

        let dal:DataAccessLayer = new DataAccessLayer();
        //Saves id from database to object property to be used for future posts and calls
        this.userId = id;

        //Pass the id to the dal

        (await dal.get()).forEach((e:BudgetItem) => {
          this.model.saveDataToArr(e.id,this.userId, e.date, e.description, e.amount, e.type)
          this.view.addToIncome(this.model.getAllInc())
          this.view.addToExpense(this.model.getAllExp())

          
          
        this.model.setTotals(e.amount,e.type)

          
        })


          appState.userId = parseInt(id);
          appState.allExp = this.model.getAllExp();
          appState.allInc = this.model.getAllInc();
          appState.total = this.model.getTotals().total;
          appState.expenseTotal = this.model.getTotals().expenseTotal;
          appState.incomeTotal = this.model.getTotals().incomeTotal;

        this.view.setDisplayValue(this.model.total,this.model.incomeTotal,this.model.expenseTotal)
        
       
        this.model.eventListenersDelete();

    

    }

    registerUser():void{
        //Get user input from view
        this.userDal.RegisterUser(new RegisterForm(this.registerEmail.value,this.registerPassword.value));
        

        

        // Login all the user after register
        // this.loginEmail.innerHTML = this.registerEmail.value;
        // this.loginPassword.innerHTML = this.registerPassword.value;

        // this.signUserIn()


        // console.log(this.userId)

        this.view.clearColumns();
        this.model.clearAllData();

        View.closeRegisterBtn.click();
    }

    async signUserIn(){
        //Async call to data base and then returned Id is set to JSON
        this.userId = JSON.stringify(await (this.userDal.LoginUser(new LoginForm(this.loginEmail.value,this.loginPassword.value)))).toString();
        this.view.clearColumns();
        this.model.clearAllData();

        this.loadFromDb(this.userId);

        this.loginEmail.value = null;
        this.loginPassword.value = null;

        // Closes modal after submit
        View.closeSignInBtn.click();

    }
}