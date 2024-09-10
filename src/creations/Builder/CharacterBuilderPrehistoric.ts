import { Character } from "./Character";
import { CharacterBuilderAbstract } from "./CharacterBuilderAbstract";

export class CharacterBuilderPrehistoric implements CharacterBuilderAbstract {

    private _character: Character | undefined;

    generateNewCharacter({ name }: { name: String }): void {
        this._character = new Character({ typeCharacter: "Prehistoric", name })
    }

    getCurrentCharacter(): Character {
        if (this._character) return this._character
        throw new Error("You need to run [generateNewCharacter({name:string})]");
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