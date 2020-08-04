import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItemComp from './ListItemComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '90%',
        margin: "auto",
        backgroundColor: theme.palette.background.paper,
        marginBottom: "3em",
        justifyContent: "center",

    },
    inline: {
        display: 'inline',
    },
}));


export default function UserIdeaComponent() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItemComp />
            <Divider variant="inset" component="li" />
            <ListItemComp />
        </List>
    );
}
