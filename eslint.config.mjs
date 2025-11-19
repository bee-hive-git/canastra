import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // configs base do Next + TS
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // overrides / regras do projeto
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],

    rules: {
      // deixa usar `any` sem quebrar o build (só aviso)
      "@typescript-eslint/no-explicit-any": "warn",

      // variáveis não usadas viam como aviso (pode tirar se quiser)
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // se quiser também pode virar "warn" pra não travar build:
      // "react-hooks/exhaustive-deps": "warn",
    },
  },
];

export default eslintConfig;
