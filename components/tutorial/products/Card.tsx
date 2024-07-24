const Card = (props: any) => {
  return (
    <div className="relative h-72 bg-[#FADAD3] rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden flip-card">
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
