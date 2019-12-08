import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import styles from "./index.module.sass"

export default class IndexPage extends Component {

  state = {
    query: '',
    name: '',
    altName: '',
    description: '',
    imageSource: '',
    relations: ''
  }
  
  queryCallbackFunction = (childData) => {
    this.setState({ query: childData })
  }

  handleClick = (name, alt_name, description, image_url, relations) =>
    this.setState({
      name: [name],
      altName: [alt_name],
      description: [description],
      imageSource: [image_url],
      relations: [relations]
  })
  
  render() {
    return(
      <Layout parentQueryCallback={this.queryCallbackFunction} hasDrawer={((this.state.name && this.state.description) ? 'true' : 'false')} drawerTitle={this.state.name} drawerAltName={this.state.altName} drawerBody={this.state.description} drawerImageSource={this.state.imageSource} drawerRelations={this.state.relations} >
        <SEO title="Home" />
        <StaticQuery
          query={graphql`
            query DataQuery {
              allDataJson {
                edges {
                  node {
                    id
                    name
                    alt_name
                    description
                    image_url
                    relations
                  }
                }
              }
            }
          `}
          render={data => (
            data.allDataJson &&
              data.allDataJson.edges.map(
                ({ node }, index) =>
                  (node.name.toLowerCase().includes(this.state.query.toLowerCase()) || node.alt_name.toLowerCase().includes(this.state.query.toLowerCase()) || node.description.toLowerCase().includes(this.state.query.toLowerCase())) && (
                    <div key={index} className={['slide', styles.slide, styles.entry].join(' ')} onClick={this.handleClick.bind(null, node.name, node.alt_name, node.description, node.image_url, node.relations)}>
                      <div className={styles.inner}>
                        <h2>
                          {node.name}
                          <span>&rarr;</span>
                        </h2>
                      </div>
                    </div>
                  )
              )
          )}
        />
      </Layout>
    )
  }
}

// const IndexPage = ({ data }) => {

//   const [state, setState] = useState({ query: '', name: '', altName: '', description: '', imageSource: '', relations: '' })
//   const handleClick = (name, altName, description, imageSource, relations) =>
//     setState({
//       ...state,
//       'name': [name],
//       'altName': [altName],
//       'description': [description],
//       'imageSource': [imageSource],
//       'relations': [relations]
//     })
//   const { name, altName, description, imageSource, relations } = state

//   let query = this.state.query

//   return (
//     <Layout parentQueryCallback={this.queryCallbackFunction} hasDrawer={((name && description) ? 'true' : 'false')} drawerTitle={name} drawerAltName={altName} drawerBody={description} drawerImageSource={imageSource} drawerRelations={relations} >

//       <SEO title="Home" />

//       {/* <div className="horizontal-wrapper"> */}
//       {data.allDataJson &&
//         data.allDataJson.edges.map(
//           ({ node }, index) =>
//             (node.name.includes(query) || node.alt_name.includes(query) || node.description.includes(query)) && (
//               <div key={index} className={['slide', styles.slide, styles.entry].join(' ')} onClick={handleClick.bind(null, node.name, node.alt_name, node.description, node.image_url, node.relations)}>
//                 <div className={styles.inner}>
//                   <h2>
//                     {node.name}
//                     <span>&rarr;</span>
//                   </h2>
//                 </div>
//               </div>
//             )
//         )
//       }

//       {/* </div> */}

//     </Layout>
//   )

// }