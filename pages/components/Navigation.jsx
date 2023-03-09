import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="max-w-screen flex justify-between items-center text-xl text-slate-100 font-semibold h-20 bg-black bg-opacity-60 p-6">
        <button
          onClick={toggleMenu}
          className={`z-10 w-10 h-8 flex flex-col justify-between laptop:hidden`}
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
          } absolute left-0 top-0 bg-black w-screen h-screen laptop:h-full laptop:w-full laptop:pl-[180px] laptop:bg-opacity-0 text-slate-100 laptop:p-0 laptop:mt-0 text-4xl laptop:text-2xl laptop:scale-100 transition duration-300 ease-in-out laptop:static flex flex-col justify-center items-center laptop:flex-row gap-20 laptop:gap-10`}
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
        <ul className="flex gap-6 laptop:gap-0 laptop:justify-between laptop:w-[180px]">
          <li className="hover:text-blue-600">
            <Link href="/SignUp">Sign up</Link>
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
