# Setup

## Initial Setup

Use the following properties in the config:
- `strictTokens: true`
- `strictPropertyValues: true`

Use the prettier plugin for auto-sorting styles:
- `@pandabox/prettier-plugin`

## Guidelines

### No Descent Selectors

Try not to use descent selectors such as `& span` or others, what you should use instead is: TODO

### Use Pseudo Selectors

Use the pseudo selectors such as [pseudo props](https://panda-css.com/docs/concepts/conditional-styles#reference) instead of selectors such as `&:hover`.

## Component Styling

- What is the difference between `cva` and `sva`? Which is preferred to use?
- Use the `sx` to merge a recipe style and a css style: `sx(button({ size: "small" }), css({ fontWeight: "500" }))`