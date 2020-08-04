import React, { Component } from "react"
import PropTypes from "prop-types"

import Header from "./header"
import styles from "./layout.module.sass"

export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = { query: "" }
  }

  queryCallbackFunction = (childData) => {
    this.setState({ query: childData })
    this.props.parentQueryCallback(childData)
  }

  render() {
    return (
      <>
        <Header parentCallback={this.queryCallbackFunction} />
        <main>
          <div className={styles.outer_wrapper}>
            <div className="horizontal-wrapper">
              {this.props.children}

              <footer className="slide">
                <div>
                  <p>An English literature project.</p>
                  <hr />
                  <p>
                    <b>
                      &copy; {new Date().getFullYear()} Jay Sella, Oscar Lloyd,
                      and Nick Casertano.
                    </b>
                  </p>
                  <hr />
                  <p>All Rights Reserved.</p>
                  <p>Made in Washington, D.C.</p>
                  <p>
                    Website built by{" "}
                    <a
                      href="//jaysella.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Jay Sella
                    </a>
                    .
                  </p>
                  <p>
                    Source code + data are open-source.{" "}
                    <a
                      href="//github.com/j-651/spoonriver"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub repository
                    </a>
                    .
                  </p>
                </div>
              </footer>
            </div>
          </div>

          {this.props.hasDrawer === "true" && (
            <div
              className={[
                styles.drawer_open,
                !!this.props.drawerImageSource.toString()
                  ? styles.has_columns
                  : "",
              ].join(" ")}
            >
              <div className={styles.left}>
                <h2>
                  {this.props.drawerTitle}{" "}
                  {this.props.drawerAltName &&
                  this.props.drawerAltName.length > 0 ? (
                    <small>based on {this.props.drawerAltName}</small>
                  ) : (
                    ""
                  )}
                </h2>
                <p>{this.props.drawerBody}</p>
                {!!this.props.drawerRelations &&
                  this.props.drawerRelations.length >= 2 && (
                    <>
                      <br />
                      <h4>Relations:</h4>
                      <p>{this.props.drawerRelations}</p>
                    </>
                  )}
              </div>
              {!!this.props.drawerImageSource && (
                <div className={styles.right}>
                  <a
                    href={this.props.drawerImageSource}
                    rel="nofollow noreferrer"
                    target="_blank"
                  >
                    <img
                      src={this.props.drawerImageSource}
                      alt={
                        this.props.drawerAltName
                          ? this.props.drawerAltName
                          : "Image"
                      }
                    ></img>
                  </a>
                </div>
              )}
            </div>
          )}
          {this.props.hasDrawer !== "true" && (
            <div className={styles.drawer_closed}>
              {/* <p>Please select a narrative above.</p> */}
            </div>
          )}
        </main>
      </>
    )
  }
}

Layout.propTypes = {
  parentQueryCallback: PropTypes.any,
  children: PropTypes.any,
  hasDrawer: PropTypes.string,
  drawerImageSource: PropTypes.string,
  drawerTitle: PropTypes.string,
  drawerAltName: PropTypes.string,
  drawerBody: PropTypes.any,
  drawerRelations: PropTypes.any,
}
