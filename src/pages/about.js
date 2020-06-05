import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./index.module.sass"

let title = "TEST"

const SecondPage = () => (
  <Layout hasDrawer="false">
    <SEO title="About the Project" />

    <div className={['slide slide--navigation', styles.slide, styles.entry, styles.has_background].join(' ')}>
      <Link to="/">
        <div className={styles.inner}>
          <h2>
            Home
            <span>
              &rarr;
            </span>
          </h2>
        </div>
      </Link>
    </div>
    <div className={['slide', styles.slide, styles.content].join(' ')}>
      <div className={styles.inner}>
        <h2>
          What is this project?
        </h2>
        <p>This is an English Literature project, tying together the overlapping elements between the narratives of Edgar Lee Masters' <em>Spoon River Anthology</em>.</p>
      </div>
    </div>
    <div className={['slide', styles.slide, styles.content].join(' ')}>
      <div className={styles.inner}>
        <h2>
          Who is behind this project?
        </h2>
        <p>The concept, development, design, and initial data stemmed from a December 2019 high school project conducted by Nick Casertano, Oscar Lloyd, and Jay Sella in the metropolitan Washington, D.C. area.</p>
      </div>
    </div>
    <div className={['slide', styles.slide, styles.content].join(' ')}>
      <div className={styles.inner}>
        <h2>
          How was the data sourced?
        </h2>
        <p>All of the information contained on this site is opinion-based and formulated by the authors; it is not intended to be used for scholarly work. Use of this site constitutes the user's acknowledgement of these limitations.</p>
      </div>
    </div>
    <div className={['slide', styles.slide, styles.content].join(' ')}>
      <div className={styles.inner}>
        <h2>
          Can I contribute to this site?
        </h2>
        <p><b>Yes!</b> The source code + data for this site are available on <a href="//github.com/j-651/spoonriver" target="_blank" rel="noopener noreferrer">GitHub</a>. To contribute, open an issue or PR.</p>
      </div>
    </div>


  </Layout>
)

export default SecondPage
