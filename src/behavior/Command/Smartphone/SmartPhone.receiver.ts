export class SmartPhoneReceiver {
  private _smartPhoneState: SmartPhoneState;

  constructor() {
    this._smartPhoneState = {
      volume: 50, // Valor inicial de volumen
      brightness: 50, // Valor inicial de brillo
    };
  }

  public getSmartPhoneState(): SmartPhoneState {
    return this._smartPhoneState;
  }

  public updateState(state: SmartPhoneState) {
    this._smartPhoneState = state;
    console.log("Estado del smartphone actualizado:", this._smartPhoneState);
  }
}

export interface SmartPhoneState {
  volume: number;
  brightness: number;
}
