import { Boat, Clothe, Sweater } from "./Clothe";
import { ClothesAbstractFactory } from "./ClothesAbstractFactory";

export interface WinterBoat extends Boat {
    name: "BoatsWinter",
}

export interface WinterSweater extends Sweater {
    name: "WinterSweater",
}

export class WinterFactory implements ClothesAbstractFactory {

    constructor() { }

    createBoats(size: Clothe["size"]): WinterBoat {
        return {
            name: "BoatsWinter",
            size,
        }
    }

    createSweater(): WinterSweater {
        return {
            name: "WinterSweater",
            size: "l"
        }
    }
}