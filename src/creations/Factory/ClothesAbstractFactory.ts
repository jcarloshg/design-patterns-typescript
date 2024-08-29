import { Boat, Sweater } from "./Clothe";

export interface ClothesAbstractFactory {
    createBoats: () => Boat;
    createSweater: () => Sweater;
}
