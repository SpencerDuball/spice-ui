import { type SemanticTokens, definePreset } from "@pandacss/dev";
import { type IColorPalette, colors } from "./utils/colors.js";
import slate from "./colors/slate.js";
import { semanticTokens } from "./theme/semantic-tokens/index.js";
import { tokens } from "./theme/tokens/index.js";
import { breakpoints } from "./theme/breakpoints.js";
import { conditions } from "./theme/conditions.js";
import { containerSizes } from "./theme/containerSizes.js";
import { globalCss } from "./theme/global-css.js";
import { keyframes } from "./theme/keyframes.js";
import { textStyles } from "./theme/text-styles.js";

export interface PresetOptions {
  colors: IColorPalette[];
  gray: IColorPalette;
}

const DefaultOptions: PresetOptions = {
  colors,
  gray: slate,
};

export const createPreset = (options: PresetOptions = DefaultOptions) => {
  const standardizeGrayTokens = (tokens: SemanticTokens["colors"]) =>
    JSON.parse(JSON.stringify(tokens).replace(new RegExp(options.gray.name, "g"), "gray"));

  const colorTokens = options.colors
    .map((color) => ({ [color.name]: color.tokens }))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {});
  const semanticColorTokens = options.colors
    .map((color) => ({ [color.name]: color.semanticTokens }))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {});

  return definePreset({
    name: "@spice-ui/panda-preset",
    presets: ["@pandacss/preset-base"],
    conditions,
    globalCss,
    theme: {
      extend: {
        breakpoints,
        keyframes,
        textStyles,
        containerSizes,
        tokens: {
          ...tokens,
          colors: {
            ...tokens.colors,
            ...colorTokens,
            gray: options.gray.tokens,
          },
        },
        semanticTokens: {
          ...semanticTokens,
          colors: {
            ...semanticTokens.colors,
            ...semanticColorTokens,
            gray: standardizeGrayTokens(options.gray.semanticTokens),
          },
        },
      },
    },
  });
};
