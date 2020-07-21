
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { MdMessage, MdPerson, MdTrendingUp,/* MdAdd,*/ MdHome } from "react-icons/md";
import { Link } from "gatsby"

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: 'fixed',
        bottom: 0,
        left: '50%',
        maxWidth: '500px',
        transform: 'translate(-50%, 0)',
        // left: 'auto'

    },
    centerButton: {
        backgroundColor: "lightblue"
    }
});



const BottomNav = ({ selection }) => {
    const classes = useStyles();
    const [navvalue, setNavvalue] = React.useState(selection);
    return (
        <div className={classes.root}>
            <BottomNavigation
                value={navvalue}
                onChange={(event, newValue) => {
                    console.log("navvalue =>", navvalue)
                    console.log("newValue =>", newValue)
                    setNavvalue(newValue);
                }}
                showLabels

            >
                <BottomNavigationAction label="Home" icon={<MdHome />} component={Link} to={'/'} />
                <BottomNavigationAction label="Trending" icon={<MdTrendingUp />} component={Link} to={'/page-2'} onClick={() => { console.log("Messages") }} />
                <BottomNavigationAction label="Messages" icon={<MdMessage />} onClick={() => { console.log("Messages") }} />
                <BottomNavigationAction label="Profile" icon={<MdPerson />} />
            </BottomNavigation>
        </div>

    )
}

export default BottomNav