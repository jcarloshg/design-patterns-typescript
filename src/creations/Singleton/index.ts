import { PaginatorPokemons } from "./PaginatorPokemons"
import { PokemonAPI } from "./PokemonAPI"
import { PrinterPokemons } from "./PrinterPokemons"
import { UserSingleton } from "./User"

export const index = async () => {

    UserSingleton.instance.setKeys({ userName: "jcarloshg654", token: "okij-uhyg2346-wert3459-aavb876" })

    const printerPokemons = new PrinterPokemons(await PokemonAPI.getInstance())
    const paginatorPokemons = new PaginatorPokemons(await PokemonAPI.getInstance())

    printerPokemons.print()

    await paginatorPokemons.next()
    await paginatorPokemons.next()
    printerPokemons.print()

    await paginatorPokemons.previous()
    printerPokemons.print()

}

index()