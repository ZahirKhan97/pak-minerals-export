import Image from "next/image";
import placeholder from '@/public/assets/product-placeholder.png'
import { WEBSITE_PRODUCT_DETAILS } from "@/routes/WebsiteRoute";
import Link from "next/link";

export default function ProductCard({ product }) {
  const imageSrc = Array.isArray(product.image) && product.image.length > 0 ? product.image[0] : placeholder;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition group">

      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={imageSrc}
            alt={product.name || "Product Image"}
            fill
            unoptimized
            className="object-cover group-hover:scale-105 transition duration-300"
          />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">
          {product.name}
        </h3>

        <p className="text-gray-600 mt-2 text-sm line-clamp-2">
          {product.description}
        </p>

        {/* Button */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-green-700 font-semibold">
            {product.category}
          </span>

          <Link
            href={`${WEBSITE_PRODUCT_DETAILS}/${product.slug}`}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-sm text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}