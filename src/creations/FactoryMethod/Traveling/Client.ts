import { AirplaneTravelFactoryMethod } from "./AirplaneTravel";
import { BusTravelFactoryMethod } from "./BusTravel";
import { TravelFactoryMethod } from "./TravelFactoryMethod";

export const Client = async (TravelFactoryMethod: TravelFactoryMethod) => {
    console.log("Client: Creating travel...");
    const travel = await TravelFactoryMethod.createTravel();
    console.log(travel.toObject());
    await travel.startTravel();
    await travel.endTravel();
    console.log("Client: Travel ended.");
}

(async () => {
    await Client(new AirplaneTravelFactoryMethod());
    await Client(new BusTravelFactoryMethod());
})()