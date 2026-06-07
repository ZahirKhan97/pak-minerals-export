import ProductCard from "@/components/Application/Website/ProductCard";
import React from "react";
import BannerCarousel from "@/components/Application/Website/BannerCarousel";
import { getProducts } from "@/lib/products";
import Link from "next/link";
import { WEBSITE_CATEGORY } from "@/routes/WebsiteRoute";

const Home = async () => {
  const products = await getProducts();
  const minerals = products.minerals;
  const gems = products.gems;
  return (
    <>
      <BannerCarousel />
      <section id="minerals" className="pt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8 border-b pb-2">
            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-bold text-center text-green-700">
              Minerals
            </h2>

            <Link
              href={WEBSITE_CATEGORY("minerals")}
              className="px-3 py-1 md:px-5 md:py-2 bg-green-700 text-white rounded-sm hover:bg-green-800 transition"
            >
              View All
            </Link>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {minerals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="gems" className="pt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8 border-b pb-2">
            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-bold text-center text-green-700">
              Gemstones
            </h2>

            <Link
              href={WEBSITE_CATEGORY("gemstones")}
              className="px-3 py-1 md:px-5 md:py-2 bg-green-700 text-white rounded-sm hover:bg-green-800"
            >
              View All
            </Link>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
