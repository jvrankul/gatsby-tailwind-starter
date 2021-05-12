# Gatsby + Tailwind Starter

## Description

This project extends the [Gatsby quick start project](https://www.gatsbyjs.com/docs/quick-start/) and includes [Tailwind](https://tailwindcss.com/) for styling (both PostCSS and CSS-in-JS options). Refer to the [Gatsby Tailwind CSS docs](https://www.gatsbyjs.com/docs/how-to/styling/tailwind-css/) for more info around setup.

## 🚀 Quick start

- To get started, install packages with `npm install` then `npm run develop`
- Your site should now be running at http://localhost:8000

## Styling Options

You can choose to use either PostCSS or CSS-in-JS via `twin.macro` for styling. Make sure you uninstall the packages that you are not using.

1. PostCSS uses className to apply Tailwind utility classes, i.e:

```html
<div className="flex flex-col justify-center ...">...</div>
```

2. CSS-in-JS uses Emotion and the twin.macro library. Refer to `src/index.js` for a working example.
