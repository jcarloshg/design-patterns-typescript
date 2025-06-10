import { Command } from "./Command.interface";

export class PhysicsButtonsInvoker {
  public _incraseVolume: Command;
  public _decreaseVolume: Command;

  constructor(_incraseVolume: Command, _decreaseVolume: Command) {
    this._incraseVolume = _incraseVolume;
    this._decreaseVolume = _decreaseVolume;
  }

  public async increaseVolume(): Promise<void> {
    await this._incraseVolume.execute();
  }

  public async decreaseVolume(): Promise<void> {
    await this._decreaseVolume.execute();
  }
}
