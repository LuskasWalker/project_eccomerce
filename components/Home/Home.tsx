"use client";
import React, { useEffect } from "react";
import Hero from "./Hero";
import Features from "./Features";
import About from "./About";
import Review from "./Review/Review";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAos();
  },[]);

  return (
    <div className="overflow-hidden ">
      <Hero />
      <Features />
      <About
        textOrder="lg:order-2"
        imageOrder="lg:order-1"
        linkText="Ver Mais"
        title="Tecnologia de Ponta Incomparável"
      />
      <Review />
    </div>
  );
};

export default Home;
