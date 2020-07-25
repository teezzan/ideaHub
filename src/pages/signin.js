import React from "react"

import Layout from "../components/layout"
import LoginComponent from "../components/LoginComponent"
import BottomNav from "../components/bottomNav"

const signin = () => {

    return (
        <Layout>
            <LoginComponent />
            <BottomNav selection={3} />
        </Layout>
    )
}
export default signin