export interface EmojiStructure {
  emoji: string;
  weapon: string;
}

export class EmojiFlyweight {
  private _emojiStructure: EmojiStructure;

  constructor(emoji: string, weapon: string) {
    this._emojiStructure = { emoji, weapon };
  }

  public render(): string {
    const emojiCreated = `${this._emojiStructure.weapon}|${this._emojiStructure.emoji}`;
    return emojiCreated;
  }
}
