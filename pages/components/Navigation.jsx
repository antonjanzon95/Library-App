import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const menuState = localStorage.getItem("isMenuOpen");
    setIsMenuOpen(menuState === "true");
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    localStorage.setItem("isMenuOpen", !isMenuOpen);
  };

  return (
    <>
      <nav className="max-w-screen flex justify-between items-center text-xl text-slate-100 font-semibold h-20 bg-black bg-opacity-60 p-6">
        <button
          onClick={toggleMenu}
          className={`z-10 w-10 h-8 flex flex-col justify-between`}
        >
          <div
            className={`${
              isMenuOpen ? "rotate-45 translate-y-3" : ""
            } transition duration-300 ease-in-out h-1 w-full bg-white rounded`}
          ></div>
          <div
            className={`${
              isMenuOpen ? "scale-0" : ""
            } transition duration-300 ease-in-out h-1 w-full bg-white rounded`}
          ></div>
          <div
            className={`${
              isMenuOpen ? "rotate-[-45deg] translate-y-[-1rem]" : ""
            } transition duration-300 ease-in-out h-1 w-full bg-white rounded`}
          ></div>
        </button>
        <ul
          className={`${
            isMenuOpen ? "scale-100" : "scale-0"
          } absolute left-0 top-0 bg-black opacity-90 w-screen h-screen laptop:bg-inherit text-slate-100 laptop:p-0 laptop:mt-0 shadow-xl transition duration-300 ease-in-out laptop:relative flex flex-col justify-center items-center laptop:flex-row gap-10`}
        >
          <li className="hover:text-blue-600">
            <Link onClick={toggleMenu} href="/">
              Home
            </Link>
          </li>
          <li className="hover:text-blue-600">
            <Link onClick={toggleMenu} href="/AvailableBooks">
              Available books
            </Link>
          </li>
          <li className="hover:text-blue-600">
            <Link onClick={toggleMenu} href="/RentedBooks">
              Rented books
            </Link>
          </li>
        </ul>
        <ul className="flex gap-4">
          <li className="hover:text-blue-600">
            <Link onClick={toggleMenu} href="/SignUp">
              Sign Up
            </Link>
          </li>
          <li className="hover:text-blue-600">
            <Link onClick={toggleMenu} href="/Login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
