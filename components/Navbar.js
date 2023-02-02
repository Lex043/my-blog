import Link from "next/link";

const Navar = () => {
  return (
    <nav className="text-white flex justify-between items-center pt-2 border-b-[1px] px-5 xl:px-16">
      <Link href="/">
        <h1 className="text-2xl font-bebas">LEX BLOG</h1>
      </Link>
      <section className="flex gap-2 text-xs font-poppins md:gap-5">
        <Link href="/blog">
          <p>BLOG</p>
        </Link>
        <Link href="/about">
          <p>ABOUT</p>
        </Link>
        <Link href="/contact">
          <p>CONTACT</p>
        </Link>
      </section>
    </nav>
  );
};

export default Navar;
