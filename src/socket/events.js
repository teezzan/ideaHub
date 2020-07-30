import { socket } from './index';
export const socketEvents = ({ setValue }) => {
    socket.on('username', (username) => {
        console.log(username)
        setValue((state) => { return { ...state, checkUsername: username } });
    });
};