import React from "react"
import { gql, useMutation } from '@apollo/client';
import Layout from "../components/layout"
import BottomNav from "../components/bottomNav"
// import { Button } from "@material-ui/core";
import LoginCard from "../components/LoginCard";


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






const SignIn = () => {
  // const { data } = useQuery(APOLLO_QUERY);


  const [addReg, { data: regdata }] = useMutation(REG);

  const handleReg = () => {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log("oyaaaa ooooo");
    addReg({ variables: { password, username, email } });

  }
  const handelLog = () => {
    console.log("oyaaaa Log in oooo ooooo");
  }
  return (
    <Layout>

      {regdata && (
        <p> {JSON.stringify(regdata)}</p>
      )}

      <div style={{ marginTop: '57px', }}>
        <LoginCard reg={addReg} onReg={handleReg} onLog={handelLog} />
      </div>
      <BottomNav selection={3} />
    </Layout>
  )
}
export default SignIn