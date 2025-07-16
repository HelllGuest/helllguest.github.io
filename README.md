# Anoop Kumar Portfolio (helllguest.github.io)

A modern, static portfolio site for Anoop Kumar (aka helllguest).

## Project Structure

```
helllguest.github.io/
│
├── index.htm           # Main entry point
├── 404.html            # Custom 404 page
├── assets/             # Production-ready static files
│   ├── img/            # Images
│   ├── css/            # Compiled CSS
│   └── js/             # Minified/production JS
├── src/                # Source files
│   ├── js/             # Unminified JS source
│   └── sass/           # SASS/SCSS source
├── .github/workflows/  # CI/CD workflows
├── .eslintrc.json      # ESLint config
├── .stylelintrc.json   # Stylelint config
├── .htmlhintrc         # HTMLHint config
├── package.json        # Dev dependencies & scripts
└── README.md           # This file
```

## Development

- **Edit source JS in `src/js/`**
- **Edit SASS/SCSS in `src/sass/`**
- **Compile/minify assets as needed for `assets/`**

## Linting & Security

- **JS:** `npm run lint:js` (ESLint + security rules)
- **CSS:** `npm run lint:css` (Stylelint)
- **HTML:** `npm run lint:html` (HTMLHint)
- **CI:** All checks run automatically on push/PR via GitHub Actions

## Contribution Guidelines

- Follow modular, clean code practices
- Use descriptive names and type hints where possible
- Document complex logic with comments
- Run all linters before submitting a PR
- Keep dependencies up to date

## License

MIT

---

> Maintained by Anoop Kumar (helllguest) 