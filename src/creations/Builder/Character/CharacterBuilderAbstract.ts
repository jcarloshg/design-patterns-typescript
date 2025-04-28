import { Character } from "./Character";

export abstract class CharacterBuilderAbstract {

    abstract generateNewCharacter({ name }: { name: String }): void
    abstract dropCurrentCharacter(): void
    abstract getCurrentCharacter(): Character

    abstract addHair({ style }: { style: string }): void
    abstract addJacket({ style }: { style: string }): void
    abstract addPants({ style }: { style: string }): void
    abstract addShoes({ style }: { style: string }): void

}