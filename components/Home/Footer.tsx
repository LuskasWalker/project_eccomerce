import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-950">
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <div className="text-white font-bold text-3xl">LOGO</div>
          <p className="mt-1 font-medium text-gray-300 lg:w-[50%]">
            Mais que áudio. Uma experiência completa em tecnologia e conforto.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg text-white font-bold">Empresa</h1>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Sobre Nós
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Serviços
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Produtos
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Nossos Clientes
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg text-white font-bold">Suporte</h1>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Informações Legais
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Termos e Condições
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Reportar
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Politicas de Privacidade
          </p>
        </div>
        <div className="flex justify-normal items-center text-white space-x-4">
          <a
            href="#"
            className="w-8 h-8 bg-blue-700 flex items-center justify-center flex-col rounded-full"
          >
            <FaFacebook />
          </a>
          <a
            className="w-8 h-8 bg-sky-500 flex items-center justify-center flex-col rounded-full"
            href="#"
          >
            <FaTwitter />
          </a>
          <a
            className="w-8 h-8 bg-red-700 flex items-center justify-center flex-col rounded-full"
            href="#"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center md:text-left">
          Copyright © 2025 Lucas Walker, Todos os direitos reservados
        </p>
      </div>
    </div>
  );
};

export default Footer;
