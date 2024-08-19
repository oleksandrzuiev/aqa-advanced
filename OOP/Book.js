export default class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  get title() {
    return this._title;
  }

  set title(newTitle) {
    if (typeof newTitle !== 'string') {
      console.log('Name of book should be String');
      return;
    }
    this._title = newTitle;
  }

  get author() {
    return this._author;
  }

  set author(newAuthor) {
    if (typeof newAuthor !== 'string') {
      console.log('Author of book should be String');
      return;
    }
    this._title = newAuthor;
  }

  get year() {
    return this._year;
  }

  set year(newYear) {
    if (typeof newYear !== 'number') {
      console.log('Year of book should be Number');
      return;
    }
    this._title = newYear;
  }

  printInfo() {
    console.log(`Author : ${this._author}, Title: ${this._title}, Year: ${this._year}`);
  }

  static findOldestBook(books) {
    if (books.length === 0) {
      return 'No books found';
    }

    const sortedBooks = books.sort((a, b) => a._year - b._year);
    return sortedBooks[0]._title;
  }
}
