import { BookData } from "../AbstractBookFactory/Book";
import { BookFactory } from "../AbstractBookFactory/BookFactory";
import { HardCoverBook } from "./HardCoverBook";
import { HardCoverNoteBook } from "./HardCoverNoteBook";
import { NoteBookData } from "../AbstractBookFactory/NoteBook";

export class HardCoverBookFactory implements BookFactory {

    createBook(bookData: BookData): HardCoverBook {
        const book = new HardCoverBook(
            bookData.title,
            bookData.author,
            bookData.pageNumbers,
            "hardcover",
            "leather"
        );
        return book;
    }

    createNoteBook(noteBook: NoteBookData): HardCoverNoteBook {
        const noteBookInstance = new HardCoverNoteBook(
            noteBook.pagesNumber,
            noteBook.size,
            noteBook.type,
            "hardcover",
            "leather"
        );
        return noteBookInstance;
    }
}