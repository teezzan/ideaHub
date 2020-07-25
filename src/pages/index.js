import React, { useContext } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BottomNav from "../components/bottomNav"
import { useQuery, gql } from '@apollo/client';
import SocketContext from '../components/socket_context/context';
import { getQueueLength } from '../socket/emit'

// This query is executed at run time by Apollo.
const APOLLO_QUERY = gql`
  {
    userbyusername(username:"1234"){
    status
    user{
      username  
      }
  }
  }
`;



const IndexPage = () => {
  const vall = useContext(SocketContext);
  const { data } = useQuery(APOLLO_QUERY);
  console.log(data);
  return (
    <Layout>
      <SEO title="Home" />
      <button onClick={getQueueLength}> getdata</button>


      {/* {error && <p>Error: ${error.message}</p>}
      {data && (
        <p> {JSON.stringify(data.userbyusername)}</p>
      )} */}


      <h1>{JSON.stringify(vall)}</h1>
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
