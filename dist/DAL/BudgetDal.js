import ApiEndPoints from "./ApiEndPoints.js";
export class DataAccessLayer {
    constructor(apiUrl, userId) {
        this.apiUrl = apiUrl;
        this.userId = this.userId;
    }
    get(apiUrl) {
        return fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
            console.log(data);
            return data;
        })
            .catch(err => console.error(err));
    }
    put(id, item) {
        console.log(`id:${id} ${item}`);
    }
    post(item) {
        // id and date is removed from objects because database will assign values
        delete item.id;
        delete item.date;
        fetch(ApiEndPoints.budget, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'userId': item.userId,
                'description': item.description,
                'amount': item.amount,
                'type': item.type
            }),
        })
            .then((res) => res.json());
    }
    delete(id, item) {
        console.log(`id:${id} ${item}`);
    }
}
