import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Heading from "./components/Heading";
import CryptoJS from "crypto-js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = { username: username, password: password };
    try {
      const response = await fetch("/api/users?path=get-users");
      const data = await response.json();

      const checkUserExists = data.find((userData) => {
        const decryptedPassword = CryptoJS.AES.decrypt(
          userData.password,
          "test key"
        ).toString(CryptoJS.enc.Utf8);
        return (
          userData.username === user.username &&
          decryptedPassword === user.password
        );
      });
      if (checkUserExists) {
        alert("You have been logged in!");
        setUsername("");
        setPassword("");
      } else {
        alert("Wrong username or password!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navigation />
      <section className="bg-slate-900 text-slate-100 flex flex-col items-center min-h-screen gap-20">
        <Heading title={"Login"} />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-4 bg-slate-800 p-12"
        >
          <div className="flex flex-col gap-2">
            Enter your credentials to Login
            <label className="flex justify-between gap-2">
              Username:
              <input
                type="text"
                className="bg-slate-900"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </label>
            <label className="flex justify-between gap-2">
              Password:
              <input
                type="password"
                className="bg-slate-900"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>
          </div>
          <button id="bookBtn" type="submit" className="p-3 bg-teal-700 w-1/2">
            Login
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;
