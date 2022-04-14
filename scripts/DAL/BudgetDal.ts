// Create connections to api
import { BudgetItem } from "../dataModels.js"
import { budgetInterface } from "../Interfaces/Interfaces.js"
import ApiEndPoints from "./ApiEndPoints.js";


export class DataAccessLayer {
    apiUrl:string
    userId: string

    constructor(apiUrl:string,userId:string){
      this.apiUrl = apiUrl;
      this.userId = this.userId
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

    getLastItem(id:number):Promise<BudgetItem>{
      console.log("getLastItem ran")
      return fetch(ApiEndPoints.getLastItem+id)
          .then(response => response.json())
          .then(data => {
            return data;

          })
          .catch(err => console.error(err))
    }

    put(id:number,item:BudgetItem):void{
      console.log(`id:${id} ${item}`)
    }

    async post(item:BudgetItem){
      // id and date is removed from objects because database will assign values
      delete item.id
      delete item.date
      console.log("Post ran")

     await fetch(ApiEndPoints.budget, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'userId': item.userId,
            'description':item.description,
            'amount':item.amount,
            'type':item.type


        }),
        })
        .then((res) => res.json())
    }

    delete(id:number, item:BudgetItem):void{
      console.log(`id:${id} ${item}`)
    }
}