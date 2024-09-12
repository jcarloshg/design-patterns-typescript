export class PokemonAPI {

    private pokemonSelected?: {};

    private constructor() { }

    static get instance(): PokemonAPI {
        return new PokemonAPI()
    }

    public listPokemons(): {}[] {
        return []
    }

}