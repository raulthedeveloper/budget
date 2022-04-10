// Create connections to api
import { BudgetItem } from "../dataModels"
import { budgetInterface } from "../Interfaces/Interfaces"


export class DataAccessLayer {
    apiUrl:string

    constructor(apiUrl:string){
      this.apiUrl = apiUrl;
    }

    get(apiUrl):Promise<BudgetItem[]>{
     return fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            return data;

          })
          .catch(err => console.error(err));
    }

    put(id:number,item:BudgetItem):void{
      console.log(`id:${id} ${item}`)
    }

    post(item:BudgetItem):void{
      // id and date is removed from objects because database will assign values
      delete item.id
      delete item.date
      console.log(item)
    }

    delete(id:number, item:BudgetItem):void{
      console.log(`id:${id} ${item}`)
    }
}