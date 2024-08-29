import { Boat, Clothe, Sweater } from "./Clothe";
import { ClothesAbstractFactory } from "./ClothesAbstractFactory";

export class ClientFactory {

    private clothes: Clothe[] = [];

    constructor(private readonly clotheFactory: ClothesAbstractFactory) { }

    public getOutfit(): { boats: Boat, sweater: Sweater } {
        const boats = this.clotheFactory.createBoats();
        const sweater = this.clotheFactory.createSweater();
        const outfitCreated = { boats, sweater };
        return outfitCreated
    }

    public addBoats() {
        const boats = this.clotheFactory.createBoats();
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

