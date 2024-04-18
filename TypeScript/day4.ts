/**
 * You're tasked with creating a program to manage a library's book inventory. 
 * The program should allow librarians to perform various operations, such as adding books, removing books, searching for books,
 *  and displaying the entire inventory.

Requirements:

Implement a class called Book with properties for the book's title, author, genre, and ISBN.
Implement a class called Library with methods to manage the library's book inventory:
addBook: Add a new book to the inventory.
removeBook: Remove a book from the inventory.
searchByTitle: Search for a book by its title.
searchByAuthor: Search for books by author.
displayInventory: Display the entire inventory of books.
 */
class Book {
    public title: string;
    public author: string;
    public genre: string;
    public ISBN: string;

    constructor(title: string, author: string, genre: string, ISBN: string) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.ISBN = ISBN;
    }
}

class Library {
    private lib: Book[] = [];

    addBook(title: string, author: string, genre: string, ISBN: string) {
        const newBook = new Book(title, author, genre, ISBN);
        this.lib.push(newBook);
    }

    removeBook(ISBN: string) {
        this.lib = this.lib.filter(book => book.ISBN !== ISBN);
    }

    searchByTitle(title: string) {
        const foundBooks = this.lib.filter(book => book.title === title);
        if (foundBooks.length > 0) {
            console.log("Books found with title:", foundBooks);
        } else {
            console.log("No books found with the title:", title);
        }
    }
}

// Example usage:
const library = new Library();
library.addBook("The Great Gatsby", "F. Scott Fitzgerald", "Classic", "978-0743273565");
library.addBook("To Kill a Mockingbird", "Harper Lee", "Fiction", "978-0061120084");
library.addBook("1984", "George Orwell", "Dystopian", "978-0451524935");

library.searchByTitle("To Kill a Mockingbird");
library.removeBook("978-0743273565");
