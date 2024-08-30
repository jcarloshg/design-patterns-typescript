
export type OrderStatus = "PAYED" | "WAITING_FOR_PAY" | "CANCELED";

export interface Item {
    name: string,
    cost: number,
}

export interface OrderObjet {
    items: Item[],
    status: OrderStatus,
    total: number,
}

export abstract class Order {

    protected _items: Item[]
    protected _status: OrderStatus

    constructor(items: Item[]) {
        this._items = items;
        this._status = "WAITING_FOR_PAY";
    }

    public addItem(item: Item) {
        this._items.push(item);
    }

    public pay(mount: number) {
        this._status = "PAYED"
    }

    public calculateTotal(): number {

        const totalWithOutTax = this._items
            .map(item => item.cost)
            .reduce((prev, current) => prev + current, 0);

        return totalWithOutTax;

    }

    public cancel() {
        this._status = "CANCELED"
    }

    public toObject(): OrderObjet {
        const orderObjet: OrderObjet = {
            items: this._items,
            status: this._status,
            total: this.calculateTotal()
        }
        return orderObjet
    }

}