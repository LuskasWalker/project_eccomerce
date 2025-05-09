import React from "react";
import { FaBluetoothB } from "react-icons/fa";
import { HiOutlineSpeakerXMark } from "react-icons/hi2";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdBatterySaver, MdOutlineTouchApp } from "react-icons/md";
import { WiRaindrop } from "react-icons/wi";

const featuresData = [
  {
    title: "Touch",
    description:
      "Comandos que facilitam sua experiência: mude músicas e atenda chamadas com um simples toque.",
    icon: <MdOutlineTouchApp className="w-12 h-12 text-pink-600 mx-auto" />,
  },
  {
    title: "Bateria que Acompanha Você",
    description:
      "Longas horas de autonomia para você curtir sua música sem preocupações.",
    icon: <MdBatterySaver className="w-12 h-12 text-pink-600 mx-auto" />,
  },
  {
    title: "Cancelamento Ativo de Ruído",
    description:
      "Mergulhe na sua música com tecnologia que silencia o mundo ao seu redor.",
    icon: <HiOutlineSpeakerXMark className="w-12 h-12 text-pink-600 mx-auto" />,
  },
  {
    title: "Conexão Instantânea",
    description:
      "Emparelhamento rápido e estável para uma experiência sem interrupções.",
    icon: <FaBluetoothB className="w-12 h-12 text-pink-600 mx-auto" />,
  },
  {
    title: "Resistência à Prova de Vida",
    description:
      "Construção resistente a suor, respingos e poeira, perfeita para acompanhar seu ritmo diário sem preocupações.",
    icon: <WiRaindrop className="w-12 h-12 text-pink-600 mx-auto" />,
  },
  {
    title: "Design Minimalista e Elegante",
    description:
      "Estilo moderno e discreto que combina perfeitamente com qualquer ambiente e ocasião.",
    icon: <LuLayoutDashboard className="w-12 h-12 text-pink-600 mx-auto" />,
  },
];

const Features = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[88%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {featuresData.map((feature, index) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-anchor-placement="top-center"
              key={index}
              className="text-center mx-auto"
            >
              <div className="mx-auto text-center">{feature.icon}</div>
              <h1 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
