import React from "react";

const BooksRenderer = ({
  books,
  handleRentBook,
  handleReturnBook,
  isRentButtonDisabled,
  isReturnButtonDisabled,
}) => {
  const rentBook = async (book) => {
    const bookToRent = book;
    await fetch("../api/rentBook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookToRent),
    });
  };

  const returnBook = async (book) => {
    const bookToReturn = book;
    await fetch("../api/returnBook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookToReturn),
    });
  };

  if (books.length > 0) {
    return (
      <ul className="flex flex-col gap-8 bg-slate-800 px-6 py-4">
        {books.map((book) => {
          return (
            <li key={book.id} className="flex justify-between">
              <div>
                <span className="text-xl">{book.name}</span> - {book.author}
              </div>
              <div className="font-bold">
                <button
                  className="ml-6"
                  onClick={() => handleRentBook(book)}
                  disabled={isRentButtonDisabled}
                >
                  Rent
                </button>
                <button
                  className="ml-6"
                  onClick={() => handleReturnBook(book)}
                  disabled={isReturnButtonDisabled}
                >
                  Return
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return <p>No books</p>;
  }
};

export default BooksRenderer;
