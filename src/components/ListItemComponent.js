import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { FaHeart } from "react-icons/fa";
import { ListItemSecondaryAction, IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    inline: {
        display: 'inline',
    },
}));


export default function ListItemComp() {
    const classes = useStyles();

    return (
        <React.Fragment>

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

                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="like">
                        <FaHeart />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" component="li" />
        </React.Fragment>
    );
}
