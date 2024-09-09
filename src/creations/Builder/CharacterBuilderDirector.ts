import { Character } from "./Character";
import { CharacterBuilderAbstract } from "./CharacterBuilderAbstract";



export class CharacterBuilderDirector {

    private _characterBuilderAbstract: CharacterBuilderAbstract

    constructor(_characterBuilderAbstract: CharacterBuilderAbstract) {
        this._characterBuilderAbstract = _characterBuilderAbstract
    }

    public setBuilderAbstract(_characterBuilderAbstract: CharacterBuilderAbstract) {
        this._characterBuilderAbstract = _characterBuilderAbstract
    }

    public generateDefaultCharacter(): Character {
        this._characterBuilderAbstract.generateNewCharacter()
        this._characterBuilderAbstract.addHair({ style: "normal" })
        this._characterBuilderAbstract.addJacket({ style: "normal" })
        this._characterBuilderAbstract.addPants({ style: "normal" })
        this._characterBuilderAbstract.addShoes({ style: "normal" })
        const currentCharacter = this._characterBuilderAbstract.getCurrentCharacter()
        this._characterBuilderAbstract.generateNewCharacter()
        return currentCharacter;
    }

    public getCharacterWithoutClothes(): Character {
        this._characterBuilderAbstract.generateNewCharacter()
        return this._characterBuilderAbstract.getCurrentCharacter()
    }

}