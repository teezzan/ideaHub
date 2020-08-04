import React/*,{ useEffect, useState }*/ from "react"
// import { gql, useMutation } from '@apollo/client';
import Layout from "../components/layout"
import BottomNav from "../components/bottomNav"
import LoginCard from "../components/LoginCard";
import _ from 'lodash';
import ProfileCard from "../components/ProfileCard"
import UserIdeaComponent from "../components/UserIdeaComponent";




//

const Profile = () => {

    return (
        <Layout>

            <ProfileCard user={{
                url: 'https://i.pravatar.cc/300',
                me: false,
                fullname: "Yusuf TAiwo",
                username: "HW_Kage",
                likes: 10,
                ideas: 6
            }}
            />
            <UserIdeaComponent />
            <BottomNav selection={3} />
        </Layout>
    )
}
export default Profile