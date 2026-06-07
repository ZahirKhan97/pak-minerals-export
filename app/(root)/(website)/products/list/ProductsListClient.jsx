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
  const [subcategories, setSubcategories] = useState([]);

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

    params.set("category", category.name);
    params.delete("subcategory");

    router.push(`?${params.toString()}`);

    setSelectedCategory(category.name);
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
          {/* ================= FILTERS ================= */}
          <div className="lg:col-span-3 rounded-lg">
            {/* MOBILE FILTER BUTTON */}
            <div className=" lg:hidden mb-4 flex justify-between gap-2">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="px-4 py-1 bg-green-700 text-white rounded-lg"
              >
                Filters
              </button>
              <button
                    onClick={clearAllFilters}
                    className="px-4 border border-red-300 text-red-600 rounded-lg"
                >
                    Clear All Filters
                </button>
            </div>

            {/* OVERLAY */}
            {isFilterOpen && (
              <div
                onClick={() => setIsFilterOpen(false)}
                className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              />
            )}

            {/* DRAWER / SIDEBAR */}
            <div
              className={`
                fixed lg:static top-0 left-0 h-full bg-white z-50 ml-auto px-5 py-2 overflow-y-auto
                transform transition-transform duration-300
                lg:translate-x-0
                ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}
              `}
            >
              {/* CLOSE */}
              <div className="flex justify-between items-center mb-1 lg:hidden">
                <h2 className="text-xl font-bold">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}><IoClose size={24} /></button>
              </div>

              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold hidden lg:block">
                    Filters
                </h2>

                {/* CLEAR */}
                <button
                    onClick={clearAllFilters}
                    className="px-4 border border-red-300 text-red-600 rounded-lg cursor-pointer lg:block hidden"
                >
                    Clear All Filters
                </button>
              </div>


              {/* CATEGORIES */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Categories</h3>

                <div className="flex flex-col gap-2">
                  {categories.map((c) => (
                    <button
                      key={c._id}
                      onClick={() => handleCategorySelect(c)}
                      className={`text-left px-3 rounded-lg py-1 border cursor-pointer ${
                        selectedCategory === c.name
                          ? "bg-green-700 text-white"
                          : "bg-white"
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= PRODUCTS ================= */}
          <div className="lg:col-span-9">
            {/* TOP BAR */}
            <div className="bg-white rounded-lg border lg:px-4 px-2 py-1 mb-8 flex justify-between items-center">
              <h3 className="font-semibold">
                Showing {products.length} Products
              </h3>

              {/* DESKTOP SORT */}
              <div className="hidden lg:flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="px-4 py-1 rounded-lg border bg-white flex items-center gap-0">
                      Sort: {sortBy}
                      <FaAngleDown />
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end" className="w-44">
                    <DropdownMenuItem
                      onClick={() => handleSortChange("all")}
                      className={
                        sortBy === "all" ? "bg-green-700 text-white" : ""
                      }
                    >
                      All
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => handleSortChange("ascending")}
                      className={
                        sortBy === "ascending" ? "bg-green-700 text-white" : ""
                      }
                    >
                      Ascending
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => handleSortChange("descending")}
                      className={
                        sortBy === "descending" ? "bg-green-700 text-white" : ""
                      }
                    >
                      Descending
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* MOBILE SORT */}
              <div className="lg:hidden relative">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="px-4 py-1 rounded-lg border bg-white flex items-center gap-2">
                      Sort: {sortBy}
                      <FaAngleDown />
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end" className="w-44">
                    <DropdownMenuItem
                      onClick={() => handleSortChange("all")}
                      className={
                        sortBy === "all" ? "bg-green-700 text-white" : ""
                      }
                    >
                      All
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => handleSortChange("ascending")}
                      className={
                        sortBy === "ascending" ? "bg-green-700 text-white" : ""
                      }
                    >
                      Ascending
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => handleSortChange("descending")}
                      className={
                        sortBy === "descending" ? "bg-green-700 text-white" : ""
                      }
                    >
                      Descending
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* PRODUCTS GRID */}
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
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
