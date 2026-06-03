import Link from "next/link";
import ProductGallery from "@/components/Application/Website/ProductGallery";
import { getProductBySlug } from "@/lib/products";
import { FaCheckCircle, FaTags, FaWhatsapp } from "react-icons/fa";
import { WEBSITE_LISTING } from "@/routes/WebsiteRoute";

const ProductDetailPage = async ({ params }) => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const product = await getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center text-red-500 justify-center">
        Product Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#f4fff6] py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-green-700 transition">
            Home
          </Link>

          <span>/</span>

          <Link
            href={WEBSITE_LISTING}
            className="hover:text-green-700 transition"
          >
            Products
          </Link>

          <span>/</span>

          <span className="text-green-700 font-medium">{product.name}</span>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-13 items-start">
          {/* LEFT SIDE */}
          <ProductGallery product={product} />

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-4">
            {/* Category */}
            <div className="flex flex-wrap gap-3">
              <span className="bg-green-100 text-green-700 text-sm px-4 py-1 rounded-sm font-medium">
                {product.category}
              </span>

              <span className="bg-orange-100 text-orange-700 text-sm px-4 py-1 rounded-sm font-medium">
                {product.subcategory}
              </span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                {product.name}
              </h1>

              <p className="text-lg text-gray-500 mt-1">{product.local_name}</p>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Colors */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Available Colors
              </h3>

              <div className="flex flex-wrap gap-2">
                {product.color.map((color, index) => (
                  <span
                    key={index}
                    className="bg-white border border-gray-200 px-4 py-1 rounded-sm text-sm text-gray-700 shadow-sm"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* Available As */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Available As
              </h3>

              <div className="grid sm:grid-cols-3 gap-3">
                {product.available_as.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white px-3 py-1  rounded-sm border border-gray-100 shadow-sm"
                  >
                    <FaCheckCircle className="text-green-600 text-lg" />

                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Export Grades */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Export Grades
              </h3>

              <div className="flex flex-wrap gap-3">
                {product.export_grades.map((grade, index) => (
                  <span
                    key={index}
                    className="bg-green-700 text-white px-4 py-1 rounded-sm text-sm"
                  >
                    {grade}
                  </span>
                ))}
              </div>
            </div>

            {/* Unit & MOQ */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white p-5 rounded-sm border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Unit of Sale
                </h3>

                <ul className="space-y-2">
                  {product.unit_of_sale.map((unit, index) => (
                    <li
                      key={index}
                      className="text-gray-600 text-sm flex items-center gap-2"
                    >
                      <FaTags className="text-green-600" />
                      {unit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-5 rounded-sm border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Minimum Order
                </h3>

                <ul className="space-y-2">
                  {product.minimum_order.map((order, index) => (
                    <li
                      key={index}
                      className="text-gray-600 text-sm flex items-center gap-2"
                    >
                      <FaCheckCircle className="text-green-600" />
                      {order}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Special Note */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-sm px-4 py-2">
              <h3 className="font-semibold text-yellow-800 mb-2">
                Special Note
              </h3>

              <p className="text-yellow-700 text-sm leading-relaxed">
                {product.special_note}
              </p>
            </div>

            <a
              href={`https://wa.me/923314421188?text=${encodeURIComponent(
                `Hello, I'm interested in ${product.name}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-sm font-medium transition"
            >
              <FaWhatsapp size={20} />
              Send an Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
