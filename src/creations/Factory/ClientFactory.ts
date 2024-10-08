import { Boat, Clothe, Sweater } from "./Clothe";
import { ClothesAbstractFactory } from "./ClothesAbstractFactory";

export class ClientFactory {

    private clothes: Clothe[] = [];

    constructor(private readonly clotheFactory: ClothesAbstractFactory) { }

    public getOutfit(boatSize: Clothe["size"]): { boats: Boat, sweater: Sweater } {
        const boats = this.clotheFactory.createBoats(boatSize);
        const sweater = this.clotheFactory.createSweater();
        const outfitCreated = { boats, sweater };
        return outfitCreated
    }

    public addBoats(size: Clothe["size"]) {
        const boats = this.clotheFactory.createBoats(size);
        this.clothes.push(boats);
    }

    public addSweater() {
        const sweater = this.clotheFactory.createSweater()
        this.clothes.push(sweater);
    }

    public printTheCurrentClothes() {
        console.log(`[this.clothes] -> `, this.clothes);
    }

}

