# How to contribute

## Code conventions

### Format and linting

- We have a Prettier config in place for consistent formatting. Please ensure that `format on save` is enabled in your VSCode settings.
- ESLint is also configured for linting. Please ensure that your ESLint extension is properly set up and configured.

### Naming and folder structure

- We follow a **lower/kebab-case** naming convention for files and folders.
- To keep things organized, we aim for a flat file structure, making it easier to locate files. However, feel free to organize larger components as needed.

### Exporting and importing components

- Each component should include an `index.tsx` file for exporting both default and named functions.
- When importing components, please use the absolute path whenever possible. For example:

  `import { GuestWishlist, ProductCardSkeletonList } from '@/app/components'`

  For more details on absolute imports, refer to the [Next.js documentation](https://nextjs.org/docs/14/app/building-your-application/configuring/absolute-imports-and-module-aliases).

### Styling

- If an element has more than 3 inline Tailwind classes, we recommend abstracting those classes into a reusable `className` and storing them in a `module.css` file.
- For repeated or reusable groups of Tailwind classes, these should also be abstracted into a `className` and placed in a `module.css` file for better maintainability.
- We adopt a mobile-first approach to styling, so make sure your Tailwind classes default to the smallest screen size and scale up from there.
- For styling variations across different screen sizes, please include them in a new `@apply` line to clearly indicate which styles correspond to specific screen sizes. For example:

```
.container {
  // default styling for smallest mobile size
  @apply ds-m-4 ds-flex ds-flex-col ds-items-start ds-text-start;

  // style overrides for medium size screens and larger
  @apply md:ds-m-8 md:ds-items-center md:ds-text-center;
}
```
