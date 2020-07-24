import React, { useState } from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import TextInfoContent from '@mui-treasury/components/content/textInfo';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Email from '@material-ui/icons/EmailRounded';


const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    root: {
        margin: 'auto',
        borderRadius: spacing(2), // 16px
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        position: 'relative',
        maxWidth: 700,
        marginLeft: 'auto',
        overflow: 'initial',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: spacing(2),
        [breakpoints.up('md')]: {
            flexDirection: 'row',
            paddingTop: spacing(2),
        },
    },
    media: {
        width: '88%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: spacing(-3),
        height: 0,
        paddingBottom: '48%',
        borderRadius: spacing(2),
        backgroundColor: '#fff',
        position: 'relative',
        [breakpoints.up('md')]: {
            width: '100%',
            marginLeft: spacing(-3),
            marginTop: 0,
            transform: 'translateX(-8px)',
        },
        '&:after': {
            content: '" "',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
            borderRadius: spacing(2), // 16
            opacity: 0.5,
        },
    },
    content: {
        padding: 24,
    },
    cta: {
        marginTop: 24,
        textTransform: 'initial',
    },
}));

export const LoginCard = React.memo(function BlogCard(props) {
    const styles = useStyles();
    const {
        button: buttonStyles,
        // ...contentStyles
    } = useBlogTextInfoContentStyles();
    const shadowStyles = useOverShadowStyles();
    const [RegLog, setRegLog] = useState(true);
    if (RegLog) {
        return (
            <Card className={cx(styles.root, shadowStyles.root)}>
                <CardMedia
                    className={styles.media}
                    image={
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
                    }
                />
                <CardContent>
                    <TextField
                        style={{ margin: '3px' }}
                        color="success"
                        id="username"
                        label="Username"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        // className={classes.margin}
                        style={{ margin: '3px' }}
                        color="success"
                        id="password"
                        label="Password"
                        type="password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock />

                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button className={buttonStyles} style={{ margin: '15px' }}>Login</Button>
                    <p>Don't have an account? Register <span onClick={() => { setRegLog(false) }} style={{ color: 'blue', cursor: 'select' }}>here</span>.</p>
                </CardContent>

            </Card>
        );
    }
    else {
        return (
            <Card className={cx(styles.root, shadowStyles.root)}>
                <CardMedia
                    className={styles.media}
                    image={
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
                    }
                />
                <CardContent>
                    <TextField

                        style={{ margin: '3px' }}
                        color="success"
                        id="email"
                        label="Email"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        style={{ margin: '3px' }}
                        color="success"
                        id="username"
                        label="Username"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        style={{ margin: '3px' }}
                        color="success"
                        id="password"
                        label="Password"
                        type="password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock />

                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        style={{ margin: '3px' }}
                        color="success"
                        id="password"
                        label="Confirm Password"
                        type="password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <br />
                    <Button className={buttonStyles} style={{ margin: '15px' }}>Register</Button>
                    <p>Already have an account? Login <span onClick={() => { setRegLog(true) }} style={{ color: 'blue', cursor: 'select' }}>here</span>.</p>

                </CardContent>


            </Card>
        );
    }


});

export default LoginCard