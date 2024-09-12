import { Pokemon } from "./pokemon.interface";
import { UserSingleton } from "./User";

export interface ResponseListPokemons {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[];
}


export class PokemonAPI {

    private static _instance?: PokemonAPI
    private _API_URL: string = "https://pokeapi.co/api/v2/pokemon/"
    private responseListPokemons?: ResponseListPokemons

    private constructor() {
        (async () => await this.init())();
    }

    static async getInstance(): Promise<PokemonAPI> {
        if (!this._instance) {
            this._instance = new PokemonAPI()
            await this._instance.init()
        }
        return this._instance
    }

    private async init(): Promise<void> {

        const userKeys = UserSingleton.instance.getKeys()
        if (!userKeys) throw Error("There aren't user's credentials")
        const isValidToken = userKeys.token.length > 0
        if (isValidToken === false) throw Error("token invalid")

        try {
            const fetchResponse = await fetch(this._API_URL)
            const response = await fetchResponse.json()
            this.responseListPokemons = response
        } catch (error) {

        }

    }

    public getCurrentListPokemons(): Pokemon[] {
        if (!this.responseListPokemons) return []
        return this.responseListPokemons.results
    }

    public async nextPage() {

        try {
            const fetchResponse = await fetch(this.responseListPokemons!.next)
            const response = await fetchResponse.json()
            this.responseListPokemons = response
        } catch (error) { }

    }

    public async previousPage() {

        try {
            const fetchResponse = await fetch(this.responseListPokemons!.next)
            const response = await fetchResponse.json()
            this.responseListPokemons = response
        } catch (error) { }

    }

}