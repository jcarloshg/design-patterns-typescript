// modern
// pre hispanic

import { CharacterBuilderAbstract } from "./CharacterBuilderAbstract";
import { Character } from "./Character";

export class CharacterBuilderModern implements CharacterBuilderAbstract {

    private _character: Character;

    constructor() {
        this._character = new Character({ typeCharacter: "Modern" })
    }

    generateNewCharacter(): void {
        this._character = new Character({ typeCharacter: "Modern" })
    }

    getCurrentCharacter(): Character {
        return this._character
    }

    addHair({ style }: { style: string; }): void {
        this._character.set_hair({ data: style })
    }

    addJacket({ style }: { style: string; }): void {
        this._character.set_jacket({ data: style })
    }

    addPants({ style }: { style: string; }): void {
        this._character.set_pants({ data: style })
    }

    addShoes({ style }: { style: string; }): void {
        this._character.set_pants({ data: style })
    }

}