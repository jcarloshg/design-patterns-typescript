import { AirplaneBuilder } from "./Airplane.builder";
import { Passengers, WingsParams, AirplaneBody, WeaponsParams } from "./Types";
import { WarAirplaneModel } from "./WarAirplane.model";

export class WarAirplaneBuilder implements AirplaneBuilder {

    private _body?: AirplaneBody;
    private _seats?: Passengers[];
    private _wings?: WingsParams[];
    private _weapons?: WeaponsParams[];

    setPassengers(passenger: Passengers): void {
        if (!this._seats) {
            this._seats = [];
        }
        this._seats.push(passenger);
    }

    setLeftWing(wing: WingsParams): void {
        if (!this._wings) {
            this._wings = [];
        }
        this._wings.push(wing);
    }

    setRightWing(wing: WingsParams): void {
        if (!this._wings) {
            this._wings = [];
        }
        this._wings.push(wing);
    }

    setBody(body: AirplaneBody): void {
        this._body = body;
    }
    addWeapon(weapon: WeaponsParams): void {
        if (!this._weapons) {
            this._weapons = [];
        }
        this._weapons.push(weapon);
    }

    createDefaultAirplane(): void {
        this._body = {
            material: "Steel",
            size: "Large"
        };
        this._wings = [
            {
                material: "Steel",
                size: "Large",
            },
            {
                material: "Steel",
                size: "Large",
            }
        ];
        this._seats = [];
        this._weapons = [];
    }

    getAirplane(): WarAirplaneModel {

        if (!this._body || !this._wings || !this._seats || !this._weapons) {
            throw new Error("Airplane is not complete");
        }

        const airplane: WarAirplaneModel = {
            body: this._body,
            seats: this._seats,
            wings: this._wings,
            weapons: this._weapons,
        }

        return airplane;
    }

    reset(): void {
        this._body = undefined;
        this._seats = undefined;
        this._wings = undefined;
        this._weapons = undefined;
    }

}

