import { Suspense } from "react";
import ProductsListClient from "./ProductsListClient";

export async function generateMetadata({ searchParams }) {
  const category = searchParams?.category || "All";

  const isAll = category === "All";

  const title = isAll
    ? "Products List | Minerals & Gems | Export Minerals"
    : `${category} Products | Export Minerals`;

  const description =
    "Explore premium export-quality minerals, gemstones, industrial minerals, and natural stones from Pakistan. Trusted global supplier of high-quality materials.";

  const keywords = [
    "minerals",
    "gemstones",
    "natural stones",
    "industrial minerals",
    "export minerals",
    "Pakistan minerals",
    "crystals",
    "coal",
    "metal ores",
  ];

  return {
    title,
    description,
    keywords,

    openGraph: {
      title,
      description,
      type: "website",
      url: "https://export-minerals.com/products/list",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: "Export Minerals",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.png"],
    },

    alternates: {
      canonical: "https://export-minerals.com/products/list",
    },
  };
}

export default function ProductListPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsListClient />
    </Suspense>
  );
}