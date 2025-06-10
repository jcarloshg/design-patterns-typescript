import { Command } from "./Command.interface";

export class UIInvoker {
  public _incraseVolume: Command;
  public _decreaseVolume: Command;
  public _incraseBrightness: Command;
  public _decreaseBrightness: Command;

  constructor(
    _incraseVolume: Command,
    _decreaseVolume: Command,
    _incraseBrightness: Command,
    _decreaseBrightness: Command
  ) {
    this._incraseVolume = _incraseVolume;
    this._decreaseVolume = _decreaseVolume;
    this._incraseBrightness = _incraseBrightness;
    this._decreaseBrightness = _decreaseBrightness;
  }

  public async increaseVolume(): Promise<void> {
    await this._incraseVolume.execute();
  }

  public async decreaseVolume(): Promise<void> {
    await this._decreaseVolume.execute();
  }

  public async increaseBrightness(): Promise<void> {
    await this._incraseBrightness.execute();
  }

  public async decreaseBrightness(): Promise<void> {
    await this._decreaseBrightness.execute();
  }
}
