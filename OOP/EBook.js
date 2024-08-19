import Book from './Book.js';

export default class EBook extends Book {
  constructor(name, author, year, format) {
    super(name, author, year);
    this._format = format;
  }

  printInfo() {
    super.printInfo();
    console.log(`Format: ${this._format}`);
  }

  get format() {
    return this._format;
  }

  set format(newFormat) {
    if (typeof newFormat !== 'string') {
      console.log('Format of book should be String');
      return;
    }
    this._title = newFormat;
  }

  static fromBookAndFileFormat(book, format) {
    return new EBook(book.title, book.author, book.year, format);
  }
}
