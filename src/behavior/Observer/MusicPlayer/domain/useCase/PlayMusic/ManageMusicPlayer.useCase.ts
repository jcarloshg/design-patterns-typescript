import { PlayerEntity } from "../../models/businessEntity/Player.entity";
import { EventListenerAction } from "./actions/EventListener.action";
import { EventListenerUnsubscribeData } from "./actions/EventManager.action";

export class ManageMusicPlayerUseCase {
  private readonly Player: PlayerEntity;

  constructor(player: PlayerEntity) {
    this.Player = player;
  }

  public async play(): Promise<void> {
    await this.Player.play();
  }

  public async pause(): Promise<void> {
    await this.Player.pause();
  }

  public playSubscribe(data: EventListenerAction) {
    this.Player.PlayEventManager.subscribe(data);
  }

  public playUnSubscribe(data: EventListenerUnsubscribeData) {
    this.Player.PlayEventManager.unSubscribe(data);
  }

  public pauseSubscribe(data: EventListenerAction) {
    this.Player.PauseEventManager.subscribe(data);
  }

  public pauseUnSubscribe(data: EventListenerUnsubscribeData) {
    this.Player.PauseEventManager.unSubscribe(data);
  }

  public reproductionSubscribe(data: EventListenerAction) {
    this.Player.ReproductionEventManager.subscribe(data);
  }

  public reproductionUnSubscribe(data: EventListenerUnsubscribeData) {
    this.Player.ReproductionEventManager.unSubscribe(data);
  }
}
