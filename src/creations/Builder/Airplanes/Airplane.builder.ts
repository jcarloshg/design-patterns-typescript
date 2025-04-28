import { AirplaneBody, Passengers, WeaponsParams, WingsParams } from "./Types";

export interface AirplaneBuilder {
    setPassengers(passenger: Passengers): void;
    setLeftWing(wing: WingsParams): void;
    setRightWing(wing: WingsParams): void;
    setBody(body: AirplaneBody): void;
    addWeapon(weapon: WeaponsParams): void;
    createDefaultAirplane(): void;
    getAirplane(): void;
    reset(): void;
}
