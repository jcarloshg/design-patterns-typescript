import {
  EventListenerAction,
  EventListenerKey,
  EventListenerRequest,
} from "../../../../../domain/useCase/PlayMusic/actions/EventListener.action";

export class PlayLogListenerConsoleLog implements EventListenerAction {
  public key: EventListenerKey = "PlayLogListenerListener:ConsoleLog";

  public async update(req: EventListenerRequest): Promise<void> {
    const { event, lyricsMetadata } = req;

    if (event === undefined) {
      console.log("[PrintLogListenerConsoleLog] No event provided in request.");
      return;
    }

    if (event !== "PLAY") {
      console.log(`[PrintLogListenerConsoleLog] Event: ${event}`);
      return;
    }

    console.log("");
    console.log(".");
    console.log(".");
    console.log("Music playback started.");
    console.log(".");
    console.log(".");
    console.log("");
  }
}
