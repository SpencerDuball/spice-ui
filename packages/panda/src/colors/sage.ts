import { defineSemanticTokens, defineTokens } from "@pandacss/dev";

const tokens = defineTokens.colors({
  light: {
    "1": { value: "#fbfdfc" },
    "2": { value: "#f7f9f8" },
    "3": { value: "#eef1f0" },
    "4": { value: "#e6e9e8" },
    "5": { value: "#dfe2e0" },
    "6": { value: "#d7dad9" },
    "7": { value: "#cbcfcd" },
    "8": { value: "#b8bcba" },
    "9": { value: "#868e8b" },
    "10": { value: "#7c8481" },
    "11": { value: "#5f6563" },
    "12": { value: "#1a211e" },
    a1: { value: "#00804004" },
    a2: { value: "#00402008" },
    a3: { value: "#002d1e11" },
    a4: { value: "#001f1519" },
    a5: { value: "#00180820" },
    a6: { value: "#00140d28" },
    a7: { value: "#00140a34" },
    a8: { value: "#000f0847" },
    a9: { value: "#00110b79" },
    a10: { value: "#00100a83" },
    a11: { value: "#000a07a0" },
    a12: { value: "#000805e5" },
  },
  dark: {
    "1": { value: "#101211" },
    "2": { value: "#171918" },
    "3": { value: "#202221" },
    "4": { value: "#272a29" },
    "5": { value: "#2e3130" },
    "6": { value: "#373b39" },
    "7": { value: "#444947" },
    "8": { value: "#5b625f" },
    "9": { value: "#63706b" },
    "10": { value: "#717d79" },
    "11": { value: "#adb5b2" },
    "12": { value: "#eceeed" },
    a1: { value: "#00000000" },
    a2: { value: "#f0f2f108" },
    a3: { value: "#f3f5f412" },
    a4: { value: "#f2fefd1a" },
    a5: { value: "#f1fbfa22" },
    a6: { value: "#edfbf42d" },
    a7: { value: "#edfcf73c" },
    a8: { value: "#ebfdf657" },
    a9: { value: "#dffdf266" },
    a10: { value: "#e5fdf674" },
    a11: { value: "#f4fefbb0" },
    a12: { value: "#fdfffeed" },
  },
});
const semanticTokens = defineSemanticTokens.colors({
  "1": { value: { _light: "{colors.sage.light.1}", _dark: "{colors.sage.dark.1}" } },
  "2": { value: { _light: "{colors.sage.light.2}", _dark: "{colors.sage.dark.2}" } },
  "3": { value: { _light: "{colors.sage.light.3}", _dark: "{colors.sage.dark.3}" } },
  "4": { value: { _light: "{colors.sage.light.4}", _dark: "{colors.sage.dark.4}" } },
  "5": { value: { _light: "{colors.sage.light.5}", _dark: "{colors.sage.dark.5}" } },
  "6": { value: { _light: "{colors.sage.light.6}", _dark: "{colors.sage.dark.6}" } },
  "7": { value: { _light: "{colors.sage.light.7}", _dark: "{colors.sage.dark.7}" } },
  "8": { value: { _light: "{colors.sage.light.8}", _dark: "{colors.sage.dark.8}" } },
  "9": { value: { _light: "{colors.sage.light.9}", _dark: "{colors.sage.dark.9}" } },
  "10": { value: { _light: "{colors.sage.light.10}", _dark: "{colors.sage.dark.10}" } },
  "11": { value: { _light: "{colors.sage.light.11}", _dark: "{colors.sage.dark.11}" } },
  "12": { value: { _light: "{colors.sage.light.12}", _dark: "{colors.sage.dark.12}" } },
  a1: { value: { _light: "{colors.sage.light.a1}", _dark: "{colors.sage.dark.a1}" } },
  a2: { value: { _light: "{colors.sage.light.a2}", _dark: "{colors.sage.dark.a2}" } },
  a3: { value: { _light: "{colors.sage.light.a3}", _dark: "{colors.sage.dark.a3}" } },
  a4: { value: { _light: "{colors.sage.light.a4}", _dark: "{colors.sage.dark.a4}" } },
  a5: { value: { _light: "{colors.sage.light.a5}", _dark: "{colors.sage.dark.a5}" } },
  a6: { value: { _light: "{colors.sage.light.a6}", _dark: "{colors.sage.dark.a6}" } },
  a7: { value: { _light: "{colors.sage.light.a7}", _dark: "{colors.sage.dark.a7}" } },
  a8: { value: { _light: "{colors.sage.light.a8}", _dark: "{colors.sage.dark.a8}" } },
  a9: { value: { _light: "{colors.sage.light.a9}", _dark: "{colors.sage.dark.a9}" } },
  a10: { value: { _light: "{colors.sage.light.a10}", _dark: "{colors.sage.dark.a10}" } },
  a11: { value: { _light: "{colors.sage.light.a11}", _dark: "{colors.sage.dark.a11}" } },
  a12: { value: { _light: "{colors.sage.light.a12}", _dark: "{colors.sage.dark.a12}" } },
  default: { value: { _light: "{colors.sage.light.9}", _dark: "{colors.sage.dark.9}" } },
  emphasized: { value: { _light: "{colors.sage.light.10}", _dark: "{colors.sage.dark.10}" } },
  fg: { value: { _light: "white", _dark: "white" } },
  text: { value: { _light: "{colors.sage.light.12}", _dark: "{colors.sage.dark.12}" } },
});

export default {
  name: "sage",
  tokens,
  semanticTokens,
};
