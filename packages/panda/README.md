# Differences

- In the `theme/semantic-tokens/colors.ts` not including any color specific themes, only background, foreground, borders. This is so when people add new colors, this is not broken.
- Did not add the `theme/layer-styles.ts` yet, the intellisense does not like the `currentColor` and other things in this file.
- In the `theme/global-css.ts` did not include a chunk of the CSS variables. Not sure how all of these fit in, may try to keep parity with just the components and not everything.
