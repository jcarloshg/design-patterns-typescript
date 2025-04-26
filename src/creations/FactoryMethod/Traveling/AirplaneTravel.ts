import { TravelModel } from "./Travel.model";
import { TravelFactoryMethod } from "./TravelFactoryMethod";

export class AirplaneTravel extends TravelModel {

    public async startTravel(): Promise<void> {
        return new Promise<void>(
            (resolve, reject) => {
                setTimeout(() => {
                    console.log(`Airplane travel started ${new Date().toISOString()}`);
                    resolve();
                }, 2000);
            }
        );
    };

    public async endTravel(): Promise<void> {
        return new Promise<void>(
            (resolve, reject) => {
                setTimeout(() => {
                    console.log(`Airplane travel ended ${new Date().toISOString()}`);
                    resolve();
                }, 2000);
            }
        );
    };

}

export class AirplaneTravelFactoryMethod implements TravelFactoryMethod {

    public async createTravel(): Promise<TravelModel> {
        return new Promise<TravelModel>(
            (resolve, reject) => {
                setTimeout(() => {
                    const travel = new AirplaneTravel("Madrid", "Barcelona", 100);
                    resolve(travel);
                }, 2000);
            }
        );
    }

}