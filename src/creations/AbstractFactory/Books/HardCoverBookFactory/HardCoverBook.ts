import { Book, BookObject } from "../AbstractBookFactory/Book";

export class HardCoverBook implements Book {

    constructor(
        public readonly title: string,
        public readonly author: string,
        public readonly pageNumbers: number,
        public readonly coverType: "hardcover" = "hardcover",
        public readonly coverMaterial: "leather" | "plastic" = "leather"
    ) { }

    public toString(): string {
        return `Book: ${this.title} - Author: ${this.author} - Pages: ${this.pageNumbers} - Cover: ${this.coverType}, material: ${this.coverMaterial}`;
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
        }
    }

}