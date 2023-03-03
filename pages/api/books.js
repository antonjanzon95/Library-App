export let availableBooks = [];

export let rentedBooks = [];

export const rentBook = (bookToRent) => {
  availableBooks = availableBooks.filter(
    (book) => book.name !== bookToRent.name
  );
  rentedBooks.push(bookToRent);
};

export const returnBook = (bookToReturn) => {
  rentedBooks = rentedBooks.filter((book) => book.name !== bookToReturn.name);
  availableBooks.push(bookToReturn);
};
