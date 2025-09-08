import Footer from "@/shared/footer/footer";
import Navbar from "@/shared/navbar/navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
