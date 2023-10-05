# Student Hub Website Frameworks

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


## For Other Student Hubs: How to make your own copy of the project

1. [Fork this repository](https://github.com/DSSD-Madison/student-hub-website-framework/fork)

2. [Create a Netlify account](https://www.netlify.com/), preferably using the GitHub account that forked the repository.

3. After signing up to Netlfiy, you should see a prompt to **Deploy your first project**. If not, or if you lose that link, go [here](https://app.netlify.com/signup/start). Click **Deploy with GitHub**. Follow the steps that Netlify provides to connect to your GitHub account,
allow access to the repository you forked, and deploy the repository. We'll come back to Netlify in a bit.

4. Now, create a Contentful account, after entering some personal information, you'l be prompted to **Start with a template**, or **Start from scratch**. Select to **Start from scratch**.

5. Now, you should be prompted to design you content model, we'll skip that for now and revisit it later.

6. Instead, click on **Settings** in the top right corner, then click on **API Keys**. Click **Add API key**, then keep the page it opens ready for later.

7. [Install the Contenful CLI](https://www.contentful.com/developers/docs/tutorials/cli/installation/)

8. Login in the Contentful CLI using ```contentful login```

9. Clone the forked GitHub repo to your local machine. In the project folder, run \
```bash
contentful space import --space-id SPACE_ID --content-file contentful-config.json
```
Replace SPACE_ID with the space id from the API Key page you openned in step 6. This will import the content models, and some content from
DSSD Madison, into your Contentful project. The **Content Types** page should now have several types, and the the **Content** page should
now have many entries.

10. Finally, we need to tell Netlify the credentials of our Contentful project. In your Netlify projecy, click on **Site Settings**, then 
**Environment Variables**. Add the following 4 variables:

CACHING_MAX_AGE with value equal to the number of seconds you want netlify cache the html for. e.g. 86400 for one day.
CONTENTFUL_ACCESS_TOKEN with value equal to the "Content Delivery API - access token" which you can copy from the API Key page
CONTENTFUL_ENVIRONMENT with value equal to "master"
CONTENTFUL_SPACE with value equal to the space id from the API Key page (same as from step 9)
NODE_VERSION with value 16.13.1

11. Click on **Deploys**, then click on the most recent deploy. Click **Options** then **Clear cache and retry with latest branch commit**

Now, if you go to **Site Overview**, and click on the url, you should see your fully functional site. You can edit the content in
contentful with your own Hub's info, and make edits to the website's styling by updating the main branch in your GitHub repository


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








