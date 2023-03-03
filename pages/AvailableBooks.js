import React, { useState, useEffect } from "react";
import Heading from "./components/Heading";
import BooksRenderer from "./components/BooksRenderer";
import Navigation from "./components/Navigation";
import { rentBook } from "./api/books";

const AvailableBooks = () => {
  const [availableBooks, setAvailableBooks] = useState([]);
  const [isReturnButtonDisabled, setIsReturnButtonDisabled] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("../api/returnBook");
        const data = await response.json();
        setAvailableBooks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, []);

  const handleRentBook = (bookToRent) => {
    rentBook(bookToRent);
    setAvailableBooks([...availableBooks]);
  };

  const handleReturnBook = (bookToReturn) => {
    returnBook(bookToReturn);
    setAvailableBooks([...availableBooks]);
  };

  return (
    <>
      <section className="bg-slate-900 text-slate-100 flex flex-col justify-center items-center min-h-screen gap-20">
        <Heading title={"Available books:"} />
        <div className="flex flex-col gap-6">
          <Navigation />
          <BooksRenderer
            books={availableBooks}
            handleRentBook={handleRentBook}
            handleReturnBook={handleReturnBook}
            isReturnButtonDisabled={isReturnButtonDisabled}
          />
        </div>
      </section>
    </>
  );
};

export default AvailableBooks;
