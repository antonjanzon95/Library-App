import React, { useState, useEffect } from "react";
import Heading from "./components/Heading";
import BooksRenderer from "./components/BooksRenderer";
import Navigation from "./components/Navigation";

const AvailableBooks = () => {
  const [availableBooks, setAvailableBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books?path=return-book");
        const data = await response.json();
        setAvailableBooks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, [availableBooks]);

  return (
    <>
      <Navigation />
      <section className="bg-slate-900 text-slate-100 flex flex-col items-center min-h-screen gap-20">
        <Heading title={"Available books:"} />
        <div className="flex flex-col gap-6 min-w-[500px]">
          <BooksRenderer books={availableBooks} />
        </div>
      </section>
    </>
  );
};

export default AvailableBooks;
