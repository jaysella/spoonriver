/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import styles from "./layout.module.sass"

const Layout = ({ children, hasDrawer, drawerTitle, drawerBody }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // const aboutTitle = 'About this project:'
  // const aboutBody = 'This website was made for an English Literature project by high school friends + classmates, including Jay Sella, Oscar Lloyd, and Nick Casertano in the metropolitan Washington, D.C. area.'

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>
        <div className={styles.outer_wrapper}>
          <div className="horizontal-wrapper">
            {children}
            <footer className="slide">
              <div>
                <p>An English literature project.</p>
                <hr/>
                <p><b>&copy; {new Date().getFullYear()} Jay Sella, Oscar Lloyd, and Nick Casertano.</b></p>
                <hr/>
                <p>All Rights Reserved.</p>
                <p>Made with punctiliousness in the Washington, D.C. area.</p>
                <p><Link to="/about">About this project...</Link></p>
                <p>A <a href="//jaysella.dev" target="_blank" rel="noopener noreferrer">Jay Sella</a> project, built with <a href="https://www.gatsbyjs.org">Gatsby</a>.</p>
              </div>
            </footer>
          </div>
        </div>
        {hasDrawer === 'true' && (
          <div className={styles.drawer_open}>
            <h2>{drawerTitle}</h2>
            <p>{drawerBody}</p>
            <br/>
            <h4>Relations:</h4>
            <p>Someone &mdash; Hod Putt &mdash; Someone Else</p>
          </div>
        )}
        {hasDrawer !== 'true' && (
          <div className={styles.drawer_closed}>
            {/* <p>Please select a narrative above.</p> */}
          </div>
        )}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
