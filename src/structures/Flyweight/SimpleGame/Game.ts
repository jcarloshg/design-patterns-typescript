import { Canvas } from "./Canvas";
import { EmojiExtrinsic } from "./EmojiExtrinsico";
import { EmojiFactory } from "./EmojiFactory";

export class Game {
  private _canvas: Canvas;

  constructor(size: number) {
    this._canvas = new Canvas(size);
    this._addInitialEmojis(this._canvas);
  }

  public printInfo() {
    EmojiFactory.listItems();
    this._canvas.listEmojis();
  }

  public startGame() {
    setInterval(() => {
      console.log(
        `// \n\n\n =======================================================`
      );
      this._canvas.render();
      console.log(`// =======================================================`);
    }, 2000);
  }

  // ============================================================
  // >>> helpers methods
  // ============================================================

  private _addInitialEmojis(_canvas: Canvas) {
    const emojiExtrinsic_01: EmojiExtrinsic = new EmojiExtrinsic(
      { x: 10, y: 10 },
      EmojiFactory.getEmoji({
        emoji: "🤠",
        weapon: "🔫",
      })
    );

    const emojiExtrinsic_02: EmojiExtrinsic = new EmojiExtrinsic(
      { x: 10, y: 10 },
      EmojiFactory.getEmoji({
        emoji: "👻",
        weapon: "🔪",
      })
    );

    const emojiExtrinsic_04: EmojiExtrinsic = new EmojiExtrinsic(
      { x: 10, y: 10 },
      EmojiFactory.getEmoji({
        emoji: "👻",
        weapon: "🔪",
      })
    );

    const emojiExtrinsic_03: EmojiExtrinsic = new EmojiExtrinsic(
      { x: 10, y: 10 },
      EmojiFactory.getEmoji({
        emoji: "👽",
        weapon: "🦾",
      })
    );

    const emojiExtrinsic_05: EmojiExtrinsic = new EmojiExtrinsic(
      { x: 10, y: 10 },
      EmojiFactory.getEmoji({
        emoji: "👽",
        weapon: "🦾",
      })
    );

    this._canvas.addEmoji(emojiExtrinsic_01);
    this._canvas.addEmoji(emojiExtrinsic_02);
    this._canvas.addEmoji(emojiExtrinsic_03);
    this._canvas.addEmoji(emojiExtrinsic_04);
    this._canvas.addEmoji(emojiExtrinsic_05);
  }
}
