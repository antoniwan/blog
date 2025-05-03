# Strong Vault

A personal digital space where I document my journey of building systems — digital, emotional, spiritual, and physical. This is more than just a blog; it's a living document of my exploration, creation, and growth.

## 🌟 What You'll Find Here

- 🎵 **Art & Expression** — creative soul, aesthetic power, truth-telling
- 🛠️ **DIY & Creation** — physical builds, handmade goods, crafting
- 🧘🏽‍♂️ **Integration & Growth** — inner mastery, parenting, masculine leadership
- 📚 **Learning Projects** — documentation of mastery in progress
- 🌀 **Metaspace** — reflections on the journey itself
- 👨‍👩‍👧‍👦 **Parenting** — raising resilient children, family dynamics, and personal growth
- ⚖️ **Politics** — power dynamics, social structures, and collective healing
- 🧠 **Psychology** — human behavior, social dynamics, and mental processes
- 💻 **Systems & Strategy** — technical systems, organizational design, and strategic thinking

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Modern static site builder
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [MDX](https://mdxjs.com/) - Markdown with JSX support

## 🚀 Roadmap & Recommendations

The blog's development follows a structured roadmap with ongoing improvements. For detailed recommendations and implementation status, see [RECOMMENDATIONS.md](./RECOMMENDATIONS.md).

### Current Focus Areas

1. **Content Management**

   - Content preview system
   - Automated backups
   - Content validation

2. **Search & Discovery**

   - Full-text search implementation
   - Tag-based filtering
   - Related posts suggestions

3. **Performance**

   - Image optimization
   - Lazy loading
   - Caching strategies

4. **Developer Experience**
   - Automated testing
   - CI/CD pipeline
   - Content templates

### Implementation Status

- ✅ **Completed**: Basic blog functionality, content structure, styling system
- 🚧 **In Progress**: Content preview system, image optimization
- 📅 **Planned**: Search functionality, comment system, internationalization
- ⏳ **Future**: API development, advanced analytics, content management system

## 📦 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/antoniwan/strongvault.git
cd strongvault
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 🏗️ Project Structure

```text
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable UI components
│   ├── content/     # Content collections
│   ├── layouts/     # Page layouts
│   └── pages/       # Route components
├── astro.config.mjs # Astro configuration
├── package.json     # Project dependencies
└── tsconfig.json    # TypeScript configuration
```

## 🧞 Available Scripts

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Installs dependencies                            |
| `npm run dev`       | Starts local dev server at `localhost:4321`      |
| `npm run build`     | Build your production site to `./dist/`          |
| `npm run preview`   | Preview your build locally, before deploying     |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## 🤝 Connect With Me

- 🛠 [Builds.software](https://builds.software) — my technical portfolio
- 💜 [Strong Hands, Soft Heart](https://stronghandssoftheart.com) — my brand
- 🐙 [GitHub](https://github.com/antoniwan) — open source & code
- 🌀 [BlueSky](https://bsky.app/profile/antoniwan.online) — my social brain

## 📄 License

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

---

> "If you're building something good, or trying to become someone better, I'm probably down to help. Get in touch." — Antonio Rodríguez Martínez

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).

## Styling System

The blog uses Tailwind CSS for styling, providing a utility-first approach that ensures consistency, performance, and maintainability. The styling system includes:

- **Design Tokens**: Custom colors, typography, spacing, and z-index scales defined in `tailwind.config.js`
- **Dark Mode**: Automatic dark mode support using CSS variables and Tailwind's dark mode utilities
- **Responsive Design**: Mobile-first approach with consistent breakpoints
- **Typography**: Custom font families and responsive type scale
- **Component Styles**: Base styles for common elements (headings, links, forms, etc.)
- **Accessibility**: Built-in accessibility features and utilities

### Directory Structure

```
src/
├── styles/
│   └── global.css      # Global styles and Tailwind imports
├── components/         # Reusable components
└── layouts/           # Page layouts
```

### Key Features

- **Performance**: Tailwind's JIT compiler and purge settings ensure minimal CSS output
- **Maintainability**: Utility-first approach reduces CSS specificity issues
- **Consistency**: Design tokens ensure visual consistency across components
- **Developer Experience**: Rapid prototyping with utility classes
- **Dark Mode**: Automatic dark mode support with CSS variables
