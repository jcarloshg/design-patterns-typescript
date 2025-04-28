import { AirplaneBody, Passengers, WeaponsParams, WingsParams } from "./Types";

export interface WarAirplaneModel {
    body: AirplaneBody;
    seats: Passengers[];
    wings: WingsParams[];
    weapons: WeaponsParams[];
}