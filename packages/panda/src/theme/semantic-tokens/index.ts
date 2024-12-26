import { defineSemanticTokens } from "@pandacss/dev";
import { colors } from "./colors.js";
import { shadows } from "./shadows.js";

export const semanticTokens = defineSemanticTokens({
  colors,
  shadows,
});
