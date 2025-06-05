// ============================================================
// event key
// ============================================================
export type ComponentName = string;
export type ComponentDescription = string;
export type EventListenerKey = `${ComponentName}:${ComponentDescription}`;

// ============================================================
// event listener
// ============================================================
export interface EventListenerRequest {
  event: "PAUSE" | "PLAY" | "REPRODUCING";
  lyricsMetadata?: {
    timeSeconds: number;
    lyrics: string;
  };
}

export interface EventListenerAction {
  update(req: EventListenerRequest): Promise<void>;
}

