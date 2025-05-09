"use client";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ReviewSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      customLeftArrow={
        <div className="absolute top-1/2 Left-4 transform translate-y-20 bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center lg:hidden">
          <FaChevronLeft className=" cursor-pointer text-black " />
        </div>
      }
      customRightArrow={
        <div className="absolute top-1/2 right-4 transform translate-y-20 bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center lg:hidden">
          <FaChevronRight className=" cursor-pointer text-black" />
        </div>
      }
    >
      <ReviewCard
        image="/images/c1.png"
        name="Jhonatam Spier"
        role="Empresario"
        text="“Uso todos os dias, seja no trabalho ou na academia, e a experiência é sempre incrível. O som é limpo, os graves são fortes e o cancelamento de ruído faz toda a diferença. Vale cada centavo!"
      />
      <ReviewCard
        image="/images/c2.png"
        name="Alex Sapin"
        role="Marketing"
        text="Comprei meio desconfiado, mas me surpreendi! O acabamento é lindo, super confortável de usar por horas e a conexão é instantânea. Realmente entrega o que promete. Virou meu fone favorito!"
      />
      <ReviewCard
        image="/images/c3.png"
        name="Vanessa Morin"
        role="Executiva de Compras"
        text="Eu simplesmente amei! A qualidade do som é absurda, o cancelamento de ruído realmente faz diferença e o toque funciona perfeitamente. Sem contar que a bateria dura muito! Superou minhas expectativas em todos os sentidos."
      />
    </Carousel>
  );
};

export default ReviewSlider;
