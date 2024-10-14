Here\'s the updated `README.md` with the information about the GitHub Actions workflow \(`deploy.yml`\) and the logos for **Insighter** and **Docusaurus** at the beginning\.

---

<img src="https://insightest.app/logo-white.png" alt="drawing" width="200"/> \+ <img src="https://docusaurus.io/img/docusaurus.svg" alt="drawing" width="200"/>

This repository contains the setup for a **Docusaurus** site enhanced with **Insighter** and custom CSS\. The site can be deployed through **GitHub Pages** and managed using external CMS systems like **DHub** or **Insighter**\.

## Table of Contents

- [Features](#features)

- [Prerequisites](#prerequisites)

- [Getting Started](#getting-started)

    - [Installation](#installation)

    - [Custom CSS](#custom-css)

- [Content Management](#content-management)

    - [Using Insighter](#using-insighter)

    - [Using DHub](#using-dhub)

- [Deployment](#deployment)

    - [Deploying to GitHub Pages](#deploying-to-github-pages)

    - [Direct Fork Deployment via Insighter](#direct-fork-deployment-via-insighter)

- [Contributing](#contributing)

- [License](#license)

## Features

- **Docusaurus**\: Easily create documentation websites with Markdown\.

- **Insighter**\: Manage content\, transform test cases into documentation\, and integrate with GitHub\-specific CMS trees\.

- **Custom CSS**\: Enhance the default theme with personalized styles\.

- **GitHub Pages**\: Deploy and host the site for free\, with automated deployment workflows\.

- **CMS Support**\: Seamlessly integrate with CMS tools like DHub or Insighter\.

- **Automated Deployment**\: Deployment is managed by a `deploy.yml` GitHub Actions workflow triggered by changes in the `build` branch\.

## Prerequisites

- **Node\.js** and **npm** installed on your machine\.

- A **GitHub** account for repository hosting and deployment\.

- \(Optional\) An **Insighter** or **DHub** account to manage your content\.

## Getting Started

### Installation

1. Clone this repository\:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

1. Install dependencies\:

```bash
npm install
```

1. Start the local server\:

```bash
npm run start
```

1. Your Docusaurus site should now be available at `http://localhost:3000`\.

### Custom CSS

To apply custom styles\, modify the CSS file at `src/css/custom.css`\. Add your styles here to override or extend the default theme\:

```css
/* Example custom CSS */
:root {
  --ifm-color-primary: #005f73;
}

.custom-banner {
  background-color: #94d2bd;
  color: #0a9396;
  padding: 20px;
  text-align: center;
}
```

## Content Management

### Using Insighter

**Insighter** is an online web testing platform that allows you to transform your test cases into documentation\. It also includes a GitHub\-specific CMS\, with a dedicated **Docusaurus\-specific CMS tree** for managing documentation easily\.

1. Sign in to **[Insighter](https://insightest.app)** and connect your GitHub repository\.

2. Use Insighter’s interface to manage both test cases and content for your Docusaurus site\. Insighter automatically integrates test documentation into your content tree\.

3. Insighter also features a **GitHub\-Docusaurus\-specific CMS tree**\, which allows for a structured organization of pages\, making it easy to manage and update your documentation\.

4. Changes made in Insighter will automatically reflect on your Docusaurus site after deployment\.

### Using DHub

1. Sign in to **[DHub](https://dhub.app)** and integrate your repository\.

2. DHub provides content management functionalities similar to Insighter\, enabling you to create and manage content remotely\.

3. Sync changes directly to GitHub\, and your site will update upon deployment\.

## Deployment

### Deploying to GitHub Pages

1. The deployment is handled automatically via the **GitHub Actions** workflow defined in `.github/workflows/deploy.yml`\. This workflow is set up to listen for changes on the `build` branch\. You can freely make changes to the `master` branch without triggering a deployment\.

2. Post\-processing for the `baseUrl` in the `build` files is also performed automatically during the deployment process\.

3. To manually trigger a deployment\, push changes to the `build` branch\:

```bash
git push origin build
```

1. The workflow will handle building and deploying your site to GitHub Pages\, making it live at your configured URL\. You can also use pull requesting onto the `build` branch\.

### Direct Fork Deployment via Insighter

If you are using **Insighter** as your CMS\:

1. Navigate to **[Insighter](https://insightest.app)**\.

2. Fork this repository directly from the Insighter interface\.

3. After forking\, customize content using Insighter’s CMS features\, such as test case transformation or the GitHub\-Docusaurus\-specific CMS tree\.

4. Automatically deploy changes to your GitHub Pages by linking your GitHub account within Insighter\.

## Contributing

Contributions are welcome\! Please open an issue or submit a pull request for any improvements or features you\'d like to see\.

## License

This project is licensed under the [MIT License](LICENSE)\.

---

Let me know if you\'d like to tweak anything further\!
