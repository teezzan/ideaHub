import React, { useState, useContext, useEffect } from 'react';
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
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import SocketContext from '../components/socket_context/context';
import { checkUsername } from '../socket/emit'
import _ from 'lodash';
import Alert from '@material-ui/lab/Alert';






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
    const glob = useContext(SocketContext);

    const styles = useStyles();
    const {
        button: buttonStyles,
        // ...contentStyles
    } = useBlogTextInfoContentStyles();
    const shadowStyles = useOverShadowStyles();
    const [RegLog, setRegLog] = useState(true);
    const [showPassword, setshowPassword] = useState(true);
    const [checkUsernamedata, setcheckUsername] = useState({});
    useEffect(() => {
        // console.log(glob);
        var checkUsername = glob.checkUsername
        console.log(checkUsername)
        if (!_.isEmpty(checkUsername)) {
            setcheckUsername(checkUsername);
        } else {
            setcheckUsername({ username: "", available: true });
        }
    }, [glob])
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
                    {props.logalert && (<Alert severity="error">Error Loging in. Check Details</Alert>)}

                    <TextField
                        style={{ margin: '3px' }}
                        //color="success"
                        id="username"
                        className="input"
                        label="Username"
                        fullWidth
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
                        //color="success"
                        id="password"
                        className="input"
                        fullWidth
                        label="Password"
                        type={showPassword ? "password" : "text"}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="start">

                                    {showPassword ? (<FaRegEyeSlash onClick={() => setshowPassword(!showPassword)} />) : (<FaRegEye onClick={() => setshowPassword(!showPassword)} />)}

                                </InputAdornment>
                            )
                        }}
                    />
                    <Button className={buttonStyles} style={{ margin: '15px' }} onClick={props.onLog}>Login</Button>
                    <p>Don't have an account? Register
                        <span onClick={() => {
                            document.getElementById('username').value = "";
                            document.getElementById('password').value = "";
                            setRegLog(false)
                        }} style={{ color: 'blue', cursor: 'select' }} onKeyDown={() => { setRegLog(false) }}> here</span>.</p>
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
                    {/* <button onClick={() => { console.log(glob) }}> getdata</button> */}
                    {props.regalert && (<Alert severity="error">Error Registering. Check Details.</Alert>)}
                    <TextField
                        style={{ margin: '3px' }}
                        error={!checkUsernamedata.available}
                        fullWidth
                        label="Error"
                        helperText={checkUsernamedata.available ? "" : `${checkUsernamedata.username} is Not available`}
                        id="username"
                        label="Username"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            )
                        }}
                        onChange={() => {
                            var username = document.getElementById('username').value;
                            checkUsername(username);
                            console.log("working!!! => ", username)
                        }}
                    />



                    <TextField
                        style={{ margin: '3px' }}
                        id="email"
                        fullWidth
                        label="Email"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email />
                                </InputAdornment>
                            ),
                        }}
                    /><br />

                    <TextField
                        style={{ margin: '3px' }}
                        // //color="success"
                        id="password"
                        className="input"
                        label="Password"
                        fullWidth
                        type={showPassword ? "password" : "text"}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="start">
                                    {showPassword ? (<FaRegEyeSlash onClick={() => setshowPassword(!showPassword)} />) : (<FaRegEye onClick={() => setshowPassword(!showPassword)} />)}
                                </InputAdornment>
                            )
                        }}
                    />

                    <br />
                    <Button
                        disabled={(!checkUsernamedata.available)}
                        className={buttonStyles} style={{ margin: '15px' }} onClick={props.onReg}>Register</Button>

                    <p>Already have an account? Login
                        <span onClick={() => {
                            document.getElementById('username').value = "";
                            document.getElementById('email').value = "";
                            document.getElementById('password').value = "";
                            setRegLog(true)
                        }} style={{ color: 'blue', cursor: 'select' }} onKeyDown={() => { setRegLog(true) }}> here</span>.</p>

                </CardContent>


            </Card>
        );
    }


});

export default LoginCard