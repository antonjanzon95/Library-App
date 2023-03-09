import React, { useState, useEffect } from "react";
import Heading from "./components/Heading";
import BooksRenderer from "./components/BooksRenderer";
import Navigation from "./components/Navigation";
import Image from "next/image";

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
      <section className="bg-black bg-opacity-80 text-slate-100 flex flex-col items-center h-screen mt-[-80px] pt-20">
        <Image
          src="/books-gb2bee1400_1920.jpg"
          alt="Library"
          fill
          className="bg-cover z-[-1]"
        />
        <Heading title={"Rented books:"} />
        <div className="flex flex-col gap-6 p-6 laptop:w-[500px]">
          <BooksRenderer books={rentedBooks} />
        </div>
      </section>
    </>
  );
};

export default RentedBooks;
