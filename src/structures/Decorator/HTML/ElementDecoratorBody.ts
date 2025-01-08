import { ElementDecorator } from "./ElementDecorator";

export class ElementDecoratorBody extends ElementDecorator {
  render(data: string, level: number = 0): void {
    const space = "  ".repeat(level);
    console.log(`${space}<body>`);
    this.element.render(data, level + 1);
    console.log(`${space}</body>`);
  }
}
