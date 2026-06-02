export async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products?featured=true`, {
    cache: "no-store",
  });

  return res.json();
}

export async function getProductBySlug(slug) {
  if (!slug) {
    return null;
  }

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`;
  const res = await fetch(url, { cache: "no-store" });

  const data = await res.json();

  if (!res.ok) {
    return null;
  }

  return data?.data || null;
}
