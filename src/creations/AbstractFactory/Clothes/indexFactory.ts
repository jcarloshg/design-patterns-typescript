import { WinterFactory } from "./WinterFactory";
import { ClientFactory } from './ClientFactory';
import { FashionFactory } from "./FashionFactory";


console.log(`// ============================================================` );
console.log(`// winter factory ` );
console.log(`// ============================================================` );
const winterFactory = new WinterFactory();
const cliente1 = new ClientFactory(winterFactory);
cliente1.addBoats("s")
cliente1.addBoats("l")
cliente1.addSweater();
console.log(`[cliente1.getOutfit()] -> `, cliente1.getOutfit("m"));
cliente1.printTheCurrentClothes()


console.log(`// ============================================================` );
console.log(`// fashion factory ` );
console.log(`// ============================================================` );
const fashionFactory = new FashionFactory();
const cliente2 = new ClientFactory(fashionFactory);
cliente2.addBoats("l")
cliente2.addSweater()
cliente2.addSweater();
console.log(`[cliente2.getOutfit()] -> `, cliente2.getOutfit("m"));
cliente2.printTheCurrentClothes();