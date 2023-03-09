import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Heading from "./components/Heading";
import Image from "next/image";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords doesn't match!");
      return;
    } else {
      const user = { username: username, password: password };
      try {
        const response = await fetch("/api/users?path=add-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const data = await response.json();
        console.log(data);
        setUsername("");
        setPassword("");
        setConfirmPassword("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Navigation />
      <section className="bg-black bg-opacity-80 text-slate-100 flex flex-col items-center h-screen mt-[-80px] pt-20 gap-20">
        <Image
          src="/books-gb2bee1400_1920.jpg"
          alt="Library"
          fill
          className="bg-cover z-[-1]"
        />
        <Heading title={"Sign Up"} />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-4 bg-black bg-opacity-60 p-6"
        >
          <div className="flex flex-col gap-2">
            Enter your credentials to Sign Up
            <label className="flex justify-between gap-2">
              Username:
              <input
                type="text"
                className="bg-slate-100 rounded text-black"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </label>
            <label className="flex justify-between gap-2">
              Password:
              <input
                type="password"
                className="bg-slate-100 rounded text-black"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>
            <label className="flex justify-between gap-2">
              Confirm Password:
              <input
                type="password"
                className="bg-slate-100 rounded text-black"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
            </label>
          </div>
          <button
            id="bookBtn"
            type="submit"
            className="p-3 border-2 w-1/2 bg-black bg-opacity-60 hover:bg-slate-100 hover:text-black font-extrabold mt-4"
          >
            Sign Up
          </button>
        </form>
      </section>
    </>
  );
};

export default SignUp;
