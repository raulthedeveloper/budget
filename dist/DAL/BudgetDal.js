var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
            return data;
        })
            .catch(err => console.error(err));
    }
    getLastItem(id) {
        return fetch(ApiEndPoints.getLastItem + id)
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
        return __awaiter(this, void 0, void 0, function* () {
            // id and date is removed from objects because database will assign values
            delete item.id;
            delete item.date;
            console.log("Post ran");
            yield fetch(ApiEndPoints.budget, {
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
        });
    }
    delete(id, item) {
        console.log(`id:${id} ${item}`);
    }
}
