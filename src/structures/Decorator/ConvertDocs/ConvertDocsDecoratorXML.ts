import { ConvertDocsDecorator } from "./ConvertDocsDecorator";
import { ConvertDocToXML } from "./ConvertDocToXML";

export class ConvertDocsDecoratorXML extends ConvertDocsDecorator {
  convert(data: string, level: number = 0): string {
    const convertXML = new ConvertDocToXML();
    const dataConverted = convertXML.convert(data, level + 1);
    return this.convertDocs.convert(dataConverted, level + 1);
  }
}
