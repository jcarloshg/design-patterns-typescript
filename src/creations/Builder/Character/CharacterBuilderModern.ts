
// Prehistoric

import { CharacterBuilderAbstract } from "./CharacterBuilderAbstract";
import { Character } from "./Character";

export class CharacterBuilderModern implements CharacterBuilderAbstract {

    private _character: Character | undefined;

    generateNewCharacter({ name }: { name: String }): void {
        this._character = new Character({ typeCharacter: "Modern", name })
    }

    getCurrentCharacter(): Character {
        if (!this._character) throw new Error("You need to run [generateNewCharacter({name:string})]");
        return this._character
    }

    dropCurrentCharacter(): void {
        this._character = undefined
    }

    addHair({ style }: { style: string; }): void {
        if (!this._character) throw new Error("You need to run [generateNewCharacter({name:string})]");
        this._character.set_hair({ data: style })
    }

    addJacket({ style }: { style: string; }): void {
        if (!this._character) throw new Error("You need to run [generateNewCharacter({name:string})]");
        this._character.set_jacket({ data: style })
    }

    addPants({ style }: { style: string; }): void {
        if (!this._character) throw new Error("You need to run [generateNewCharacter({name:string})]");
        this._character.set_pants({ data: style })
    }

    addShoes({ style }: { style: string; }): void {
        if (!this._character) throw new Error("You need to run [generateNewCharacter({name:string})]");
        this._character.set_pants({ data: style })
    }

}