import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="pt-36">
          <ScrollToTop />
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default MainLayout;