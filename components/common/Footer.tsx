import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="bg-[#FADAD3] w-screen text-black text-center justify-center items-center  p-6">
        <h1 className="mb-3">Inscrivez-vous à notre newsletter</h1>
        <input
          type="email"
          placeholder=" Entrez votre email"
          className="border-[1px] rounded-2xl border-black bg-transparent p-1 mb-3"
        />
        <div className="flex flex-row gap-3 justify-center mb-5">
          <FaInstagram size={25} />
          <FaFacebook size={25} />
          <FaWhatsapp size={25} />
        </div>
        <p className="text-sm">© 2024, FRICOTTE - Powered by Shopify</p>
      </div>
    </>
  );
};

export default Footer;
