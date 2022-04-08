export class DataAccessLayer {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }
    get() {
        return fetch(this.apiUrl)
            .then(response => response.json())
            .then(data => {
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
        console.log(item);
    }
    delete(id, item) {
        console.log(`id:${id} ${item}`);
    }
}
