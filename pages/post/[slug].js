import Head from "next/head";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
// import { PortableText } from "@portabletext/react";

const Details = ({ posts }) => {
  return (
    <>
      <Head>
        <title>{posts.slug.current}</title>
      </Head>
      <section className="text-white pt-10 px-5 xl:px-16">
        <h1 className="text-2xl font-bold font-bebas">{posts.title}</h1>
        <div>
          <PortableText content={posts.body} />
        </div>
      </section>
    </>
  );
};

export default Details;

export const getStaticPaths = async () => {
  const client = createClient({
    projectId: process.env.ID,
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
  });
  const posts = await client.fetch(`*[_type == "post"]{
    slug{current}
  }`);
  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const client = createClient({
    projectId: process.env.ID,
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false,
  });
  const posts = await client.fetch(
    `*[_type == "post" && slug.current == '${slug}'][0]`
  );
  return {
    props: {
      posts,
    },
  };
}
