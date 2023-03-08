import React, { useState } from "react";

const BooksRenderer = ({ books, isRentButtonDisabled }) => {
  const [pages, setPages] = useState("");
  const [showPagesForBook, setShowPagesForBook] = useState(null);

  const rentBook = async (bookToRent) => {
    try {
      const response = await fetch("/api/books?path=rent-book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookToRent),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const returnBook = async (bookToReturn) => {
    try {
      const response = await fetch("/api/books?path=return-book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookToReturn),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleShowPages = async (book) => {
    try {
      const response = await fetch(`/api/books/${book.id}`);
      const data = await response.json();
      setPages(data.pages);
      setShowPagesForBook(book.id);
    } catch (error) {
      console.error(error);
    }
  };

  if (books.length > 0) {
    return (
      <ul className="flex flex-col gap-8 bg-slate-800 px-6 py-4">
        {books.map((book) => {
          return (
            <li key={book.id} className="flex justify-between">
              <div>
                <button onClick={() => toggleShowPages(book)}>
                  <span className="text-xl">{book.name}</span> - {book.author}
                </button>
                {showPagesForBook === book.id && <p> {pages} pages</p>}
              </div>

              <div className="font-bold">
                {isRentButtonDisabled ? (
                  <button className="ml-6" onClick={() => returnBook(book)}>
                    Return
                  </button>
                ) : (
                  <button className="ml-6" onClick={() => rentBook(book)}>
                    Rent
                  </button>
                )}
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
