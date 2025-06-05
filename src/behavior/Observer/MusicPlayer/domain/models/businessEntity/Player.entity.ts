import { EventManagerAction } from "../../useCase/PlayMusic/actions/EventManager.action";

export class PlayerEntity {
  public readonly PlayEventManager: EventManagerAction;
  public readonly PauseEventManager: EventManagerAction;
  public readonly ReproductionEventManager: EventManagerAction;
  public currentSeconds = 0;

  constructor(
    playEventManagerAction: EventManagerAction,
    pauseEventManagerAction: EventManagerAction,
    reproductionEventManagerAction: EventManagerAction
  ) {
    this.PlayEventManager = playEventManagerAction;
    this.PauseEventManager = pauseEventManagerAction;
    this.ReproductionEventManager = reproductionEventManagerAction;
  }

  // ============================================================
  // main actions
  // ============================================================

  public async play() {
    throw new Error("Method 'play' not implemented. ");
  }

  public async pause() {
    throw new Error("Method 'pause' not implemented. ");
  }

  // ============================================================
  // helper actions
  // ============================================================

  public async reproduction(currentSeconds: number): Promise<void> {
    throw new Error("Method 'reproduction' not implemented. ");
  }
}
