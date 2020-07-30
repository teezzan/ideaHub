import React, { useState, useEffect } from "react";
import SocketContext from "./context";
import { socketEvents } from "../../socket/events";
const initSockets = ({ setValue }) => {
    socketEvents({ setValue });
};



const SocketProvider = (props) => {
    const [value, setValue] = useState({
        isLoggedin: false
    });
    useEffect(() => initSockets({ setValue }), []);
    // Note, we are passing setValue ^ to initSockets
    return (
        <SocketContext.Provider value={value}>
            {props.children}
        </SocketContext.Provider>
    )
};
export default SocketProvider;