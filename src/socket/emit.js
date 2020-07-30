import { socket } from "./index";
export const addClientToQueue = () => {
    socket.emit('addClientIdToQueue');
};
export const getQueueLength = () => {
    console.log("just did")
    socket.emit('username', { "username": "teezzanHAssanYusuf" });
};
export const checkUsername = (username) => {
    console.log("just did username")
    socket.emit('username', { username });
};
export const removeUserFromQueue = () => {
    socket.emit('removeUserFromQueue');
};