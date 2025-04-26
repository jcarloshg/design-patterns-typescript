export abstract class TravelModel {
    private _origin: string;
    private _destination: string;
    private _price: number;

    constructor(
        origin: string,
        destination: string,
        price: number
    ) {
        this._origin = origin;
        this._destination = destination;
        this._price = price;
    }

    public toObject() {
        return {
            origin: this._origin,
            destination: this._destination,
            price: this._price
        }
    }

    public async startTravel(): Promise<void> {
        throw new Error("Method [startTravel] not implemented.");
    };

    public async endTravel(): Promise<void> {
        throw new Error("Method [endTravel] not implemented.");
    };

}