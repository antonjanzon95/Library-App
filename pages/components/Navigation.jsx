import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <nav className="min-w-screen flex justify-center items-center text-3xl text-teal-600 font-semibold">
        <ul className="flex gap-10">
          <li className="hover:text-blue-600">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link href="/AvailableBooks">Available books</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link href="/RentedBooks">Rented books</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
