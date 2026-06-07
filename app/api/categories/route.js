import { NextResponse } from "next/server";
import categories from "@/app/data/categories.json";
import subCategories from "@/app/data/subcategories.json";

export async function GET() {
     const categoriesData = categories.filter((c) => c.is_featured === true);
     return NextResponse.json({ categoriesData });
}