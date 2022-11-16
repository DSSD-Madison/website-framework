# DSSD Madison Website

## Overview

This project is a content focused website made using Contentful's Headless CMS and Astro, and deployed to Netlify. We will use React and Svelte for especially interactive components, with preference to Svelte because it ships significantly less Javascript.

## Learning Resources

* [Git Tutorial](https://www.youtube.com/watch?v=8JJ101D3knE)

* [Javascript Syntax Tutorial](https://www.w3schools.com/js/js_syntax.asp)

* [HTTP Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)

* [Astro Docs](https://docs.astro.build/en/getting-started/), especially:

    * [MPA vs. SPA](https://docs.astro.build/en/concepts/mpa-vs-spa/)

    * [Astro Islands](https://docs.astro.build/en/concepts/islands/)

    * [Project Structure](https://docs.astro.build/en/core-concepts/project-structure/)

    * [Data Fetching](https://docs.astro.build/en/guides/data-fetching/)

    * [SSR](https://docs.astro.build/en/guides/server-side-rendering/)

    * [Authoring Content](https://docs.astro.build/en/guides/content/)

* [Headless CMS Overview](https://www.contentful.com/r/knowledgebase/what-is-headless-cms/)

* [Contentful API Reference](https://www.contentful.com/developers/docs/references/content-delivery-api/#/introduction/authentication)

* [contentful.js Example usage](https://github.com/contentful/the-example-app.nodejs/blob/master/services/contentful.js)

* [Tailwind in 100s](https://www.youtube.com/watch?v=mr15Xzb1Ook)

* [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

* [Svelte](https://svelte.dev/tutorial/basics)

* [React](https://reactjs.org/tutorial/tutorial.html)

## Project Management

We will be using a Github Project with 3 sections: Backlog, In Progress, and Done. Issues in the Backlog will represent segments of work to get done, or problems that need to be fixed. 

To contribute to the project, assign an issue in the Backlog to yourself and move it to the In Progress section. Create a new branch off of main and implement the feature/fix/improvement, making commits after completing each subsection of the work. Push your code and move the issue(s) it adresses to Done. Create a pull request (PR) into main with a [closing keyword](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) in the description referencing the issue(s) that are addressed.

PRs will be reviewed by at least one project member before merging. When a PR is merged into main, the new version will automatically be deployed to Netlify.

## Development

To run the project in development, you must have Node.js and npm installed (search the web for a guide if needed). Once you've cloned this repository, first run:

```bash
npm i
```

This will install all of the external libraries used by the project. You'll also need to set up a few environment variables that configure Contentful and caching. Create a file called `.env` that sets the following variables:

```
CACHING_MAX_AGE
CONTENTFUL_ACCESS_TOKEN
CONTENTFUL_ENVIRONMENT
CONTENTFUL_SPACE
```

Now you're ready to go! Run:

```bash
npm run dev
```

This will start a local development server that hosts the website at localhost:3000, and refreshes every time you make a change.

## Color Scheme

For colors, we will use tailwind's default greys, as well as a few custom blues that are defined in the [tailwind config](tailwind.config.cjs)

```Javascript
400: '#0091E9', //dssd logo's blue, mainly for buttons and accents
500: '#006FB2', //slightly darkened dssd logo blue, good for text on light background
900: '#0D1C26' //very dark blue for text or background
```

## Content Model

You can explore the content model by utilizing the `getContentTypes` function defined in [contentful.js](src/services/contentful.js). For example, the content model will be printed each time an uncached request for the homepage is made by uncommenting these lines in [index.astro](src/pages/index.astro):

```Javascript
import { getContentTypes } from '../services/contentful';
console.log(await getContentTypes())
```








