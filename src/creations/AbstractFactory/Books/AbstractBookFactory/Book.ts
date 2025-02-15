export abstract class Book {
    constructor(
        public readonly title: string,
        public readonly author: string,
        public readonly pageNumbers: number
    ) { }

    public toString(): string {
        return `Book: ${this.title} by ${this.author} with ${this.pageNumbers} pages.`;
    }

    public abstract toObject(): BookObject;
}

export type BookData = Pick<Book, "title" | "author" | "pageNumbers">;

export type BookObject = {
    metadata: Pick<Book, "title" | "author" | "pageNumbers">,
    [key: string]: any
}