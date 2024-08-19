import Book from './Book.js';
import EBook from './EBook.js';

const firstBook = new Book('Carrie', 'Stephen King', 1976);
const secondBook = new Book('The lord of the Ring', 'John Tolkien', 1954);
const thirdBook = new EBook('The Dark Tower', 'Stephen King', 1956, 'PDF');
const fourthBook = new EBook('IT', 'Stephen King', 1986, 'EDUB');
const ebook = EBook.fromBookAndFileFormat(fourthBook, 'EDUB');

const books = [firstBook, secondBook, thirdBook, fourthBook, ebook];
const oldestBook = Book.findOldestBook(books);

firstBook.printInfo();
secondBook.printInfo();
thirdBook.printInfo();
fourthBook.printInfo();
ebook.printInfo();

console.log(`The oldest book is: ${oldestBook}`);
