import { AirplaneBody, Passengers, WeaponsParams, WingsParams } from "./Types";

export interface ToyAirplaneModel {
    passenger: Passengers,
    wings: {
        left: WingsParams,
        right: WingsParams,
    },
    body: AirplaneBody,
    weapons: WeaponsParams[],
}