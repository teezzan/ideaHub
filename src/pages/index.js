import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

// function getdata() {
//   console.log("here");

//   const url = 'https://randomuser.me/api';
//   // The data we are going to send in our request

//   fetch(url)
//     .then(function (response) {
//       // Handle response we get from the API
//       console.log(response);

//     })
// }
const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
    {/* <button onClick={getdata}> getdata</button> */}
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
