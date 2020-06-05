<p align="center">
  <a href="https://spoonriver.netlify.app">
    <img alt="Gatsby" src="https://spoonriver-web.netlify.app/static/media/logo.2f49b862.svg" height="80" />
  </a>
</p>
<h1 align="center">
  Spoon River Anthology
</h1>

This repository houses the source code and data for the *Spoon River Anthology* project. This site provides a graphical interface to view and analyze the anthology's 200+ characters and stories.

Original source code by <a href="https://jaysella.dev" target="_blank">Jay Sella</a>.

Original data + information created + curated by Jay Sella, Oscar Lloyd, and Nick Casertano.

## 🚀 Quick start

1. **Prerequisites**

    To clone this repository to your computer and successfully complete this quick start, you will need to have the following installed locally:

    - [Git](https://git-scm.com/downloads)
    - [Yarn](https://yarnpkg.com/getting-started/install)

    *Installation directions are beyond the scope of this document.  Instead, search [Google](http://google.com).  Installing these two packages has been written about ad-nauseum.*

1.  **Clone this site.**

    From a terminal (or GitBash for Windows users), run the following command:

    ```shell
    git clone https://github.com/j-651/spoonriver.git
    ```

1.  **Start developing.**

    Navigate into the repository's root directory and start it up.

    ```shell
    cd spoonriver/
    yarn install
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `spoonriver` directory in your code editor of choice and edit any file of your choosing. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package.json
    ├── README.md
    └── yarn.lock

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm/yarn packages) are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`.prettierignore`** (See `.prettierrc` below, first): This is a configuration file for [Prettier](https://prettier.io/) which specifies whiles files/directories should not be auto-formatted.

1.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1.  **`LICENSE`**: Gatsby is licensed under the MIT license.

1. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1. **`README.md`**: A text file containing useful reference information about your project.

1. **`yarn.lock`** (See `package.json` above, first). This is an automatically generated file based on the exact versions of your yarn dependencies that were installed for this project. **(You won’t change this file directly).**

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on their website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, it's recommended to start with their [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to their documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
