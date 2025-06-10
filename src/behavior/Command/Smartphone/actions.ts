import { Command } from "./Command.interface";
import { SmartPhoneReceiver, SmartPhoneState } from "./SmartPhone.receiver";

const UNIT_TO_VOLUME = 10;
const UNIT_TO_BRIGHTNESS = 10;

export class IncraseVolume implements Command {
  private _smartPhoneReceiver: SmartPhoneReceiver;

  constructor(smartPhoneReceiver: SmartPhoneReceiver) {
    this._smartPhoneReceiver = smartPhoneReceiver;
  }

  public async execute(): Promise<void> {
    const currentState = this._smartPhoneReceiver.getSmartPhoneState();
    const newVolume = currentState.volume + UNIT_TO_VOLUME;
    const newState: SmartPhoneState = {
      ...currentState,
      volume: newVolume,
    };
    this._smartPhoneReceiver.updateState(newState);
  }
}

export class DecreaseVolume implements Command {
  private _smartPhoneReceiver: SmartPhoneReceiver;

  constructor(smartPhoneReceiver: SmartPhoneReceiver) {
    this._smartPhoneReceiver = smartPhoneReceiver;
  }

  public async execute(): Promise<void> {
    const currentState = this._smartPhoneReceiver.getSmartPhoneState();
    const newVolume = currentState.volume - UNIT_TO_VOLUME;
    const newState: SmartPhoneState = {
      ...currentState,
      volume: newVolume,
    };
    this._smartPhoneReceiver.updateState(newState);
  }
}

export class IncraseBrightness implements Command {
  private _smartPhoneReceiver: SmartPhoneReceiver;

  constructor(smartPhoneReceiver: SmartPhoneReceiver) {
    this._smartPhoneReceiver = smartPhoneReceiver;
  }

  public async execute(): Promise<void> {
    const currentState = this._smartPhoneReceiver.getSmartPhoneState();
    const newVolume = currentState.brightness + UNIT_TO_BRIGHTNESS;
    const newState: SmartPhoneState = {
      ...currentState,
      volume: newVolume,
    };
    this._smartPhoneReceiver.updateState(newState);
  }
}

export class DecreaseBrightness implements Command {
  private _smartPhoneReceiver: SmartPhoneReceiver;

  constructor(smartPhoneReceiver: SmartPhoneReceiver) {
    this._smartPhoneReceiver = smartPhoneReceiver;
  }

  public async execute(): Promise<void> {
    const currentState = this._smartPhoneReceiver.getSmartPhoneState();
    const newVolume = currentState.volume - UNIT_TO_VOLUME;
    const newState: SmartPhoneState = {
      ...currentState,
      volume: newVolume,
    };
    this._smartPhoneReceiver.updateState(newState);
  }
}
