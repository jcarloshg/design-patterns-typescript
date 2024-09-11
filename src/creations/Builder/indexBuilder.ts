import { CharacterBuilderDirector } from "./CharacterBuilderDirector";
import { CharacterBuilderModern } from "./CharacterBuilderModern";
import { CharacterBuilderPrehistoric } from "./CharacterBuilderPrehistoric";

export const indexBuilder = () => {

    const builderModern: CharacterBuilderModern = new CharacterBuilderModern()
    const builderDirector = new CharacterBuilderDirector(builderModern)

    const defaultCharacter = builderDirector.generateDefaultCharacter({ name: "Rosa" })
    defaultCharacter.printCharacter()
    defaultCharacter.run()

    const characterWithoutClothes = builderDirector.getCharacterWithoutClothes({ name: "Federico" })
    characterWithoutClothes.printCharacter()
    characterWithoutClothes.run()

    builderModern.generateNewCharacter({ name: "Roman" })
    builderModern.addHair({ style: "Copete" })
    builderModern.addShoes({ style: "combat boats" })
    const characterThree = builderModern.getCurrentCharacter()
    characterThree.printCharacter()
    characterThree.run()


    builderModern.generateNewCharacter({ name: "Andrea" })
    builderModern.addJacket({ style: "Piel" })
    builderModern.addPants({ style: "elegant" })
    const characterFour = builderModern.getCurrentCharacter()
    characterFour.printCharacter()
    characterFour.run()

    const builderPrehistoric: CharacterBuilderPrehistoric = new CharacterBuilderPrehistoric()
    builderDirector.setBuilderAbstract(builderPrehistoric)

    const defaultCharacter01 = builderDirector.generateDefaultCharacter({ name: "Daniela" })
    defaultCharacter01.printCharacter()
    defaultCharacter01.run()

    const characterWithOutClothes = builderDirector.getCharacterWithoutClothes({ name: "Peter" })
    characterWithOutClothes.printCharacter()
    characterWithOutClothes.run()

    builderPrehistoric.generateNewCharacter({ name: "Babels" })
    builderPrehistoric.addHair({ style: "revuelto" })
    builderPrehistoric.addShoes({ style: "trozos de piel" })
    const prehistoric01 = builderPrehistoric.getCurrentCharacter()
    prehistoric01.printCharacter()
    prehistoric01.run()

    builderPrehistoric.generateNewCharacter({ name: "Pedro Picapiedra" })
    builderPrehistoric.addHair({ style: "pelón" })
    builderPrehistoric.addShoes({ style: "piel de leopardo" })
    builderPrehistoric.addPants({ style: "piel de mamut" })
    builderPrehistoric.addJacket({ style: "hojas de arboles" })
    const prehistoric02 = builderPrehistoric.getCurrentCharacter()
    prehistoric02.printCharacter()
    prehistoric02.run()


}

indexBuilder()