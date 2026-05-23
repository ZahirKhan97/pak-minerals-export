import { NextResponse } from "next/server";
import products from "@/app/data/products.json";

export async function GET(request, {params}) {
  const {slug} = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return NextResponse.json(
      { success: false, message: "Product not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: product,
  });
}