import { LoginForm } from "../Models/LoginFormModel";
import { RegisterForm } from "../Models/RegisterFormModel";



//Classed used for user sign in and registration

export class UserDal{
    apiUrl:string;

    constructor(apiUrl:string){
        this.apiUrl = apiUrl;
    }

    RegisterUser(data:RegisterForm):void{
        //Get data from form to pass to api

        fetch(this.apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'email': data.email,
                'password':data.password

            }),
            })
            .then((res) => res.json())
            
} 

LoginUser(data:LoginForm):Promise<number>{
    //Get data from form to pass to api

    return fetch(`https://localhost:7242/api/Users/get_user_id`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: data.email,
            password:data.password

        }),
        })
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch(err => console.error(err));

        
} 
    
}