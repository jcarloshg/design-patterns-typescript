import { EmojiFlyweight, EmojiStructure } from "./EmojiFlyweight";

export class EmojiFactory {
  static emojis: Map<string, EmojiFlyweight> = new Map();
  private static _instance: EmojiFactory | null = null;

  static instance(): EmojiFactory {
    if (this._instance === null) {
      this._instance = new EmojiFactory();
    }
    return this._instance;
  }

  static setInitials(initialEmojis: EmojiStructure[]) {
    initialEmojis.forEach((emoji) => {
      const emojiHashed = `${emoji.weapon}|${emoji.emoji}`;
      const newEmoji = new EmojiFlyweight(emoji.emoji, emoji.weapon);
      EmojiFactory.emojis.set(emojiHashed, newEmoji);
    });
  }

  static getEmoji(emoji: EmojiStructure): EmojiFlyweight {
    const emojiHashed = `${emoji.weapon}|${emoji.emoji}`;
    const emojiFounded = EmojiFactory.emojis.get(emojiHashed);
    if (emojiFounded) return emojiFounded;

    const newEmoji = new EmojiFlyweight(emoji.emoji, emoji.weapon);
    EmojiFactory.emojis.set(emojiHashed, newEmoji);
    return newEmoji;
  }

  static listItems(): void {
    console.log(EmojiFactory.emojis);
  }
}
