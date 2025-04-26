import { TravelModel } from "./Travel.model";
import { TravelFactoryMethod } from "./TravelFactoryMethod";

export class BusTravel extends TravelModel {

    public async startTravel(): Promise<void> {
        return new Promise<void>(
            (resolve, reject) => {
                setTimeout(() => {
                    console.log(`Bus travel started ${new Date().toISOString()}`);
                    resolve();
                }, 3000);
            }
        );
    };

    public async endTravel(): Promise<void> {
        return new Promise<void>(
            (resolve, reject) => {
                setTimeout(() => {
                    console.log(`Bus travel ended ${new Date().toISOString()}`);
                    resolve();
                }, 3000);
            }
        );
    };
}

export class BusTravelFactoryMethod implements TravelFactoryMethod {

    public async createTravel(): Promise<TravelModel> {
        return new Promise<TravelModel>(
            (resolve, reject) => {
                setTimeout(() => {
                    const travel = new BusTravel("Madrid", "Barcelona", 50);
                    resolve(travel);
                }, 1000);
            }
        );
    }

}