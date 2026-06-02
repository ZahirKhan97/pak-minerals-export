import { NextResponse } from "next/server";
import categories from "@/app/data/categories.json";
import subCategories from "@/app/data/subcategories.json";

export async function GET() {
     const categoriesData = categories.filter((c) => c.is_featured === true);
     const subcategoriesData = subCategories.filter((s) => s.category === categoriesData[0]?.name);
     return NextResponse.json({ categoriesData, subcategoriesData });
}