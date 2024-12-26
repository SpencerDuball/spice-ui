import { defineSemanticTokens, defineTokens } from "@pandacss/dev";

const tokens = defineTokens.colors({
  light: {
    "1": { value: "#fbfefc" },
    "2": { value: "#f4fbf6" },
    "3": { value: "#e6f6eb" },
    "4": { value: "#d6f1df" },
    "5": { value: "#c4e8d1" },
    "6": { value: "#adddc0" },
    "7": { value: "#8eceaa" },
    "8": { value: "#5bb98b" },
    "9": { value: "#30a46c" },
    "10": { value: "#2b9a66" },
    "11": { value: "#218358" },
    "12": { value: "#193b2d" },
    a1: { value: "#00c04004" },
    a2: { value: "#00a32f0b" },
    a3: { value: "#00a43319" },
    a4: { value: "#00a83829" },
    a5: { value: "#019c393b" },
    a6: { value: "#00963c52" },
    a7: { value: "#00914071" },
    a8: { value: "#00924ba4" },
    a9: { value: "#008f4acf" },
    a10: { value: "#008647d4" },
    a11: { value: "#00713fde" },
    a12: { value: "#002616e6" },
  },
  dark: {
    "1": { value: "#0e1512" },
    "2": { value: "#121b17" },
    "3": { value: "#132d21" },
    "4": { value: "#113b29" },
    "5": { value: "#174933" },
    "6": { value: "#20573e" },
    "7": { value: "#28684a" },
    "8": { value: "#2f7c57" },
    "9": { value: "#30a46c" },
    "10": { value: "#33b074" },
    "11": { value: "#3dd68c" },
    "12": { value: "#b1f1cb" },
    a1: { value: "#00de4505" },
    a2: { value: "#29f99d0b" },
    a3: { value: "#22ff991e" },
    a4: { value: "#11ff992d" },
    a5: { value: "#2bffa23c" },
    a6: { value: "#44ffaa4b" },
    a7: { value: "#50fdac5e" },
    a8: { value: "#54ffad73" },
    a9: { value: "#44ffa49e" },
    a10: { value: "#43fea4ab" },
    a11: { value: "#46fea5d4" },
    a12: { value: "#bbffd7f0" },
  },
});
const semanticTokens = defineSemanticTokens.colors({
  "1": { value: { _light: "{colors.green.light.1}", _dark: "{colors.green.dark.1}" } },
  "2": { value: { _light: "{colors.green.light.2}", _dark: "{colors.green.dark.2}" } },
  "3": { value: { _light: "{colors.green.light.3}", _dark: "{colors.green.dark.3}" } },
  "4": { value: { _light: "{colors.green.light.4}", _dark: "{colors.green.dark.4}" } },
  "5": { value: { _light: "{colors.green.light.5}", _dark: "{colors.green.dark.5}" } },
  "6": { value: { _light: "{colors.green.light.6}", _dark: "{colors.green.dark.6}" } },
  "7": { value: { _light: "{colors.green.light.7}", _dark: "{colors.green.dark.7}" } },
  "8": { value: { _light: "{colors.green.light.8}", _dark: "{colors.green.dark.8}" } },
  "9": { value: { _light: "{colors.green.light.9}", _dark: "{colors.green.dark.9}" } },
  "10": { value: { _light: "{colors.green.light.10}", _dark: "{colors.green.dark.10}" } },
  "11": { value: { _light: "{colors.green.light.11}", _dark: "{colors.green.dark.11}" } },
  "12": { value: { _light: "{colors.green.light.12}", _dark: "{colors.green.dark.12}" } },
  a1: { value: { _light: "{colors.green.light.a1}", _dark: "{colors.green.dark.a1}" } },
  a2: { value: { _light: "{colors.green.light.a2}", _dark: "{colors.green.dark.a2}" } },
  a3: { value: { _light: "{colors.green.light.a3}", _dark: "{colors.green.dark.a3}" } },
  a4: { value: { _light: "{colors.green.light.a4}", _dark: "{colors.green.dark.a4}" } },
  a5: { value: { _light: "{colors.green.light.a5}", _dark: "{colors.green.dark.a5}" } },
  a6: { value: { _light: "{colors.green.light.a6}", _dark: "{colors.green.dark.a6}" } },
  a7: { value: { _light: "{colors.green.light.a7}", _dark: "{colors.green.dark.a7}" } },
  a8: { value: { _light: "{colors.green.light.a8}", _dark: "{colors.green.dark.a8}" } },
  a9: { value: { _light: "{colors.green.light.a9}", _dark: "{colors.green.dark.a9}" } },
  a10: { value: { _light: "{colors.green.light.a10}", _dark: "{colors.green.dark.a10}" } },
  a11: { value: { _light: "{colors.green.light.a11}", _dark: "{colors.green.dark.a11}" } },
  a12: { value: { _light: "{colors.green.light.a12}", _dark: "{colors.green.dark.a12}" } },
  default: { value: { _light: "{colors.green.light.9}", _dark: "{colors.green.dark.9}" } },
  emphasized: { value: { _light: "{colors.green.light.10}", _dark: "{colors.green.dark.10}" } },
  fg: { value: { _light: "white", _dark: "white" } },
  text: { value: { _light: "{colors.green.light.a11}", _dark: "{colors.green.dark.a11}" } },
});

export default {
  name: "green",
  tokens,
  semanticTokens,
};
