import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Page | LEX BLOG</title>
      </Head>
      <div className="text-white text-[1.1rem] px-5 xl:px-16">
        <h3 className="font-bebas text-2xl underline">About</h3>
        <section className="mt-4">
          <p className="font-poppins">
            Hi, I&apos;m Alex Oyebamiji, A Frontend developer and fourth year
            Anatomy undergraduate at Ladoke Akintola University of Technology,
            Nigeria.
          </p>
          <div className="font-poppins my-1">
            <h1>I have interests in stuff like:</h1>
            <ul className="pl-8 list-disc">
              <li>Animations</li>
              <li>Linux</li>
              <li>Open Source</li>
            </ul>
          </div>
          <p className="font-poppins">
            About programming, my current interests is in JAMStack
          </p>
        </section>
      </div>
    </>
  );
};

export default About;
