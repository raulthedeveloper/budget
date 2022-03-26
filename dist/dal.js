export class DataAccessLayer {
    constructor() {
    }
    get() {
        return [
            {
                id: 123,
                date: "2/11/22",
                desc: "Rent",
                amount: 1111,
                type: "expense"
            },
            {
                id: 1223,
                date: "2/11/22",
                desc: "Car Payment",
                amount: 400,
                type: "expense"
            },
            {
                id: 12323,
                date: "2/11/22",
                desc: "Paycheck",
                amount: 2000,
                type: "income"
            },
        ];
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
