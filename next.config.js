/** @type {import('next').NextConfig} */
module.exports = {
  basePath: "/thuho",
  assetPrefix: "/thuho",
  i18n: {
    locales: ["vi", "en"],
    defaultLocale: "vi",
    localeDetection: false,
  },
  env: {
    PORT: process.env.PORT
  },
};
