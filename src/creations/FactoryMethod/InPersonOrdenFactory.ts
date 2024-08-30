
import { InPersonOrder } from "./InPersonOrder";
import { Item } from "./Order";
import { OrderFactoryMethod } from "./OrderFactoryMethod";

export class InPersonOrderFactory extends OrderFactoryMethod {

    createOrder(items: Item[]): InPersonOrder {
        const orderOnline: InPersonOrder = new InPersonOrder(items);
        return orderOnline
    }

}
