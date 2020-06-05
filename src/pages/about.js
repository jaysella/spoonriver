import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./index.module.sass"

let title = "TEST"

const SecondPage = () => (
  <Layout hasDrawer="false">
    <SEO title="About the Project" />

    <div className={['slide', styles.slide, styles.entry, styles.has_background].join(' ')}>
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
        <p>This website was built for a December 2019 high school project conducted by Jay Sella, Oscar Lloyd, and Nick Casertano in the metropolitan Washington, D.C. area.</p>
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


  </Layout>
)

export default SecondPage
