import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "coverage/**"],
  },
  ...nextCoreWebVitals,
];

export default eslintConfig;
