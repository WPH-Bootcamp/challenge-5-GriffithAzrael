// 1. Create type "Book"
type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

// 2. Create array "books" to store books
const books: Book[] = [];

// 3. Implement "addBook" function
function addBook(title: string, author: string, publicationYear: number): void {
  const newBook: Book = {
    title: title,
    author: author,
    publicationYear: publicationYear,
  };

  books.push(newBook);
  console.log(`Book added: "${title}" by ${author} (${publicationYear})`);
}

// 4. Implement "listBooks" function
function listBooks(): void {
  console.log("All Books:");
  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  });
}

// 5. Implement "searchBook" function
function searchBook(title?: string): void {
  if (!title) {
    console.log("Please provide a title to search.");
    return;
  }

  //Filter the "books" array
  const foundBooks = books.filter((book) => book.title.includes(title));

  console.log(`Search Results for "${title}":`);
  if (foundBooks.length > 0) {
    foundBooks.forEach((book) =>
      console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`)
    );
  } else {
    console.log(`No books found with title containing "${title}".`);
  }
}

//Example input
addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
addBook("1984", "George Orwell", 1949);

listBooks();

searchBook("1984");

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
