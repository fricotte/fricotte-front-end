"use client";

import { useRouter, useSearchParams } from "next/navigation";

const Card = (props: any) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleClick = (productId: number) => {
    // Créez un nouvel objet URLSearchParams en clonant les paramètres actuels
    const newSearchParams = new URLSearchParams(searchParams.toString());

    // Ajoutez ou modifiez les paramètres que vous souhaitez
    newSearchParams.set("id", productId.toString());

    // Utilisez la méthode push du router pour mettre à jour l'URL
    router.push(`/product?${newSearchParams.toString()}`);
  };
  return (
    <div
      onClick={() => handleClick(props.id)}
      className="relative h-72 bg-[#FADAD3] rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden "
    >
      <div className="relative w-full h-2/3 overflow-hidden">
        <img
          src={props.picturePath}
          alt="Description de l'image"
          className="absolute top-[-20%] left-0"
        />
      </div>
      <div className="flex relative z-10 pb-4 px-4 text-black flex-grow flex-col items-center text-center">
        <span className="flex text-lg">{props.title}</span>
        <span className="flex text-sm italic">{props.price}€</span>
      </div>
    </div>
  );
};

export default Card;
