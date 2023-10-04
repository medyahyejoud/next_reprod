/** @type {import('prettier').Config} */
module.exports = {
  importOrder: ["^(@/)", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    "@vercel/style-guide/prettier",
    "@trivago/prettier-plugin-sort-imports",
    /**
     * **NOTE** tailwind plugin must come last!
     * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
     */
    "prettier-plugin-tailwindcss",
  ],
};
