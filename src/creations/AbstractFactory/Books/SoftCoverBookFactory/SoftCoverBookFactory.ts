import { BookData, Book } from "../AbstractBookFactory/Book";
import { BookFactory } from "../AbstractBookFactory/BookFactory";
import { NoteBook, NoteBookData } from "../AbstractBookFactory/NoteBook";
import { SoftCoverBook } from "./SoftCoverBook";
import { SoftCoverNoteBook } from "./SoftCoverNoteBook";

export class SoftCoverBookFactory implements BookFactory {

    createBook(bookData: BookData): SoftCoverBook {
        const book = new SoftCoverBook(
            bookData.title,
            bookData.author,
            bookData.pageNumbers,
            "softcover",
            "paper",
            "SoftCoverBookFactory",
            new Date(),
        );
        return book;
    }

    createNoteBook(noteBookData: NoteBookData): SoftCoverNoteBook {
        const noteBook = new SoftCoverNoteBook(
            noteBookData.pagesNumber,
            noteBookData.size,
            noteBookData.type,
            "softcover",
            "paper",
            "SoftCoverBookFactory",
            new Date(),
        );
        return noteBook;
    }

}