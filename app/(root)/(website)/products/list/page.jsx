'use client';

import { useEffect, useState } from "react";
import ProductCard from "@/components/Application/Website/ProductCard";
import { getCategories } from "@/lib/categories";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { WEBSITE_LISTING } from "@/routes/WebsiteRoute";

const ProductsListPage = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [sortBy, setSortBy] = useState("all");

  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams();

      if (selectedCategory !== "All") {
        params.append("category", selectedCategory);
      }

      if (selectedSubcategory !== "All") {
        params.append("subcategory", selectedSubcategory);
      }

      if (sortBy !== "all") {
        params.append("sort", sortBy);
      }

      const response = await fetch(
        `/api/products/list?${params.toString()}`
      );

      const data = await response.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

 const getFilters = async () => {
  try {
    const data = await getCategories();
    setCategories(data.categoriesData || []);
    setSubcategories(data.subcategoriesData || []);
  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
    getFilters();
  }, []);

  useEffect(() => {
    getProducts();
  }, [
    selectedCategory,
    selectedSubcategory,
    sortBy,
  ]);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category") || "All";
    const subcategory = searchParams.get("subcategory") || "All";
    const sort = searchParams.get("sort") || "all";

    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
    setSortBy(sort);
  }, [searchParams]);

  const handleCategorySelect = (category) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("category", category.name);
    params.delete("subcategory");

    router.push(`?${params.toString()}`);

    setSelectedCategory(category.name);
    setSelectedSubcategory("All");
  };

  const handleSubcategorySelect = (subcategory) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("subcategory", subcategory.name);

    router.push(`?${params.toString()}`);

    setSelectedSubcategory(subcategory.name);
  };

  const handleSortChange = (value) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("sort", value);

    router.push(`?${params.toString()}`);

    setSortBy(value);
  };

  const clearAllFilters = () => {
    router.push(WEBSITE_LISTING); // clean URL

    setSelectedCategory("All");
    setSelectedSubcategory("All");
    setSortBy("all");
  };

  return (
    <section className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="mb-10">

          <span className="text-green-700 font-semibold uppercase tracking-wider">
            Products
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-3">
            Explore Premium Minerals
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl">
            Browse export-quality minerals, salts, and industrial products
            sourced directly from Pakistan.
          </p>

        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* SIDEBAR */}
          <div className="lg:col-span-3">

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sticky top-24">

              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Filters
              </h2>

              {/* Categories */}
              <div className="mb-8">

                <h3 className="font-semibold text-gray-800 mb-4">
                  Categories
                </h3>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={clearAllFilters}
                    className="px-5 py-2 rounded-xl border border-red-300 text-red-600 hover:bg-red-50 transition cursor-pointer"
                  >
                    Clear All
                  </button>

                  {categories.map((category, index) => (
                    <button
                      key={category._id}
                      onClick={() => handleCategorySelect(category)}
                      className={`text-left px-4 py-3 rounded-xl border transition cursor-pointer ${
                        selectedCategory === category.name
                          ? "bg-green-700 text-white border-green-700"
                          : "bg-white border-gray-200 hover:border-green-500"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}

                </div>
              </div>

              {/* Subcategories */}
              <div>

                <h3 className="font-semibold text-gray-800 mb-4">
                  Subcategories
                </h3>

                <div className="flex flex-col gap-3">
                  {subcategories.map((subcategory, index) => (
                    <button
                      key={subcategory._id}
                      onClick={() => handleSubcategorySelect(subcategory)}
                      className={`text-left px-4 py-3 rounded-xl border transition cursor-pointer ${
                        selectedSubcategory === subcategory.name
                          ? "bg-green-700 text-white border-green-700"
                          : "bg-white border-gray-200 hover:border-green-500"
                      }`}
                    >
                      {subcategory.name}
                    </button>
                  ))}

                </div>
              </div>

            </div>
          </div>

          {/* PRODUCTS SECTION */}
          <div className="lg:col-span-9">

            {/* Top Filter Bar */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-4 mb-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Showing {products.length} Products
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">

                <button
                  onClick={() => handleSortChange("all")}
                  className={`px-5 py-2 rounded-xl border transition cursor-pointer ${
                    sortBy === "all"
                      ? "bg-green-700 text-white border-green-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  All
                </button>

                <button
                  onClick={() => handleSortChange("ascending")}
                  className={`px-5 py-2 rounded-xl border transition cursor-pointer ${
                    sortBy === "ascending"
                      ? "bg-green-700 text-white border-green-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  Ascending
                </button>

                <button
                  onClick={() => handleSortChange("descending")}
                  className={`px-5 py-2 rounded-xl border transition cursor-pointer ${
                    sortBy === "descending"
                      ? "bg-green-700 text-white border-green-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  Descending
                </button>

              </div>

            </div>

            {/* Products Grid */}
            {products.length > 0 ? (

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}

              </div>

            ) : (

              <div className="bg-white rounded-3xl border border-gray-100 p-10 text-center">

                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  No Products Found
                </h3>

                <p className="text-gray-600">
                  Try changing the filters.
                </p>

              </div>

            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductsListPage;