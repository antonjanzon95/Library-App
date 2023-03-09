import React, { useState } from "react";

const BooksRenderer = ({ books, isRentButtonDisabled }) => {
  const [pages, setPages] = useState("");
  const [showInfoForBook, setShowInfoForBook] = useState(null);

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

  const toggleShowInfo = async (book) => {
    try {
      const response = await fetch(`/api/books/${book.id}`);
      const data = await response.json();
      setPages(data.pages);
      setShowInfoForBook(book.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {books.length > 0 ? (
        <ul className="flex flex-col gap-8 px-6 py-4">
          {books.map((book) => {
            return (
              <li
                key={book.id}
                className="flex justify-between bg-black bg-opacity-60 p-2 min-w-[325px]"
              >
                <div>
                  <button onClick={() => toggleShowInfo(book)}>
                    <p className="text-xl">{book.name}</p>
                  </button>
                  {showInfoForBook === book.id && (
                    <p className="flex flex-col justify-center items-center">
                      <span>{book.author}</span> {pages} pages
                    </p>
                  )}
                </div>

                <div className="font-bold flex items-center justify-center">
                  {isRentButtonDisabled ? (
                    <button
                      className="ml-6 border-2 border-white p-3 bg-black bg-opacity-80 hover:bg-slate-100 hover:text-black"
                      onClick={() => returnBook(book)}
                    >
                      Return
                    </button>
                  ) : (
                    <button
                      className="ml-6 border-2 border-white p-3 bg-black bg-opacity-80 hover:bg-slate-100 hover:text-black"
                      onClick={() => rentBook(book)}
                    >
                      Rent
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-center mt-10 text-xl">No books...</p>
      )}
    </>
  );
};

export default BooksRenderer;
