import { Boat, Clothe, Sweater } from "./Clothe";

export interface ClothesAbstractFactory {
    createBoats: (size: Clothe['size']) => Boat;
    createSweater: () => Sweater;
}
