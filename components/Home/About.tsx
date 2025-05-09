import React from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

type Props = {
  imageOrder: string;
  textOrder: string;
  title: string;
  linkText: string;
};

const About = ({imageOrder, linkText, textOrder, title}:Props) => {
  return (
    <div className="pt-4 md:pt-8 lg:pt-16 pb-16">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
        <div className={`${textOrder}`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            {title}
          </h1>
          <div className="mt-8">
            <div className="flex items-center mb-6 space-x-4 overflow-hidden">
              <div className="w-6 h-6 flex items-center justify-center flex-col rounded-full bg-pink-600 text-white">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 ">
                Bluetooth 5.3
              </p>
            </div>

            <div className="flex items-center mb-6 space-x-4">
              <div className="w-6 h-6 flex items-center justify-center flex-col rounded-full bg-pink-600 text-white">
                <FaCheck />
              </div>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 ">
                Supressão Inteligente de Ruído (AVC)
              </p>
            </div>

            <div className="flex items-center mb-6 space-x-4">
              <div className="w-6 h-6 flex items-center justify-center flex-col rounded-full bg-pink-600 text-white">
                <FaCheck />
              </div>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 ">
                Touch Responsivo
              </p>
            </div>

            <div className="flex items-center mb-6 space-x-4">
              <div className="w-6 h-6 flex items-center justify-center flex-col rounded-full bg-pink-600 text-white">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 ">
                Bateria de Alta Duração
              </p>
            </div>

            <div className="flex items-center mb-6 space-x-4">
              <div className="w-6 h-6 flex items-center justify-center flex-col rounded-full bg-pink-600 text-white">
                <FaCheck />
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 ">
                Design Ergonômico e Moderno
              </p>
            </div>

            <p className="font-semibold text-pink-600 cursor-pointer hover:underline w-fit">
              {linkText}
            </p>
          </div>
        </div>
        <div className={`${imageOrder} hidden lg:flex`}>
          <Image src="/images/h1.png" alt="image" width={380} height={380} />
        </div>
      </div>
    </div>
  );
};

export default About;
