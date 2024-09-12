import { PokemonAPI } from "./PokemonAPI";

export class PaginatorPokemons {

    constructor(
        private readonly _pokemonApi: PokemonAPI,
    ) { }

    public async next() { await this._pokemonApi.nextPage() }

    public async previous() { await this._pokemonApi.previousPage() }
}