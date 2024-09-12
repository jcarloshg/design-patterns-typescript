import { PokemonAPI } from "./PokemonAPI";

export class PrinterPokemons {

    constructor(
        private readonly _pokemonApi: PokemonAPI,
    ) { }

    public print() {
        const pokemons = this._pokemonApi.getCurrentListPokemons()
        if (pokemons.length === 0) {
            console.log(`// ============================================================`);
            console.log(`// there isn't pokemons `);
            console.log(`// ============================================================`);
        }
        console.log("\n The current page contains");
        pokemons.forEach(pokemon => console.log(`name:  ${pokemon.name}, url: ${pokemon.url}`))
    }


}