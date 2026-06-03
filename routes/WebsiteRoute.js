export const WEBSITE_HOME='/';
export const WEBSITE_PRODUCT_DETAILS='/products';
export const WEBSITE_LISTING='/products/list';
export const WEBSITE_PRIVACY_POLICY='/privacy-policy';
export const WEBSITE_TERMS_AND_CONDITIONS='/terms-conditions';
export const WEBSITE_CONTACT_US='/contact-us';

// Category wise listing (dynamic route)
export const WEBSITE_CATEGORY = (slug) => `/products/list?category=${slug}`;