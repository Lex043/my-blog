import Head from "next/head";
import { createClient } from "next-sanity";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Home Page | LEX BLOG</title>
      </Head>
      <section className="text-white pt-10 px-5 xl:px-16">
        <h1 className="text-4xl font-bebas font-bold text-center">
          Welcome to LEX BLOG.
        </h1>
        <p className="font-poppins py-4 text-center">
          A Blog Built with Nextjs and Sanity For Content Management.
        </p>

        <article className="grid grid-cols-1 gap-4 my-7 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              href={"/blog/" + post.slug.current}
              key={post._id}
              className="text-white bg-[#3B3B3C] h-72 flex flex-col justify-between py-6 px-6 border-[1px] border-[#3B3B3C] rounded-md"
            >
              <h2 className="text-2xl font-bold pb-4">{post.title}</h2>
              <p className="text-sm">
                {new Date(post.publishedAt).toDateString()}
              </p>
            </Link>
          ))}
        </article>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "006wvq76",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
  });
  const posts = await client.fetch(
    `*[_type == "post"][0...9] | order(publishedAt desc)`
  );

  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}
