export const WEBSITE_HOME='/';
export const WEBSITE_PRODUCT_DETAILS='/products';
export const WEBSITE_LISTING='/products/list';

// Category wise listing (dynamic route)
export const WEBSITE_CATEGORY = (slug) => `/products/list?category=${slug}`;