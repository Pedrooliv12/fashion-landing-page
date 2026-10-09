<div align="center">

# Scorpion gytano · Landing Page

A static, mobile-first landing page for a fashion retailer, with sales handled through WhatsApp.

[Português](README.md) · **English**

</div>

---

## Overview

This is an academic project: a landing page built for **Scorpion gytano**, an urban fashion store. The page showcases the store's collections and guides visitors to complete their purchase through a direct WhatsApp conversation.

The project follows Spec-Driven Development with [GitHub Spec Kit](https://github.com/github/spec-kit). The specification, implementation plan and task breakdown live in [`specs/`](specs/001-scorpion-landing-page/).

## Features

- **Product showcase** with category and new-arrival filters
- **WhatsApp checkout**: every product opens a chat with a pre-filled message naming the item
- **Mobile-first** layout, tested from 320 px to 2560 px
- **Accessible**, meeting WCAG AA contrast, keyboard navigation and reduced-motion support
- **Fast**: scored 100 in Lighthouse Performance, Accessibility, Best Practices and SEO during project validation
- **Zero dependencies**: no frameworks, no package manager, no build step

## Tech Stack

HTML5 · CSS3 · Vanilla JavaScript

## Getting Started

### Prerequisites

Any static file server. Python and the VS Code **Live Server** extension both work.

### Running locally

```bash
git clone https://github.com/Pedrooliv12/fashion-landing-page.git
cd fashion-landing-page
python -m http.server 3000 --directory site
```

Then open `http://localhost:3000`.

> Serve the files over HTTP instead of opening `index.html` directly. Browsers block self-hosted fonts on `file://` URLs.

## Project Structure

```text
site/
├── index.html            # Page markup and static copy
└── assets/
    ├── css/styles.css    # Stylesheet (palette documented at the top)
    ├── js/config.js      # Store settings: WhatsApp, products, social links
    ├── js/main.js        # Showcase, filters, menu and WhatsApp links
    ├── fonts/            # Self-hosted Montserrat
    └── img/              # WebP images and SVG logo
specs/                    # Specification, plan and tasks (Spec Kit)
```

## Using as a Template

1. **Fork or clone** this repository.
2. **Configure the store** in `site/assets/js/config.js`: WhatsApp number (digits only, including country and area code), messages, Instagram, opening hours and the product list.
3. **Replace the images** in `site/assets/img/` with WebP files. Product photos are 600×800 px. [Squoosh](https://squoosh.app) converts images in the browser.
4. **Update the branding**: the logo files (`logo.svg`, `logo-light.svg`, `favicon.svg`) and the copy in `index.html`.
5. **Adjust the colors** in `styles.css`, using the palette listed at the top of the file.
6. **Remove placeholders** before publishing. Search the code for `EXEMPLO`: these markers flag sample content that must be replaced, including the testimonials, which are fictional.

## Acknowledgments

- Sample photography from [Unsplash](https://unsplash.com/license)
- Visual reference: [nodeckagency/clothing-store-landing-page](https://github.com/nodeckagency/clothing-store-landing-page)
- Typeface: [Montserrat](https://fonts.google.com/specimen/Montserrat) (SIL Open Font License)
