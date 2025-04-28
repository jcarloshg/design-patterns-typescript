import { AirplaneBuilder } from "./Airplane.builder";
import { ToyAirplaneModel } from "./ToyAirplane.model";
import { Passengers, WingsParams, AirplaneBody, WeaponsParams } from "./Types";

export class ToyAirplaneBuilder implements AirplaneBuilder {

    private _passenger?: Passengers;
    private _leftWing?: WingsParams;
    private _rightWing?: WingsParams;
    private _body?: AirplaneBody;
    private _weapons?: WeaponsParams[];

    setPassengers(passenger: Passengers): void {
        this._passenger = passenger;
    }

    setLeftWing(wing: WingsParams): void {
        this._leftWing = wing;
    }

    setRightWing(wing: WingsParams): void {
        this._rightWing = wing;
    }

    setBody(body: AirplaneBody): void {
        this._body = body;
    }

    createDefaultAirplane(): void {
        this._passenger = 1
        this._leftWing = {
            material: "Plastic",
            size: "Small",
        };
        this._rightWing = {
            material: "Plastic",
            size: "Small",
        };
        this._body = {
            material: "Plastic",
            size: "Small"
        };
        this._weapons = [];
    }

    addWeapon(weapon: WeaponsParams): void {
        if (!this._weapons) {
            this._weapons = [];
        }
        this._weapons.push(weapon);
    }

    getAirplane(): ToyAirplaneModel {
        if (!this._passenger || !this._leftWing || !this._rightWing || !this._body || !this._weapons) {
            throw new Error("Airplane is not complete");
        }

        return {
            passenger: this._passenger,
            wings: {
                left: this._leftWing,
                right: this._rightWing,
            },
            body: this._body,
            weapons: this._weapons,
        };
    }

    reset(): void {
        this._passenger = undefined;
        this._leftWing = undefined;
        this._rightWing = undefined;
        this._body = undefined;
        this._weapons = undefined;
    }

}
