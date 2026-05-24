import { NextResponse } from "next/server";
import products from "@/app/data/products.json";

export async function GET() {
     const mineralsProducts = products.filter(
        (p) => p.category === "Minerals" && p.is_featured === true
    );

    const gemsProducts = products.filter(
        (p) => p.category === "Gemstones" && p.is_featured === true
    );

    const minerals = mineralsProducts.splice(0, 6);
    const gems = gemsProducts.splice(0, 6);
    return NextResponse.json({ minerals, gems });
}