import { PlayerEntity } from "../../../../domain/models/businessEntity/Player.entity";
import { EventManagerAction } from "../../../../domain/useCase/PlayMusic/actions/EventManager.action";
import fs from "fs-extra";
import path from "path";

export interface LyricsPerSecond {
  seconds: number;
  text: string;
}

export class PlayerTS implements PlayerEntity {
  public PlayEventManager: EventManagerAction;
  public PauseEventManager: EventManagerAction;
  public ReproductionEventManager: EventManagerAction;
  public currentSeconds = 0;

  // utilities
  private _interval: NodeJS.Timeout | null = null;
  private readonly _intervalTime = 1000;
  private readonly _secondsToIncrement = this._intervalTime / 1000;
  private _lyrics: LyricsPerSecond[] = [];

  constructor() {
    this.PlayEventManager = new EventManagerAction();
    this.PauseEventManager = new EventManagerAction();
    this.ReproductionEventManager = new EventManagerAction();
  }

  public async play(): Promise<void> {
    console.log("[PlayerTS] - Starting music playback...");
    this._lyrics = await this.loadLyrics();

    console.log("[PlayerTS] - Playing music...");
    if (this._interval) {
      console.log("[PlayerTS] - Music is already playing.");
      return;
    }

    this._interval = setInterval(() => {
      this.currentSeconds += this._secondsToIncrement;
      this.reproduction(this.currentSeconds);
    }, this._intervalTime);

    await this.PlayEventManager.notify({
      event: "PLAY",
    });
  }

  public async pause(): Promise<void> {
    console.log("[PlayerTS] - Pausing music...");

    if (!this._interval) {
      console.log("[PlayerTS] - Music is not playing.");
      return;
    }

    await clearInterval(this._interval);

    await this.PauseEventManager.notify({
      event: "PAUSE",
    });
  }

  public async reproduction(currentSeconds: number): Promise<void> {
    const currentLyrics = this._lyrics.find((lyric) => {
      const currentLyric = lyric.seconds === currentSeconds;
      return currentLyric;
    });

    if (currentLyrics === undefined) {
      console.log(`[PlayerTS] - No lyrics found for ${currentSeconds}s`);
      return;
    }

    await this.ReproductionEventManager.notify({
      event: "REPRODUCING",
      lyricsMetadata: {
        lyrics: currentLyrics.text,
        timeSeconds: currentLyrics.seconds,
      },
    });
  }

  // ============================================================
  // helper actions
  // ============================================================

  private async loadLyrics(): Promise<LyricsPerSecond[]> {
    // Cargar desde el archivo
    try {
      if (this._lyrics.length > 0) {
        console.log("[PlayerTS] - Lyrics already loaded.");
        return this._lyrics;
      }
      const lyricsPath = path.join(__dirname, "lyrics.json");
      const data = await fs.readFile(lyricsPath, "utf-8");
      const json = JSON.parse(data);
      return json.lyrics as LyricsPerSecond[];
    } catch (error) {
      console.error("[PlayerTS] - Error loading lyrics:", error);
      return [];
    }
  }
}
