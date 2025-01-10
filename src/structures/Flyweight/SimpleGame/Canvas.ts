import { EmojiExtrinsic } from "./EmojiExtrinsico";

export class Canvas {
  private _size: number;
  private _canvas: string[][];
  private _emojiExtrinsics: EmojiExtrinsic[] = [];

  constructor(size: number) {
    this._size = size;
    this._canvas = new Array(size)
      .fill(".")
      .map(() => new Array(size).fill("."));
  }

  public addEmoji(emojiExtrinsic: EmojiExtrinsic) {
    this._emojiExtrinsics.push(emojiExtrinsic);
  }

  public render(): void {
    this._cleanCanvas();

    this._emojiExtrinsics.forEach((emojiExtrinsic) =>
      emojiExtrinsic.update(this._size)
    );

    this._emojiExtrinsics.forEach((emojiExtrinsic) => {
      const { x, y } = emojiExtrinsic.position;
      this._canvas[y][x] = emojiExtrinsic.emojiRender;
    });

    this._canvas.forEach((row) => console.log(row.join("  ")));
  }

  public listEmojis(): void {
    console.log(this._emojiExtrinsics);
  }

  // ============================================================
  // ============================================================

  private _cleanCanvas(): void {
    this._canvas.forEach((row) => row.fill("."));
  }
}
