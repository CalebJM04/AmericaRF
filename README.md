# Caleb Murray RF Portfolio

A Vite + React portfolio site for RF / radar hardware and embedded systems work.

## Quick start

Install Node.js first if you do not already have it.

```bash
npm install
npm run dev
```

Then open the local URL Vite prints in the terminal, usually:

```text
http://localhost:5173
```

## Build locally

```bash
npm run build
npm run preview
```

## Replace the placeholder images

The site uses these files:

```text
public/images/hero-board.jpg
public/images/downconverter.jpg
public/images/amp-interface.jpg
public/images/drone-swarm.jpg
public/images/rocket-flight-computer.jpg
```

Replace those starter images with your own. Keep the same filenames and paths.

Do not upload employer-owned, proprietary, export-controlled, ITAR-controlled, classified, customer-identifying, or restricted imagery.

## Deploy option 1: GitHub Actions

This repo includes a GitHub Pages workflow at:

```text
.github/workflows/deploy.yml
```

Steps:

1. Create a new GitHub repo.
2. Put these files in the repo.
3. Push to `main`.
4. In GitHub, go to **Settings → Pages**.
5. Under **Build and deployment**, choose **GitHub Actions**.
6. The workflow should build and deploy automatically on every push to `main`.

## Deploy option 2: gh-pages branch

This package also includes a deploy script:

```bash
npm run deploy
```

Then in GitHub Pages settings, use:

```text
Deploy from a branch → gh-pages → /root
```

## Editing content

Most copy and portfolio content lives in:

```text
src/App.jsx
```

Most visual styling lives in:

```text
src/styles.css
```

## Notes

The Vite config uses:

```js
base: "./"
```

That makes the site work well from a GitHub Pages project subpath without hard-coding the repo name.
