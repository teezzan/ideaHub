import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

    inline: {
        display: 'inline',
    },
}));


export default function ListItemComp() {
    const classes = useStyles();

    return (

        <ListItem button alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary="Oui Oui"
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            Sandra Adams
              </Typography>
                        {' — I llbe in your neighborhood doing errands this   Do you have Paris recommendations? Have you ever…'}
                    </React.Fragment>
                }
            />
        </ListItem>
    );
}
