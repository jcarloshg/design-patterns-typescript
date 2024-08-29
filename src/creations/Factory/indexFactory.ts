import { WinterFactory } from "./WinterFactory";
import { ClientFactory } from './ClientFactory';
import { FashionFactory } from "./FashionFactory";

console.log(`\n\n======= winter factory`);
const winterFactory = new WinterFactory();
const cliente1 = new ClientFactory(winterFactory);
cliente1.addBoats()
cliente1.addBoats()
cliente1.addSweater();
console.log(`[cliente1.getOutfit()] -> `, cliente1.getOutfit());
cliente1.printTheCurrentClothes()

console.log(`\n\n======= fashion factory`);
const fashionFactory = new FashionFactory();
const cliente2 = new ClientFactory(fashionFactory);
cliente2.addBoats()
cliente2.addSweater()
cliente2.addSweater();
console.log(`[cliente2.getOutfit()] -> `, cliente2.getOutfit());
cliente2.printTheCurrentClothes();