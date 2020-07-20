/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 * import { FaBeer } from 'react-icons/fa';

 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { MdMessage, MdPerson, MdTrendingUp, MdAdd, MdHome } from "react-icons/md";
import { IconContext } from "react-icons";



// import Header from "./header"
import "./layout.css"

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    // maxWidth: '200px'

  },
  centerButton: {
    backgroundColor: "lightblue"
  }
});



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log(data);
  const classes = useStyles();
  const [navvalue, setNavvalue] = React.useState('recents');
  return (

    <>
      <div>
        <main>{children}</main>

      </div>
      <BottomNavigation
        value={navvalue}
        onChange={(event, newValue) => {
          setNavvalue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Home" icon={<MdHome />} />
        <BottomNavigationAction label="Trending" icon={<MdTrendingUp />} onClick={() => { console.log("Fav") }} />
        {/* <BottomNavigationAction className={classes.centerButton} icon={<WhiteLargeIcon />} /> */}
        <BottomNavigationAction label="Messages" icon={<MdMessage />} />
        <BottomNavigationAction label="Profile" icon={<MdPerson />} />
      </BottomNavigation>
      <footer>
        nav here
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
