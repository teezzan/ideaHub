import React from "react"
import { useQuery, gql, useMutation } from '@apollo/client';
import Layout from "../components/layout"
import BottomNav from "../components/bottomNav"
import { Button } from "@material-ui/core";
import LoginCard from "../components/LoginCard";

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

const REG = gql`
mutation Register($password: String!, $username: String!, $email: String!) {
  register(password: $password, username: $username, email: $email){
#   register( password: "1234", username: "testing", email: "email"){
    message
    status
    error
    user{
      username
      email
    }
  }
}
`;




const handleReg = (addReg) => {
    console.log("oyaaaa ooooo");
    console.log(document.getElementById('password').value);
    // addReg({ variables: { password: "1234", username: "teszzgzzting", email: "emhhazzhail" } });
}

const SignIn = () => {
    // const { data } = useQuery(APOLLO_QUERY);
    const [addReg, { data: regdata }] = useMutation(REG);
    console.log(addReg);

    return (
        <Layout>

            {regdata && (
                <p> {JSON.stringify(regdata)}</p>
            )}

            <div style={{ marginTop: '57px', }}>
                <LoginCard reg={addReg} onReg={handleReg} />
            </div>
            <BottomNav selection={3} />
        </Layout>
    )
}
export default SignIn