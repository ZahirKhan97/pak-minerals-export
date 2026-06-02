export async function getCategories() {
  const res = await fetch(`${process.env.BASE_URL}/api/categories`, {
    cache: "no-store",
  });

  return res.json();
}

export async function getCategoryBySlug(slug) {
  if (!slug) {
    return null;
  }

  const url = `${process.env.BASE_URL}/api/categories/${slug}`;
  const res = await fetch(url, { cache: "no-store" });

  const data = await res.json();

  if (!res.ok) {
    return null;
  }

  return data?.data || null;
}
