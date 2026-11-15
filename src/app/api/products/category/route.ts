import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
) {

    const searchParams = req.nextUrl.searchParams
    const category = searchParams.get('category')

  console.log("=> Category Value", category)

 
    const response = await fetch(
      `${process.env.DUMMY_BASE_URL}/products/${category}`,
    );
    const product = await response.json();
    console.log(`===> Product: `, product);

    return NextResponse.json(product.products);
  
}
