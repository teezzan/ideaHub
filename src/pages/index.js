import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BottomNav from "../components/bottomNav"
import { useQuery, gql } from '@apollo/client';

// This query is executed at run time by Apollo.
const APOLLO_QUERY = gql`
  {
    meme(where: { id: "cjke2xlf9nhd90953khilyzja" }) {
      photo {
        url(
          transformation: {
            image: { resize: { width: 600, height: 600, fit: crop } }
          }
        )
      }
    }
  }
`;


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
const IndexPage = ({
  data: {
    rickAndMorty: { character },
  },
}) => {
  const { loading, error, data } = useQuery(APOLLO_QUERY);
  return (
    <Layout>
      <SEO title="Home" />
      {/* <button onClick={getdata}> getdata</button> */}

      {loading && <p>Loading Sara...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data && data.meme && data.meme.photo && (
        <img
          src={data.meme.photo.url}
          alt="Sara Vieira"
          style={{ maxWidth: 300 }}
        />
      )}


      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      <BottomNav selection={0} />
    </Layout >
  );
}


export default IndexPage
