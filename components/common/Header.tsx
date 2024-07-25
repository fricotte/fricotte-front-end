"use client";

import { use, useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import { RiMenuFill } from "react-icons/ri";
import { IoIosCart } from "react-icons/io";
import Drawer from "./Drawer";
import { useWindowDimensions } from "../../utils/useWindowsDimension";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const size = useWindowDimensions();
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {size === "xs" || size === "sm" ? (
        <div className="flex w-full  h-24 flex-row items-center px-8">
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
      ) : (
        <div className="w-screen flex justify-evenly items-center h-20 my-3">
          <a href="/" className="text-black ">
            Accueil
          </a>
          <a href="#" className="text-black ">
            Produits
          </a>
          <Image
            src="/Assets/logo.png"
            alt="Description de l'image"
            layout="fit"
            width={150}
            height={150}
            objectFit="cover"
            className="" // Déplacez l'image vers le haut
          />
          <a href="#" className="text-black ">
            Blog
          </a>

          <a href="#" className="text-black ">
            FAQ
          </a>
        </div>
      )}
      <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Header;

//   return (
//     <div>
//       {size === "xs" || size === "sm" || size === "md" ? (
//         <div className="flex w-full  h-24 flex-row items-center px-4">
//           <div className="flex w-1/3 justify-start ">
//             <RiMenuFill color="black" size={25} onClick={toggleDrawer} />
//           </div>
//           <div className="flex w-1/3 justify-center">
//             <Image
//               src="/Assets/logo.png"
//               alt="Description de l'image"
//               layout="fit"
//               width={150}
//               height={150}
//               objectFit="cover"
//               className="" // Déplacez l'image vers le haut
//             />
//           </div>
//           <div className="flex w-1/3 justify-end">
//             <IoIosCart color="black" size={25} />
//           </div>
//         </div>
//       ) : (
//         <p>Veuillez vous connecter pour continuer.</p>
//       )}

//       <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
//     </div>
//   );
// };

// export default Header;

{
  /* <div className="flex w-full  h-24 flex-row items-center px-4">
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
      </div> */
}
