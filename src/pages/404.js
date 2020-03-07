import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./index.module.sass"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
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
          Not Found...
        </h2>
        <p>You've just experienced an Error 404. The page or resource you are looking for cannot be found.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
