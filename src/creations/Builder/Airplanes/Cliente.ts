import { AirplaneDirectorBuilder } from "./AirplaneDirectorBuilder";
import { ToyAirplaneBuilder } from "./ToyAirplane.builder"
import { WarAirplaneBuilder } from "./WarAirplane.builder";

export const Cliente = () => {
    const toyAirplaneBuilder = new ToyAirplaneBuilder();

    const airplaneDirectorBuilder = new AirplaneDirectorBuilder(toyAirplaneBuilder);
    const toyDefault = airplaneDirectorBuilder.createDefaultAirplane();
    const toyBig = airplaneDirectorBuilder.createBig();
    const toyPrototype = airplaneDirectorBuilder.createPrototype();

    console.log("\n toy airplanes:");
    console.log("Toy Airplane Default: ", toyDefault);
    console.log("Toy Airplane Big: ", toyBig);
    console.log("Toy Airplane Prototype: ", toyPrototype);

    const warAirplane = new WarAirplaneBuilder();
    airplaneDirectorBuilder.setBuilder(warAirplane);
    const warDefault = airplaneDirectorBuilder.createDefaultAirplane();
    const warBig = airplaneDirectorBuilder.createBig();
    const warPrototype = airplaneDirectorBuilder.createPrototype();

    console.log("\n war airplanes:");
    console.log("War Airplane Default: ", warDefault);
    console.log("War Airplane Big: ", warBig);
    console.log("War Airplane Prototype: ", warPrototype);

}

Cliente()