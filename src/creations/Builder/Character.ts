export type TypeCharacter = "Modern" | "Prehistoric"
export type StateCharacter = "Running" | "Idle"

export class Character {

    private _typeCharacter: TypeCharacter
    private _state: StateCharacter
    private _name: String;
    private _hair?: string;
    private _jacket?: string;
    private _pants?: string;
    private _shoes?: string;

    constructor({ typeCharacter, name }: { typeCharacter: TypeCharacter, name: String }) {
        this._typeCharacter = typeCharacter
        this._state = 'Idle';
        this._name = name
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
        console.log(`${this._name} is type -> `, this._typeCharacter);
        this._hair && console.log(`${this._name} has hair -> `, this._hair);
        this._jacket && console.log(`${this._name} has jacket -> `, this._jacket);
        this._pants && console.log(`${this._name} has pants -> `, this._pants);
        this._shoes && console.log(`${this._name} has shoes -> `, this._shoes);
        console.log("====== ====== ====== ======")
    }

    // ============================================================
    // actions
    // ============================================================

    public run() {
        if (!this._shoes) return "The character doesn't run. The character doesn't have shoes"
        this._state = "Running"
        console.log("The character is: ", this._state);
    }

}
