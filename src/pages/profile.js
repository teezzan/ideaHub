import React/*,{ useEffect, useState }*/ from "react"
// import { gql, useMutation } from '@apollo/client';
import Layout from "../components/layout"
import BottomNav from "../components/bottomNav"
import LoginCard from "../components/LoginCard";
import _ from 'lodash';
import ProfileCardDemo from "../components/UserComponent";






const Profile = () => {

    return (
        <Layout>

            <ProfileCardDemo />
            <BottomNav selection={3} />
        </Layout>
    )
}
export default Profile