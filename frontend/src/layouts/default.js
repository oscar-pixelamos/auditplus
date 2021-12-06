import React from "react";
import Carousel from "../components/carousel/Carousel";
import Footer from "../components/footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Carousel />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
