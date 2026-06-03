import { Suspense } from "react";
import ProductsListClient from "./ProductsListClient";

export default function ProductListPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsListClient />
    </Suspense>
  );
}