//Classed used for user sign in and registration
export class UserDal {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }
    RegisterUser(data) {
        //Get data from form to pass to api
        console.log(data);
        fetch(this.apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'email': data.email,
                'password': data.password
            }),
        })
            .then((res) => res.json());
    }
    LoginUser(data) {
        //Get data from form to pass to api
        console.log(data);
        // fetch(`${this.apiUrl}/Authenticate`, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         'email': data.email,
        //         'password':data.password
        //     }),
        //     })
        //     .then((res) => res.json())
    }
}
