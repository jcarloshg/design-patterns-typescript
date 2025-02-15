import { Book, BookData } from "./Book";
import { NoteBook, NoteBookData } from "./NoteBook";

export abstract class BookFactory {
  abstract createBook(bookData: BookData): Book;
  abstract createNoteBook(noteBook: NoteBookData): NoteBook;
}
