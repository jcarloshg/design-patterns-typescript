import { SPACE, Element } from "./Element";

export abstract class ElementDecorator implements Element {
  protected element: Element;

  constructor(element: Element) {
    this.element = element;
  }

  render(data: string, level: number): void {
    throw new Error("Method not implemented.");
  }
}
