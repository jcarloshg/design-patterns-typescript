import { ConvertDocsDecorator } from "./ConvertDocsDecorator";
import { ConvertDocToPDF } from "./ConvertDocToPDF";

export class ConvertDocsDecoratorPDF extends ConvertDocsDecorator {
  convert(data: string, level: number = 0): string {
    const convertPDF = new ConvertDocToPDF();
    const dataConverted = convertPDF.convert(data, level + 1);
    return this.convertDocs.convert(dataConverted, level + 1);
  }
}
