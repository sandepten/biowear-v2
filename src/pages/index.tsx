import { type NextPage } from "next";
// import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  return (
    <>
      <Head>
        <title>Biowear</title>
        <meta
          name="description"
          content="Biowear is the fist and last stop to all your clothing needs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-dark">
        <Navbar />
        <h1 className="text-6xl font-bold text-light">
          {hello.data ? hello.data.greeting : "Loading tRPC query..."}
        </h1>
      </main>
    </>
  );
};

export default Home;
