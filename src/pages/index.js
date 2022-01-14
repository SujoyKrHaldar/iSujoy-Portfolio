import Head from "next/head";
import Landing from "../components/home/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
    </>
  );
}