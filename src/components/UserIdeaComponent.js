import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemComp from './ListItemComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '95%',
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
            <ListItemComp list={{ title: "A video maker", description: "teezzan", liked: true }} />
            <ListItemComp list={{ title: "A video maker", description: "Tewqw", liked: false }} />
            <ListItemComp list={{ title: "A video maker", description: "lemaooo", liked: false }} />
            <ListItemComp list={{ title: "A video maker", description: "unappologetical", liked: true }} />
            {/* <ListItemComp /> */}
        </List>
    );
}
