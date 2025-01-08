import { ConvertDocsDecorator } from "./ConvertDocsDecorator";
import { ConvertDocToHTML } from "./ConvertDocToHTML";

export class ConvertDocsDecoratorHTML extends ConvertDocsDecorator {
  convert(data: string, level: number = 0): string {
    const convertHTML = new ConvertDocToHTML();
    const dataConverted = convertHTML.convert(data, level + 1);
    return this.convertDocs.convert(dataConverted, level + 1);
  }
}
