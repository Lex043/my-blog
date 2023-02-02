import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page | LEX BLOG</title>
      </Head>
      <section className="text-white px-5 xl:px-16">
        <h1 className="text-4xl font-bebas font-bold text-center">
          Welcome to LEX BLOG.
        </h1>
        <p className="font-poppins py-4 text-center">
          A Blog Built with Nextjs and Sanity For Content Management.
        </p>
      </section>
    </>
  );
}
