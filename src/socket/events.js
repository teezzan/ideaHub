import { socket } from './index';
export const socketEvents = ({ setValue }) => {
    socket.on('username', (username) => {
        console.log(username)
        setValue(() => { return username });
    });
};