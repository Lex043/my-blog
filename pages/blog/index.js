import Head from "next/head";
import { createClient } from "next-sanity";
import Link from "next/link";
import PortableText from "react-portable-text";

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "006wvq76",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
  });
  const posts = await client.fetch(`*[_type == "post"]`);
  return {
    props: {
      posts,
    }, // will be passed to the page component as props
  };
}

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blogs | LEX BLOG</title>
      </Head>
      <section className="text-white pt-10 px-5 xl:px-16">
        <article className="grid grid-cols-1 gap-4 my-7 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              href={"/blog/" + post.slug.current}
              key={post._id}
              className="text-white bg-[#3B3B3C] h-72 flex flex-col justify-between py-6 px-6 border-[1px] border-[#3B3B3C] rounded-md"
            >
              <h2 className="text-2xl font-bold pb-4">{post.title}</h2>
              <p className="text-sm">{post.publishedAt}</p>
            </Link>
          ))}
        </article>
      </section>
    </>
  );
};

export default Posts;
