import React, { useState, useEffect } from "react";
import Heading from "./components/Heading";
import BooksRenderer from "./components/BooksRenderer";
import Navigation from "./components/Navigation";

const RentedBooks = () => {
  const [rentedBooks, setRentedBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books?path=rent-book");
        const data = await response.json();
        setRentedBooks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, [rentedBooks]);

  return (
    <>
      <Navigation />
      <section className="bg-slate-900 text-slate-100 flex flex-col items-center min-h-screen gap-20">
        <Heading title={"Rented books:"} />
        <div className="flex flex-col gap-6 min-w-[500px]">
          <BooksRenderer books={rentedBooks} isRentButtonDisabled={true} />
        </div>
      </section>
    </>
  );
};

export default RentedBooks;
