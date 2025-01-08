import { ElementDecorator } from "./ElementDecorator";

export class ElementDecoratorDiv extends ElementDecorator {
  render(data: string, level: number = 0): void {
    const space = "  ".repeat(level);
    console.log(`${space}<div>`);
    this.element.render(data, level + 1);
    console.log(`${space}</div>`);
  }
}
