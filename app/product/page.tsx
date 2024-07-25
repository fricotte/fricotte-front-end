"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
// import { createClient } from "@/utils/supabase/server";
// const supabase = createClient();

const Product = (props: any) => {
  const searchParams = useSearchParams();
  // Récupération des paramètres de query
  const param1 = searchParams.get("id");
  return (
    <>
      <h1 className="text-black">{param1}</h1>
    </>
  );
};

export default Product;
