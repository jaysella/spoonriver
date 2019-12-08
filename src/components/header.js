import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import styles from "./layout.module.sass"


export default class Header extends Component {

  constructor(props) {
    super(props)
    this.state = { query: '' }
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleQuery(event) {
    this.setState({ query: event.target.value });
    this.props.parentCallback(event.target.value)
  }

  render() {
    return (
      <header className={styles.header}>
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => (
            <h1>
              <Link to="/">
                {data.site.siteMetadata.title}
              </Link>
            </h1>
          )}
        />
        <input type="text" placeholder="Search" name="query" onChange={this.handleQuery} />
      </header>
    )
  }
}