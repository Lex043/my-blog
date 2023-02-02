const Footer = () => {
  return (
    <footer className="text-white flex flex-col md:flex-row md:items-center md:justify-between gap-2 px-5 py-5 xl:px-16">
      <div className="flex gap-3">
        <a
          href="/https://github.com/Lex043"
          target="_blank"
          rel="noopeneer noreferrer"
          className="underline font-semibold"
        >
          GH
        </a>
        <a
          href="https://twitter.com/Lex_Feranmi"
          target="_blank"
          rel="noopeneer noreferrer"
          className="underline font-semibold"
        >
          TW
        </a>
      </div>
      <p className="text-[1rem] font-poppins">
        © 2023 Alex Oyebamiji. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
