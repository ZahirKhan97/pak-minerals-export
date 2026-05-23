'use client'
import React, { useState } from 'react'
import placeholder from "@/public/assets/product-placeholder.png";
import Image from "next/image";
import {
  FaGlobeAsia,
  FaBoxes
} from "react-icons/fa";


const ProductGallery = ({product}) => {
    const galleryImages =
    Array.isArray(product?.image) && product.image.length > 0
      ? product.image
      : [placeholder];

  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);

  console.log(product)

  return (
    <>
      <div className="relative">
        {/* Main Image */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="relative w-full h-[300px] sm:h-[450px] lg:h-[500px]">
            <Image
              src={selectedImage}
              alt="Emerald"
              fill
              priority
              unoptimized
              className="object-cover hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        {/* Floating Thumbnail Images */}
        <div className="absolute top-6 bottom-6 left-4 z-20 flex md:flex-col gap-5 overflow-y-auto max-w-[90px] md:max-w-none">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`relative min-w-[70px] w-[70px] h-[70px] rounded-xl overflow-hidden border-2 bg-white shadow-md transition cursor-pointer ${
                selectedImage === image
                  ? "border-green-700"
                  : "border-white"
              }`}
            >
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                fill
                unoptimized
                className="object-cover"
              />
            </button>
          ))}
        </div>
        <div>
         {/* Info Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 w-full'>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <FaGlobeAsia className="text-green-700 text-xl" />
                <h3 className="font-semibold text-gray-800">
                  Origin
                </h3>
              </div>

              <p className="text-gray-600 text-sm">
                {product.origin.region}
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <FaBoxes className="text-green-700 text-xl" />
                <h3 className="font-semibold text-gray-800">
                  Group
                </h3>
              </div>

              <p className="text-gray-600 text-sm">
                {product.group}
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ProductGallery