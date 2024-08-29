import { Boat, Sweater } from "./Clothe";
import { ClothesAbstractFactory } from "./ClothesAbstractFactory";

export interface WinterBoat extends Boat {
    name: "BoatsWinter",
}

export interface WinterSweater extends Sweater {
    name: "WinterSweater",
}

export class WinterFactory implements ClothesAbstractFactory {

    constructor() { }

    createBoats(): WinterBoat {
        return {
            name: "BoatsWinter",
            size: "l"
        }
    }

    createSweater(): WinterSweater {
        return {
            name: "WinterSweater",
            size: "l"
        }
    }
}