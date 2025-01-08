import { SPACE, Element } from "./Element";

export class ConcreteElement implements Element {
  render(data: string, level: number = 0): void {
    const space = SPACE.repeat(level);
    console.log(`${space}${data}`);
  }
}
