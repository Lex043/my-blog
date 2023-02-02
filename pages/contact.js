import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Page | LEX BLOG</title>
      </Head>
      <div>
        <section className="text-white flex flex-col gap-6 md:flex-row md:justify-center px-5 xl:px-16">
          <aside>
            <h1 className="text-xs font-poppins">WHATSAPP &amp; CALL</h1>
            <a
              className="underline text-xl"
              href="tel:+2348120506478"
              target="_blank"
              rel="noreferrer"
            >
              +2348120506478
            </a>
          </aside>
          <aside>
            <h1 className="text-xs font-poppins">EMAIL</h1>
            <a
              className="underline text-xl font-poppins"
              href="mailto:alexferanmi390@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              alexferanmi390@gmail.com
            </a>
          </aside>
          <aside>
            <h1 className="text-xs font-poppins">TWITTER</h1>
            <a
              className="underline text-xl"
              href="https://twitter.com/Lex_Feranmi"
              target="_blank"
              rel="noreferrer"
            >
              @Lex_Feranmi
            </a>
          </aside>
        </section>
      </div>
    </>
  );
};

export default Contact;
