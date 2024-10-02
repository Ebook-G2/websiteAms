import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FormContact from "../components/FormContact";
import HeroOd from "../components/HeroOd";

function news() {
  return (
    <div>
      <Header />
      <HeroOd title={"Home"} content={"News"} />

      <Footer />
    </div>
  );
}

export default news;
