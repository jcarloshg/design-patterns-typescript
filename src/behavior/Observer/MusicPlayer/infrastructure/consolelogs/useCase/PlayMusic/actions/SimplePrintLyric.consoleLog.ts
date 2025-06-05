import {
  EventListenerAction,
  EventListenerKey,
  EventListenerRequest,
} from "../../../../../domain/useCase/PlayMusic/actions/EventListener.action";

export class SimplePrintLyricConsoleLog implements EventListenerAction {
  public key: EventListenerKey = "SimplePrintLyric:ConsoleLog";

  public async update(req: EventListenerRequest): Promise<void> {
    const { event, lyricsMetadata } = req;

    if (event === undefined) {
      console.log("[PrintLogListenerConsoleLog] No event provided in request.");
      return;
    }

    if (event !== "REPRODUCING") {
      console.log(`[PrintLogListenerConsoleLog] Event: ${event}`);
      return;
    }

    if (lyricsMetadata === undefined) {
      console.log("[PrintLogListenerConsoleLog] No event provided in request.");
      return;
    }

    const { lyrics } = lyricsMetadata;

    console.log(`// [] - ${lyrics}`);
  }
}
