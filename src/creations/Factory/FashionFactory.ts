import { Boat, Sweater } from "./Clothe";
import { ClothesAbstractFactory } from "./ClothesAbstractFactory";

export interface FashionBoat extends Boat {
    name: "FashionBoat"
}

export interface FashionSweater extends Sweater {
    name: "FashionSweater"
}

export class FashionFactory implements ClothesAbstractFactory {

    constructor() { }

    createBoats(): FashionBoat {
        return {
            name: "FashionBoat",
            size: "l"
        }
    }

    createSweater(): FashionSweater {
        return {
            name: "FashionSweater",
            size: "l"
        }
    }

}