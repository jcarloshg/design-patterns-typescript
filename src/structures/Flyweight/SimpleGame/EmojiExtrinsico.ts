import { EmojiFlyweight } from "./EmojiFlyweight";

export class EmojiExtrinsic {
  private _position: { x: number; y: number };
  private _emojiFlyweight: EmojiFlyweight;

  constructor(
    position: { x: number; y: number },
    emojiFlyweight: EmojiFlyweight
  ) {
    this._position = position;
    this._emojiFlyweight = emojiFlyweight;
  }

  public get position(): { x: number; y: number } {
    return this._position;
  }

  public get emojiRender(): string {
    return this._emojiFlyweight.render();
  }

  public update(limit: number): void {
    const getRandom = () => {
      let num;
      do {
        num = Math.floor(Math.random() * 3) - 1;
      } while (num === 0);
      return num;
    };

    this._position.x += getRandom();
    this._position.y += getRandom();

    if (this._position.x < 0) this._position.x = Math.floor(limit / 2);
    if (this._position.x > limit) this._position.x = Math.floor(limit / 2);
    if (this._position.y < 0) this._position.y = Math.floor(limit / 2);
    if (this._position.y > limit) this._position.y = Math.floor(limit / 2);
  }
}
