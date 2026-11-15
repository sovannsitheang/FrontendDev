import ProductDetailDisplayComponent from "@/components/products/detail/ProductDetailDisplayComponent";
import RecommandationCategories from "@/components/products/RecommandationCategories";
import { Suspense } from "react";

export const instant = false;

const getSingleProduct = async (proId: string) => {
  const res = await fetch(`${process.env.DUMMY_BASE_URL}/products/${proId}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};

export default async function ProductDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const { id } = await params;
  console.log("ProductId =", id);

  const singleProduct = getSingleProduct(id);
  console.log("=> single product: ", singleProduct);

  //  using searchParams
  const { category } = await searchParams;

  return (
    <section>
      <Suspense fallback={<h1>Loading....</h1>}>
        <h1>Category: {category}</h1>
        <ProductDetailDisplayComponent product={singleProduct} />

        {/* recommandation of product in within category */}
        <h1>Recommandation Products</h1>

        <RecommandationCategories category={category} />
      </Suspense>
    </section>
  );
}
