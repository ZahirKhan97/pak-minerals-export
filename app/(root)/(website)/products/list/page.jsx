'use client';

import React, { useMemo, useState } from "react";
import ProductCard from "@/components/Application/Website/ProductCard";
import productsData from "@/app/data/products.json";

const products = productsData || [];

const ProductsListPage = () => {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [sortBy, setSortBy] = useState("all");

  // Categories
  const categories = [
    "All",
    ...new Set(products.map((item) => item.category)),
  ];

  // Subcategories
  const subcategories = [
    "All",
    ...new Set(products.map((item) => item.subcategory)),
  ];

  // Filtered Products
  const filteredProducts = useMemo(() => {

    let filtered = [...products];

    // Category Filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (item) => item.category === selectedCategory
      );
    }

    // Subcategory Filter
    if (selectedSubcategory !== "All") {
      filtered = filtered.filter(
        (item) => item.subcategory === selectedSubcategory
      );
    }

    // Sorting
    if (sortBy === "ascending") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === "descending") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    return filtered;

  }, [selectedCategory, selectedSubcategory, sortBy]);

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

                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(category)}
                      className={`text-left px-4 py-3 rounded-xl border transition cursor-pointer ${
                        selectedCategory === category
                          ? "bg-green-700 text-white border-green-700"
                          : "bg-white border-gray-200 hover:border-green-500"
                      }`}
                    >
                      {category}
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
                      key={index}
                      onClick={() => setSelectedSubcategory(subcategory)}
                      className={`text-left px-4 py-3 rounded-xl border transition cursor-pointer ${
                        selectedSubcategory === subcategory
                          ? "bg-green-700 text-white border-green-700"
                          : "bg-white border-gray-200 hover:border-green-500"
                      }`}
                    >
                      {subcategory}
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
                  Showing {filteredProducts.length} Products
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">

                <button
                  onClick={() => setSortBy("all")}
                  className={`px-5 py-2 rounded-xl border transition cursor-pointer ${
                    sortBy === "all"
                      ? "bg-green-700 text-white border-green-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  All
                </button>

                <button
                  onClick={() => setSortBy("ascending")}
                  className={`px-5 py-2 rounded-xl border transition cursor-pointer ${
                    sortBy === "ascending"
                      ? "bg-green-700 text-white border-green-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  Ascending
                </button>

                <button
                  onClick={() => setSortBy("descending")}
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
            {filteredProducts.length > 0 ? (

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

                {filteredProducts.map((product) => (
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