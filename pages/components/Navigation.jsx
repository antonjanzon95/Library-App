import React, { useState } from "react";
import Link from "next/link";

const Navigation = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setIsLoggedIn(false);
  // };

  return (
    <>
      <nav className="w-screen flex justify-center items-center text-3xl text-teal-600 font-semibold h-20 bg-slate-900">
        <ul className="flex gap-10 mx-auto">
          <li className="hover:text-blue-600">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link href="/AvailableBooks">Available books</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link href="/RentedBooks">Rented books</Link>
          </li>
          {isLoggedIn ? (
            <li className="hover:text-blue-600 absolute top-6 right-6">
              <Link
                href="/Logout"
                // onClick={() => handleLogin()}
              >
                Logout
              </Link>
            </li>
          ) : (
            <li className="hover:text-blue-600 absolute top-6 right-6">
              <Link href="/Login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
