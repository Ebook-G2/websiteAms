import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Founders from "../components/Founder";
import FormContact from "../components/FormContact";
import SliderServices from "../components/SliderServices";
import SliderProduct from "../components/SliderProduct";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Trademark from "../components/Trademark";
import Achievement from "../components/Achievement";
import Product from "../components/Product";

function Home() {
  return (
    <div className="font-roboto">
      <Header />
      <Hero />
      <Trademark />
      <AboutUs />
      <Product />
      <Achievement />
      <SliderServices />
      <SliderProduct />
      <Founders />
      <FormContact />
      <Footer />
    </div>
  );
}

export default Home;
