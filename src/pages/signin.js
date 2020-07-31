import React, { useEffect, useState } from "react"
import { gql, useMutation } from '@apollo/client';
import Layout from "../components/layout"
import BottomNav from "../components/bottomNav"
// import { Button } from "@material-ui/core";
import LoginCard from "../components/LoginCard";
import _ from 'lodash';


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

const LOG = gql`
mutation Login($password: String!, $username: String!) {
  login(password: $password, username: $username){
    message
    status
    error
    token
  }
}
`;




const SignIn = () => {
  // const { data } = useQuery(APOLLO_QUERY);


  const [addReg, { data: regdata }] = useMutation(REG);
  const [addLog, { data: logdata }] = useMutation(LOG);
  const [logerror, setlogerror] = useState(false);
  const [regerror, setregerror] = useState(false);

  useEffect(() => {
    if (!_.isEmpty(logdata)) {
      console.log(logdata)
      if (logdata.login.status === '200') {

        console.log(logdata.login.token);
      } else {
        console.log("Wrong Login Details");
        setlogerror(true);
      }

    }
  }, [logdata])

  const handleReg = () => {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log("oyaaaa ooooo");
    addReg({ variables: { password, username, email } });

  }
  const handelLog = () => {
    console.log("oyaaaa Log in oooo ooooo");
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    addLog({ variables: { password, username } });

  }
  return (
    <Layout>
      {regdata && (
        <p> {JSON.stringify(regdata)}</p>
      )}

      <div style={{ marginTop: '57px', }}>
        <LoginCard reg={addReg} onReg={handleReg} onLog={handelLog} logalert={logerror} regalert={regerror} />
      </div>
      <BottomNav selection={3} />
    </Layout>
  )
}
export default SignIn