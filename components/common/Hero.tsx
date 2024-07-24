import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <Image
        src="/Assets/mainImage.jpg"
        alt="hero image"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }} // optional
      />
    </div>
  );
};

export default Hero;
