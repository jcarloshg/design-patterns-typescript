import { ElementDecorator } from "./ElementDecorator";

export class ElementDecoratorHTML extends ElementDecorator {
  render(data: string, level: number = 0): void {
    const space = "  ".repeat(level);
    console.log(`${space}<html>`);
    this.element.render(data, level + 1);
    console.log(`${space}</html>`);
  }
}
