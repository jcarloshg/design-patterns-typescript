export type TypeCharacter = "Modern" | "PreHispanic"

export class Character {

    private _typeCharacter: TypeCharacter
    private _hair?: string;
    private _jacket?: string;
    private _pants?: string;
    private _shoes?: string;

    constructor({ typeCharacter }: { typeCharacter: TypeCharacter }) {
        this._typeCharacter = typeCharacter
    }

    public set_hair({ data }: { data: string }) {
        this._hair = data
    }

    public set_jacket({ data }: { data: string }) {
        this._jacket = data
    }

    public set_pants({ data }: { data: string }) {
        this._pants = data
    }

    public set_shoes({ data }: { data: string }) {
        this._shoes = data
    }


    public printCharacter(): void {
        console.log("\n\n======character")
        console.log(`[TYPE] -> `, this._typeCharacter);
        this._hair && console.log(`[HAIR] -> `, this._hair);
        this._jacket && console.log(`[JACKET] -> `, this._jacket);
        this._pants && console.log(`[PANTS] -> `, this._pants);
        this._shoes && console.log(`[SHOES] -> `, this._shoes);
        console.log("====== ====== ====== ======")
    }

}
