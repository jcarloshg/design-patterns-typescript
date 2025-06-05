import {
  EventListenerAction,
  EventListenerKey,
  EventListenerRequest,
} from "../../../../../domain/useCase/PlayMusic/actions/EventListener.action";

export class PauseLogListenerConsoleLog implements EventListenerAction {
  public key: EventListenerKey = "PauseLogListenerListener:ConsoleLog";

  public async update(req: EventListenerRequest): Promise<void> {
    const { event, lyricsMetadata } = req;

    if (event === undefined) {
      console.log("[PauseLogListenerConsoleLog] No event provided in request.");
      return;
    }

    if (event !== "PAUSE") {
      console.log(`[PauseLogListenerConsoleLog] Event: ${event}`);
      return;
    }

    console.log(".");
    console.log("**********************************");
    console.log(".");
    console.log("Music playback paused.");
    console.log(".");
    console.log("**********************************");
    console.log(".");
  }
}
