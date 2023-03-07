import React, { useState } from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <nav className="w-screen flex justify-between items-center text-xl text-teal-600 font-semibold h-20 bg-slate-900 p-6">
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
        <ul className="flex gap-4">
          <li className="hover:text-blue-600">
            <Link href="/SignUp">Sign Up</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link href="/Login">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
