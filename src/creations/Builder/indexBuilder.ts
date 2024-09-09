import { CharacterBuilderDirector } from "./CharacterBuilderDirector";
import { CharacterBuilderModern } from "./CharacterBuilderModern";

export const indexBuilder = () => {

    const characterBuilderModern: CharacterBuilderModern = new CharacterBuilderModern()
    const builderDirector = new CharacterBuilderDirector(characterBuilderModern)

    const defaultCharacter = builderDirector.generateDefaultCharacter()
    defaultCharacter.printCharacter()

    const characterWithoutClothes = builderDirector.getCharacterWithoutClothes()
    characterWithoutClothes.printCharacter()

    characterBuilderModern.generateNewCharacter()
    characterBuilderModern.addHair({ style: "Copete" })
    characterBuilderModern.addShoes({ style: "combat boats" })
    const characterThree = characterBuilderModern.getCurrentCharacter()
    characterThree.printCharacter()


    characterBuilderModern.generateNewCharacter()
    characterBuilderModern.addJacket({ style: "Piel" })
    characterBuilderModern.addPants({ style: "elegant" })
    const characterFour = characterBuilderModern.getCurrentCharacter()
    characterFour.printCharacter()

}

indexBuilder()