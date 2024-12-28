import { defineTokens } from "@pandacss/dev";
import { animations } from "./animations.js";
import { aspectRatios } from "./aspect-ratios.js";
import { blurs } from "./blurs.js";
import { borders } from "./borders.js";
import { colors } from "./colors.js";
import { cursor } from "./cursor.js";
import { durations } from "./durations.js";
import { easings } from "./easings.js";
import { radii } from "./radius.js";
import { sizes } from "./sizes.js";
import { spacing } from "./spacing.js";
import { fontSizes, fontWeights, fonts, letterSpacings, lineHeights } from "./typography.js";
import { zIndices } from "./z-indices.js";

export const tokens = defineTokens({
  animations,
  aspectRatios,
  blurs,
  borders,
  colors,
  cursor,
  durations,
  easings,
  radii,
  sizes,
  spacing,
  fontSizes,
  fontWeights,
  fonts,
  letterSpacings,
  lineHeights,
  zIndices,
});
