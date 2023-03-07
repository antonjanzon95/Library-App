import React from "react";
import Navigation from "./components/Navigation";
import Heading from "./components/Heading";

const Login = () => {
  return (
    <>
      <Navigation />
      <section className="bg-slate-900 text-slate-100 flex flex-col items-center min-h-screen gap-20">
        <Heading title={"Login"} />
      </section>
    </>
  );
};

export default Login;
