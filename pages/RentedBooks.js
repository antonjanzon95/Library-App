import React, { useState, useEffect } from "react";
import Heading from "./components/Heading";
import BooksRenderer from "./components/BooksRenderer";
import Navigation from "./components/Navigation";

const RentedBooks = () => {
  const [rentedBooks, setRentedBooks] = useState([]);
  const [isRentButtonDisabled, setIsRentButtonDisabled] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("../api/rentBook");
        const data = await response.json();
        setRentedBooks(data);
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
        <Heading title={"Rented books:"} />
        <div className="flex flex-col gap-6">
          <Navigation />
          <BooksRenderer
            books={rentedBooks}
            handleRentBook={handleRentBook}
            handleReturnBook={handleReturnBook}
            isRentButtonDisabled={isRentButtonDisabled}
          />
        </div>
      </section>
    </>
  );
};

export default RentedBooks;
