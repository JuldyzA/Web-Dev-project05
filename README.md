# A04 — Advanced CSS - News Style Portfolio Homepage
1. Overview Section
Add a concise summary explaining that your project features an integrated workflow with Tailwind CSS and SASS, highlighting the benefits of both:

Tailwind CSS + SASS Integration

This project is set up to use both Tailwind CSS (utility-first CSS framework) and SASS (CSS preprocessor with variables, mixins, and nesting). This setup enables rapid prototyping with consistent design tokens and scalable component architecture.

2. How the Integration Works
Briefly describe the build pipeline and how Tailwind and SASS interact:

Build Pipeline

SASS compiles your .scss files (variables, mixins, etc.) into CSS.
PostCSS (with Tailwind) processes the generated CSS to inject utility classes and optimize the output.
The final CSS is output to public/tailwind.css.
Example:

plaintext
SASS → Compiled CSS → PostCSS (Tailwind) → Final CSS
3. File Structure
List the relevant CSS/SASS file structure to help contributors:

plaintext
src/styles/
├── main.scss          # Loads Tailwind and partials
├── _variables.scss    # Design tokens (colors, spacing, fonts, shadows)
├── _mixins.scss       # Mixins (flex, breakpoints, utilities)
├── _components.scss   # Component styles (cards, buttons, etc.)
public/
└── tailwind.css       # Compiled CSS output
4. Build Commands
Show how to build and develop the CSS:

bash
# Production build (CSS only)
npm run build:css

# Development: watch mode for SASS and Tailwind
npm run dev:css

# Full project build (JS and CSS)
npm run build
5. Usage Guidelines
Summarize when to use Tailwind classes, SASS variables/mixins/placeholders, or both:

Use Tailwind utilities in HTML for layout, spacing, and typography.
Use SASS for design tokens (variables), reusable mixins, and component styles.
Use @apply in SASS to embed Tailwind utilities within component class definitions.
6. Troubleshooting Tips
Provide a short section for common setup or build issues:

Troubleshooting

CSS not updating? Make sure npm run dev:css is running and check if public/tailwind.css is generated.
Tailwind utilities missing? Ensure @tailwind utilities; is present in main.scss and check tailwind.config.cjs paths.
SASS variables missing? Use @use 'variables' as *; in SASS files.
7. Links to Resources
Provide helpful links for contributors:

Tailwind CSS docs
SASS Guide
PostCSS
Example: How It Might Look in README.md
Markdown
## Tailwind CSS + SASS Integration

This project uses both [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS framework) and [SASS](https://sass-lang.com/) (CSS preprocessor). This setup empowers rapid prototyping, consistent design tokens, and scalable, maintainable styles.

### Build Pipeline

SASS → Compiled CSS → PostCSS (Tailwind) → Final CSS

### File Structure

```
src/styles/
├── main.scss          # Loads Tailwind and partials
├── _variables.scss    # Design tokens (colors, spacing, fonts, shadows)
├── _mixins.scss       # Mixins (flex, breakpoints, utilities)
├── _components.scss   # Component styles (cards, buttons, etc.)
public/
└── tailwind.css       # Compiled CSS output
```

### Build Commands

```bash
npm run build:css   # Production CSS build
npm run dev:css     # Dev mode: watches SASS and Tailwind
npm run build       # Full project build (JS and CSS)
```

### Usage

- Use **Tailwind utilities** in your HTML/JSX for layout and spacing.
- Use **SASS** for variables, mixins, and component style abstraction.
- Use `@apply` in SASS to combine Tailwind utilities in custom CSS classes.

### Troubleshooting

- CSS not updating? Make sure `npm run dev:css` is running.
- Verify `@tailwind utilities;` is included in `main.scss`.
- If SASS variables aren't working, use `@use 'variables' as *;` in your SASS files.

### References

- [Tailwind CSS docs](https://tailwindcss.com/docs)
- [SASS Guide](https://sass-lang.com/guide)
- [PostCSS](https://postcss.org/)
