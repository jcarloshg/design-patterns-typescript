import { Book, BookObject } from "../AbstractBookFactory/Book";
import { RecordData } from "./RecordData";

export class SoftCoverBook implements Book, RecordData {

    constructor(
        public readonly title: string,
        public readonly author: string,
        public readonly pageNumbers: number,
        public readonly coverType: "softcover" = "softcover",
        public readonly coverMaterial: "paper" = "paper",
        public readonly createdBy: string = "SoftCoverBookFactory",
        public readonly createdAt: Date = new Date(),
    ) { }

    public toString(): string {
        return `Book: ${this.title} - Author: ${this.author} - Pages: ${this.pageNumbers} - Cover: ${this.coverType}, material: ${this.coverMaterial}, created by: ${this.createdBy}, created at: ${this.createdAt}`;
    }

    public toObject(): BookObject {
        return {
            metadata: {
                title: this.title,
                author: this.author,
                pageNumbers: this.pageNumbers,
            },
            cover: {
                type: this.coverType,
                material: this.coverMaterial
            },
            record: {
                createdBy: this.createdBy,
                createdAt: this.createdAt
            }
        }
    }

}