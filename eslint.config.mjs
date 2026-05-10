import { FlatCompat } from "@eslint/eslintrc";
import nextPlugin from "@next/eslint-plugin-next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const baseDirectory = dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory });

const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
  {
    plugins: {
      "@next/next": nextPlugin
    },
    settings: {
      next: {
        rootDir: "."
      }
    }
  },
  ...compat.extends("next/core-web-vitals", "next/typescript")
];

export default eslintConfig;
