# Academic theme

The active academic layout is adapted from [Minimal Light](https://github.com/yaoyao-liu/minimal-light) by Yaoyao Liu, source commit `1ea07f39518ac44644406380c83da6f89037c4fc` (CC0-1.0). The license is retained at `assets/css/minimal-light.LICENSE`.

- `_layouts/academic.html`: shared profile, navigation, metadata and page shell.
- `assets/css/academic.css`: local styles, dark/light color palettes, responsive layout, keyboard focus and print styles.
- `_includes/academic-item.html`: publication and project list entries.
- Main pages opt into `layout: academic`; project/publication details use collection defaults in `_config.yml`.
- Existing Markdown sources, URLs and PDF assets remain in place. No remote theme, external font or icon CDN is required. `assets/js/academic.js` provides an accessible dark/light theme switch; content and navigation work without JavaScript.

The previous layouts are retained for legacy pages. To change appearance, edit the academic files above; do not overwrite source content or mix the previous theme stylesheet into the academic layout.
