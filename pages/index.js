import Head from "next/head";
import { Inter } from "next/font/google";
import RentForm from "./components/RentForm";
import Heading from "./components/Heading";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ results }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-900 text-slate-100 flex flex-col justify-center items-center min-h-screen gap-20">
        <Heading title={"Welcome to the library!"} />
        <div>
          <Navigation />
          <RentForm />
        </div>
      </main>
    </>
  );
}
