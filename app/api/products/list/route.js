import productsData from "@/app/data/products.json";
import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);

    const category = searchParams.get("category");
    const subcategory = searchParams.get("subcategory");
    const sort = searchParams.get("sort"); // ascending | descending

    let products = [...productsData];

    // Category Filter
    if (category && category !== "All") {
        products = products.filter(
            (p) => p.category.toLowerCase() === category.toLowerCase()
        );
    }

    // Subcategory Filter
    if (subcategory && subcategory !== "All") {
        products = products.filter(
            (p) => p.subcategory.toLowerCase() === subcategory.toLowerCase()
        );
    }

    // Sorting
    if (sort === "ascending") {
        products.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    if (sort === "descending") {
        products.sort((a, b) =>
            b.name.localeCompare(a.name)
        );
    }

    return NextResponse.json({
        success: true,
        total: products.length,
        products,
    });
}