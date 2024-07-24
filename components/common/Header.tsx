"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";
import { RiMenuFill } from "react-icons/ri";
import { IoIosCart } from "react-icons/io";
import Drawer from "./Drawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <div className="flex w-full  h-24 flex-row items-center px-4">
        <div className="flex w-1/3 justify-start ">
          <RiMenuFill color="black" size={25} onClick={toggleDrawer} />
        </div>
        <div className="flex w-1/3 justify-center">
          <Image
            src="/Assets/logo.png"
            alt="Description de l'image"
            layout="fit"
            width={150}
            height={150}
            objectFit="cover"
            className="" // Déplacez l'image vers le haut
          />
        </div>
        <div className="flex w-1/3 justify-end">
          <IoIosCart color="black" size={25} />
        </div>
      </div>
      <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Header;
