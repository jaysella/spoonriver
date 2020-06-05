import React, { Component } from "react"

import Header from "./header"
import styles from "./layout.module.sass"

export default class Layout extends Component {

  constructor(props) {
    super(props)
    this.state = { query: '' }
  }

  queryCallbackFunction = (childData) => {
    console.log(childData)
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
                  <p><b>&copy; {new Date().getFullYear()} Jay Sella, Oscar Lloyd, and Nick Casertano.</b></p>
                  <hr />
                  <p>All Rights Reserved.</p>
                  <p>Made with punctiliousness in the Washington, D.C. area.</p>
                  <p>Website built by <a href="//jaysella.dev" target="_blank" rel="noopener noreferrer">Jay Sella</a>.</p>
                </div>
              </footer>
            </div>
          </div>

          {this.props.hasDrawer === 'true' && (
            <div className={[styles.drawer_open, !!this.props.drawerImageSource.toString() ? styles.has_columns : ''].join(' ')}>
              <div className={styles.left}>
                <h2>{this.props.drawerTitle} {this.props.drawerAltName ? (<small>based on {this.props.drawerAltName}</small>) : ''}</h2>
                <p>{this.props.drawerBody}</p>
                {
                  !!this.props.drawerRelations && this.props.drawerRelations.toString().length >= 2 && (
                    <>
                      <br />
                      <h4>Relations:</h4>
                      <p>{this.props.drawerRelations}</p>
                    </>
                  )
                }
              </div>
              {
                !!this.props.drawerImageSource.toString() && (
                  <div className={styles.right}>
                    <a href={this.props.drawerImageSource.toString()} rel="nofollow noreferrer" target="_blank">
                      <img src={this.props.drawerImageSource.toString()} alt={this.props.drawerAltName ? this.props.drawerAltName.toString() : 'Image'}></img>
                    </a>
                  </div>
                )
              }
            </div>
          )}
          {this.props.hasDrawer !== 'true' && (
            <div className={styles.drawer_closed}>
              {/* <p>Please select a narrative above.</p> */}
            </div>
          )}
        </main>
      </>
    )
  }
}