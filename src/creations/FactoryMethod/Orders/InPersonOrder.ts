
import { Item, Order } from "./Order";

export class InPersonOrder extends Order {

    constructor(items: Item[]) {
        super(items)
    }

    // here add more properties if you considere necessary
    // add method to complete the orden online

}