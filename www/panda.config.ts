import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@spice-ui/panda-preset";

export default defineConfig({
  strictTokens: true,
  strictPropertyValues: true,
  preflight: true,
  presets: [createPreset()],
  include: ["./app/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  outdir: "styled-system",
});
