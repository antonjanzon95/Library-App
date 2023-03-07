import React from "react";
import { rentBook, returnBook } from "../api/books.js";

const BooksRenderer = ({
  books,
  isRentButtonDisabled,
  isReturnButtonDisabled,
}) => {
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
                  onClick={() => rentBook(book)}
                  disabled={isRentButtonDisabled}
                >
                  Rent
                </button>
                <button
                  className="ml-6"
                  onClick={() => returnBook(book)}
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
