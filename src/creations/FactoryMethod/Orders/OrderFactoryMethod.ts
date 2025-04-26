import { Item, Order } from "./Order";

export abstract class OrderFactoryMethod {

    abstract createOrder(items: Item[]): Order;

}