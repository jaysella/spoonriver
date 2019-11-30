import React, { useState } from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import styles from "./index.module.sass"

const IndexPage = ({ data }) => {

  const [state, setState] = useState({ name: '', description: '' })
  const handleClick = (name, description) =>
    setState({
      ...state,
      'name': [name],
      'description': [description]
    })
  const { name, description } = state

  return (
    <Layout hasDrawer={((name && description) ? 'true' : 'false')} drawerTitle={name} drawerBody={description}>
      
      <SEO title="Home" />

      {/* <div className="horizontal-wrapper"> */}
        {data.allDataJson &&
          data.allDataJson.edges.map((item, index) => {
            console.log(item)
            return (
              <div key={index} className={['slide', styles.slide, styles.entry].join(' ')} onClick={handleClick.bind(null, item.node.name, item.node.description)}>
                <div className={styles.inner}>
                  <h2>
                    {item.node.name}
                    <span>&rarr;</span>
                  </h2>
                </div>
              </div>
            )
          }
        )}
      {/* </div> */}

    </Layout>
  )

}


export default IndexPage

export const query = graphql`
  query DataQuery {
    allDataJson {
      edges {
        node {
          id
          name
          description
        }
      }
    }
  }
`