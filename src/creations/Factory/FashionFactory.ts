import { Boat, Clothe, Sweater } from "./Clothe";
import { ClothesAbstractFactory } from "./ClothesAbstractFactory";

export interface FashionBoat extends Boat {
    name: "FashionBoat"
}

export interface FashionSweater extends Sweater {
    name: "FashionSweater"
}

export class FashionFactory implements ClothesAbstractFactory {

    constructor() { }
    createBoats(size: Clothe["size"]): FashionBoat {
        return {
            name: "FashionBoat",
            size,
        }
    };

    createSweater(): FashionSweater {
        return {
            name: "FashionSweater",
            size: "l"
        }
    }

}