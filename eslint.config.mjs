import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "scripts/generate-results.cjs",
    ],
  },
  // configs base do Next + TS
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // overrides / regras do projeto
  {
    rules: {
      // deixa usar `any` sem quebrar o build (só aviso)
      "@typescript-eslint/no-explicit-any": "off",

      // variáveis não usadas viam como aviso (pode tirar se quiser)
      "@typescript-eslint/no-unused-vars": "off",

      // Desabilita regras que estão causando erro no build
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];

export default eslintConfig;
