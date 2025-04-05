class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getDetails() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  }
}

class Library {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
    console.log(`Book added: ${book.getDetails()}`);
  }
  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
    console.log(`Book removed: ${title}`);
  }
  listBooks() {
    if (this.books.length === 0) {
      console.log("No books available");
    } else {
      console.log("Books in Library:");
      this.books.forEach((book) => console.log(book.getDetails()));
    }
  }
}

// TEST
const library = new Library();

const book1 = new Book("The Pragmatic Programmer", "Andrew Hunt", 1999);
const book2 = new Book("Clean Code", "Robert C. Martin", 2008);

library.addBook(book1);
library.addBook(book2);
library.listBooks();
library.removeBook("Clean Code");
library.listBooks();
