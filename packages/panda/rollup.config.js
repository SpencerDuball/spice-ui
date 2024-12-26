import typescript from "@rollup/plugin-typescript";

/** @type {import('rollup').RollupOptionsFunction} */
const config = async () => [
  {
    input: "src/index.ts",
    output: {
      dir: "dist",
      format: "es",
      sourcemap: true,
      preserveModules: true,
    },
    plugins: [typescript({ tsconfig: "tsconfig.json" })],
    external: ["@pandacss/dev"],
  },
];

export default config;
