"use client"

import { useEffect, useState } from "react";
import { ProductCardComponent, ProductResponse} from "./ProductCardComponent";


type CategoryType = {
  category: string;
};

export default async function RecommandationCategories({
  category,
}: CategoryType) {
  // api route

  const [products, setProducts] = useState<ProductResponse[]>([]);
  useEffect(() => { 
    async function fetchRecommandCategory() {
      const response = await fetch("${process.env.NEXT_PUBLIC_DUMMY_BASE_URL}/products/category/${category}");
      const products = await response.json();
      setProducts(products.products)
    }

    // calling function
    fetchRecommandCategory();
    
  }, []);
  console.log("=> Product from category: ")

  return (
  <>

  <section className="flex gap-4">
    {
    products.map((pro)=>(
      <ProductCardComponent
      images={pro.images}
      title={pro.title}
      description={pro.description}
      price={pro.price}/>
    ))

  }
  </section>
  </>
  )
}
