import React from "react"

import Layout from "../components/layout"
import LoginComponent from "../components/LoginComponent"
import BottomNav from "../components/bottomNav"

const signin = () => {

    return (
        <Layout>
            <LoginComponent />
            <BottomNav selection={null} />
        </Layout>
    )
}
export default signin