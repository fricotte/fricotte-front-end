import { createClient } from "@/utils/supabase/server";
import Card from "@/components/tutorial/products/Card";
import Hero from "@/components/common/Hero";
import Banner from "@/components/common/Banner";
import Footer from "@/components/common/Footer";

export default async function Notes() {
  const supabase = createClient();
  const { data: products } = await supabase
    .from("products")
    .select()
    .eq("is_promoted", true);

  function getPicturePath(pictureId: string) {
    return "https://lh3.googleusercontent.com/d/" + pictureId;
  }

  return (
    <>
      <Hero />
      <Banner />
      <div className="grid w-full px-5 grid-cols-2 gap-3 mb-3">
        {products?.map((product, index) => (
          <Card
            id={product.id}
            title={product.name}
            price={product.price}
            picturePath={getPicturePath(product.pictures)}
          />
        ))}
      </div>
      <p className="text-black my-5 underline">Découvrez tous nos produits</p>
      <Footer />
    </>
  );
}
