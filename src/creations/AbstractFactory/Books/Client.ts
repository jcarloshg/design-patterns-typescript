import { Book } from "./AbstractBookFactory/Book";
import { BookFactory } from "./AbstractBookFactory/BookFactory";
import { NoteBook } from "./AbstractBookFactory/NoteBook";

export const Client = (bookFactory: BookFactory) => {

    const books: Book[] = [];
    const noteBooks: NoteBook[] = [];

    const book01 = bookFactory.createBook({ title: "La peste", author: "Albert Camus", pageNumbers: 320, });
    const book02 = bookFactory.createBook({ title: "La rebelión de las masas", author: "José Ortega y Gasset", pageNumbers: 250, });

    books.push(book01);
    books.push(book02);
    books.forEach(book => console.log(book.toObject()));

    const noteBook01 = bookFactory.createNoteBook({ pagesNumber: 100, size: "A4", type: "lined" });
    const noteBook02 = bookFactory.createNoteBook({ pagesNumber: 50, size: "A5", type: "dotted" });

    noteBooks.push(noteBook01);
    noteBooks.push(noteBook02);
    noteBooks.forEach(noteBook => console.log(noteBook.toObject()));

};
