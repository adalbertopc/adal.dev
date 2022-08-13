export const getDomain = () =>
  process.env.NODE_ENV === "production"
    ? process.env.WEBSITE_DOMAIN
    : "http://localhost:3000";
