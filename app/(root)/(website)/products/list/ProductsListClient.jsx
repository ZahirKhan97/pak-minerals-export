"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/Application/Website/ProductCard";
import { getCategories } from "@/lib/categories";
import { useRouter, useSearchParams } from "next/navigation";
import { WEBSITE_LISTING } from "@/routes/WebsiteRoute";
import { FaAngleDown } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ProductsListClient = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("all");

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();

  // ================= GET PRODUCTS =================
  const getProducts = async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams();

      if (selectedCategory !== "All") {
        params.append("category", selectedCategory);
      }

      if (sortBy !== "all") {
        params.append("sort", sortBy);
      }

      const response = await fetch(`/api/products/list?${params.toString()}`);
      const data = await response.json();

      setProducts(data.products || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // ================= GET FILTERS =================
  const getFilters = async () => {
    try {
      const data = await getCategories();
      setCategories(data.categoriesData || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFilters();
  }, []);

  useEffect(() => {
    getProducts();
  }, [selectedCategory, sortBy]);

  // ================= URL INIT =================
  useEffect(() => {
    const category = searchParams.get("category") || "All";
    const sort = searchParams.get("sort") || "all";

    setSelectedCategory(category);
    setSortBy(sort);
  }, [searchParams]);

  // ================= HANDLERS =================
  const handleCategorySelect = (category) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("category", category.slug);

    router.push(`?${params.toString()}`);

    setSelectedCategory(category.slug);
    setIsFilterOpen(false);
  };

  const handleSortChange = (value) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("sort", value);

    router.push(`?${params.toString()}`);

    setSortBy(value);
    setIsSortOpen(false);
  };

  const clearAllFilters = () => {
    router.push(WEBSITE_LISTING);

    setSelectedCategory("All");
    setSortBy("all");
    setIsFilterOpen(false);
  };

  return (
    <section className="min-h-screen lg:pt-8 pt-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="mb-10">
          <span className="text-green-700 font-semibold uppercase tracking-wider">
            Products
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-3">
            Explore Premium Minerals
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl">
            Browse export-quality minerals, salts, and industrial products.
          </p>
        </div>

        {/* ================= LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* ================= PRODUCTS ================= */}
          <div className="lg:col-span-12">
            {/* TOP BAR */}
            <div className="bg-white rounded-lg border lg:px-4 px-2 py-3 mb-8">
              {/* Top Row */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
                <h3 className="font-semibold">
                  Showing {products.length} Products
                </h3>

                {/* Actions */}
                <div className="flex flex-wrap gap-2 lg:gap-2">
                  {/* Category (hidden on mobile OR stays dropdown) */}
                  <div className="">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="px-4 py-2 rounded-sm border border-green-700 cursor-pointer bg-white flex items-center gap-2 capitalize">
                          {selectedCategory}
                          <FaAngleDown />
                        </button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end" className="w-35 rounded-sm">
                        {categories.map((c) => (
                          <DropdownMenuItem
                            key={c._id}
                            onClick={() => handleCategorySelect(c)}
                            className={`${
                              selectedCategory === c.slug
                                ? "bg-green-700 text-white"
                                : ""
                            } cursor-pointer rounded-sm`}
                          >
                            {c.name}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* Sort (always visible but smaller on mobile) */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="px-4 py-2 rounded-sm border border-green-700 cursor-pointer bg-white flex items-center gap-2 capitalize">
                        Sort: {sortBy}
                        <FaAngleDown />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-20 rounded-sm">
                      <DropdownMenuItem 
                      className={`${sortBy === "all" ? "bg-green-700 text-white" : ""} cursor-pointer rounded-sm`}
                      onClick={() => handleSortChange("all")}>
                        All
                      </DropdownMenuItem>

                      <DropdownMenuItem
                      className={`${sortBy === "ascending" ? "bg-green-700 text-white" : ""} cursor-pointer rounded-sm`}
                        onClick={() => handleSortChange("ascending")}
                      >
                        Ascending
                      </DropdownMenuItem>

                      <DropdownMenuItem
                      className={`${sortBy === "descending" ? "bg-green-700 text-white" : ""} cursor-pointer rounded-sm`}
                        onClick={() => handleSortChange("descending")}
                      >
                        Descending
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Clear */}
                  <button
                    onClick={clearAllFilters}
                    className="px-3 py-2 border border-red-300 text-red-600 rounded-sm cursor-pointer"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>

            {/* PRODUCTS GRID */}
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-8">
                {products.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="p-10 text-center bg-white rounded-3xl border">
                No Products Found
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsListClient;
