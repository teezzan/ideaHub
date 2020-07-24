import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import LoginCard from './LoginCard';

const LoginComponent = () => {

    const [RegLog, setRegLog] = useState(false);
    // const [token, setToken] = useState(localStorage.getItem('token') || '');
    if (RegLog) {
        return (
            <div>
                {/* <Button onClick={() => { setRegLog(false) }}>login</Button> */}
            </div>
        )
    }
    else {
        return (
            <div>
                <LoginCard />
            </div>
        )
    }



}
export default LoginComponent
// {/* <Button onClick={() => { setRegLog(true) }}>Register</Button> */}