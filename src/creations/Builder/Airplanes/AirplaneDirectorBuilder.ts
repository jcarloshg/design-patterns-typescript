import { AirplaneBuilder } from "./Airplane.builder";

export class AirplaneDirectorBuilder {

    private _airplaneBuilder: AirplaneBuilder;

    constructor(airplaneBuilder: AirplaneBuilder) {
        this._airplaneBuilder = airplaneBuilder;
    }

    public createDefaultAirplane(): any {
        this._airplaneBuilder.createDefaultAirplane();
        return this._airplaneBuilder.getAirplane();
    }

    public createBig(): any {
        this._airplaneBuilder.setPassengers(1);
        this._airplaneBuilder.setPassengers(2);
        this._airplaneBuilder.setLeftWing({
            material: "steel",
            size: "big",
        })
        this._airplaneBuilder.setRightWing({
            material: "steel",
            size: "big",
        });
        this._airplaneBuilder.setBody({
            material: "steel",
            size: "big",
        });
        this._airplaneBuilder.addWeapon({
            position: "left",
            size: "big",
            type: "missile",
            typeAmmunition: "explosive",
        });
        this._airplaneBuilder.addWeapon({
            position: "right",
            size: "small",
            type: "guns",
            typeAmmunition: "expansive",
        });
        return this._airplaneBuilder.getAirplane();
    }

    public createPrototype(): any {
        this._airplaneBuilder.setPassengers(1);
        this._airplaneBuilder.setPassengers(2);
        this._airplaneBuilder.setPassengers(1);
        this._airplaneBuilder.setLeftWing({
            material: "steel",
            size: "big",
        })
        this._airplaneBuilder.setLeftWing({
            material: "wood",
            size: "small",
        })
        this._airplaneBuilder.setRightWing({
            material: "steel",
            size: "big",
        });
        this._airplaneBuilder.setRightWing({
            material: "wood",
            size: "small",
        })
        this._airplaneBuilder.setBody({
            material: "steel",
            size: "small",
        });
        this._airplaneBuilder.addWeapon({
            position: "left",
            size: "big",
            type: "missile",
            typeAmmunition: "explosive",
        });
        this._airplaneBuilder.addWeapon({
            position: "right",
            size: "small",
            type: "missile",
            typeAmmunition: "expansive",
        });
        this._airplaneBuilder.addWeapon({
            position: "left",
            size: "big",
            type: "guns",
            typeAmmunition: "potatoes",
        });
        this._airplaneBuilder.addWeapon({
            position: "right",
            size: "small",
            type: "guns",
            typeAmmunition: "potatoes",
        });
        return this._airplaneBuilder.getAirplane();
    }

    public setBuilder(airplaneBuilder: AirplaneBuilder): void {
        this._airplaneBuilder = airplaneBuilder;
    }

}