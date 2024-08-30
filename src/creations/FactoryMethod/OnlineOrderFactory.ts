
import { OrderFactoryMethod } from "./OrderFactoryMethod";
import { OnlineOrder } from "./OnlineOrder";
import { Item } from "./Order";

export class OnlineOrderFactory extends OrderFactoryMethod {

    createOrder(items: Item[]): OnlineOrder {
        const orderOnline: OnlineOrder = new OnlineOrder(items);
        return orderOnline
    }

}