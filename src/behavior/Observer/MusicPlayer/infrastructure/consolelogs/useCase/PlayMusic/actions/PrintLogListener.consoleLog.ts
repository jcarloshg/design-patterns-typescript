import {
  EventListenerAction,
  EventListenerKey,
  EventListenerRequest,
} from "../../../../../domain/useCase/PlayMusic/actions/EventListener.action";

export class PrintLogListenerConsoleLog implements EventListenerAction {
  public key: EventListenerKey = "PrintLogListener:ConsoleLog";

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

    const { timeSeconds, lyrics } = lyricsMetadata;

    const timeFormatted = new Date(timeSeconds * 1000);
    const formattedTime = timeFormatted.toISOString().substr(11, 8); // HH:MM:SS

    console.log(`//======================================================//`);
    console.log(`// [${formattedTime}] - ${lyrics}`);
    console.log(`//======================================================//`);
  }
}
