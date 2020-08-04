import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';
import { Button, IconButton } from '@material-ui/core';
import Message from '@material-ui/icons/Message';




const useStyles = makeStyles(({ palette }) => ({
    card: {
        borderRadius: 12,
        minWidth: 256,
        textAlign: 'center',
        marginTop: '1rem',
        marginBottom: '2rem',
        backgroundColor: "white"
    },
    avatar: {
        width: 60,
        height: 60,
        margin: 'auto',

    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: '0.5px',
        marginTop: 8,
        marginBottom: 0,
    },
    subheader: {
        fontSize: 14,
        color: palette.grey[700],
        marginBottom: '0.875em',
    },
    statLabel: {
        fontSize: 12,
        color: palette.grey[700],
        fontWeight: 500,
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        margin: 0,
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
        letterSpacing: '1px',
    },
}));

export const ProfileCard = React.memo(function ProfileCard(props) {
    const styles = useStyles();
    const shadowStyles = useFadedShadowStyles();
    const borderedGridStyles = useGutterBorderedGridStyles({
        borderColor: 'rgba(0, 0, 0, 0.08)',
        height: '50%',
    });
    console.log(props);
    return (
        <Card className={cx(styles.card, shadowStyles.root)}>
            <CardContent>
                <Avatar className={styles.avatar} src={props.user.url} style={{
                    color: 'white',
                    backgroundColor: "red",
                }} alt={props.user.username}
                />
                <h3 className={styles.heading}>{props.user.fullname}</h3>
                <span className={styles.subheader}>@{props.user.username}</span>
            </CardContent>
            <Divider light />
            <Box display={'flex'}>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                    <p className={styles.statLabel}>Ideas</p>
                    <p className={styles.statValue}>{props.user.ideas}</p>
                </Box>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                    <p className={styles.statLabel}>Likes</p>
                    <p className={styles.statValue}>{props.user.likes}</p>
                </Box>
            </Box>
            <Box display={'flex'} alignItems="flex-end" justifyContent="space-around">
                <Box p={2} flex={'auto'} >
                    {!props.user.me && (<IconButton color="primary" style={{ width: '50%' }} aria-label="add to shopping cart">
                        <Message />
                    </IconButton>
                    )}

                </Box>
                <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                    {props.user.me ? (<Button variant="contained" color="primary">
                        Edit
                    </Button>) : (<Button variant="contained" color="primary">
                        Follow
                    </Button>)}
                </Box>
            </Box>
        </Card>
    );
});

export default ProfileCard