/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component

 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import BackgroundImage from 'gatsby-background-image'
import Container from '@material-ui/core/Container';

// import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
query {
        desktop: file(relativePath: { eq: "seamless-bg-desktop.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
  `)

  console.log(data);
  const imageData = data.desktop.childImageSharp.fluid
  console.log("igm =>", imageData);

  return (

    // <BackgroundImage
    //   Tag="section"
    //   fluid={imageData}
    //   backgroundColor={`#040e18`}
    //   style={{
    //     width: "100%",
    //     backgroundPosition: "bottom center",
    //     backgroundRepeat: "repeat-y",
    //     backgroundSize: 'cover',
    //   }}
    // >
    <>

      <Container maxWidth="md">
        <main>{children}</main>
      </Container>
    </>
    // </BackgroundImage>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
