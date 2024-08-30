import { OrderFactoryMethod } from "./OrderFactoryMethod";
import { Item } from './Order';
import { InPersonOrderFactory } from './InPersonOrdenFactory';
import { OnlineOrderFactory } from "./OnlineOrderFactory";

export const runFactoryMethod = (factoryMethod: OrderFactoryMethod) => {

    console.log(`// ============================================================`);
    console.log(`// order to cancel `);
    console.log(`// ============================================================`);

    const itemsToCancel: Item[] = [
        { name: "Tennis", cost: 1200.43 },
        { name: "TV", cost: 5487.12 },
        { name: "Laptop", cost: 16708.56 },
        { name: "Lollypop", cost: 4.50 },
    ]

    const orderToCancel = factoryMethod.createOrder(itemsToCancel)

    orderToCancel.addItem({ name: "Bottle water", cost: 10.01 })

    console.log(`[get the total] -> `, orderToCancel.calculateTotal());
    console.log(`[the object of order] -> `, orderToCancel.toObject());
    console.log(`[cancel the order] -> `, orderToCancel.cancel());
    console.log(`[the object of order] -> `, orderToCancel.toObject());



    console.log(`// ============================================================`);
    console.log(`// order to pay `);
    console.log(`// ============================================================`);

    const itemsToPay: Item[] = [
        { name: "Tennis", cost: 1200.43 },
        { name: "TV", cost: 5487.12 },
    ]

    const orderToPay = factoryMethod.createOrder(itemsToPay)

    orderToPay.addItem({ name: "Mouse", cost: 134.01 })

    console.log(`[get the total] -> `, orderToCancel.calculateTotal());
    console.log(`[the object of order] -> `, orderToCancel.toObject());
    console.log(`[cancel the order] -> `, orderToCancel.pay(130.76));
    console.log(`[the object of order] -> `, orderToCancel.toObject());


}


runFactoryMethod(new InPersonOrderFactory())

console.log('\n\n\n');

runFactoryMethod(new OnlineOrderFactory())