import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#141a17]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
