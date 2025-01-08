import { ConvertDocs } from "./ConvertDocs";

export abstract class ConvertDocsDecorator implements ConvertDocs {
  protected convertDocs: ConvertDocs;

  constructor(convertDocs: ConvertDocs) {
    this.convertDocs = convertDocs;
  }

  abstract convert(data: string): string;
}
