import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Founders from "../components/Founder";
import FormContact from "../components/FormContact";
import SliderServices from "../components/SliderServices";
import SliderProduct from "../components/SliderProduct";
import HeroOd from "../components/HeroOd";
import AboutUs from "../components/AboutUs";
import Trademark from "../components/Trademark";
import Achievement from "../components/Achievement";

function About() {
  return (
    <div>
      <Header />
      <HeroOd title={"About company"} content={"About company"} />
      <Trademark />
      <AboutUs />
      <Achievement />
      <SliderServices />
      <SliderProduct />
      <Founders />
      <FormContact />
      <Footer />
    </div>
  );
}

export default About;
