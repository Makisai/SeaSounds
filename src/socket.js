import io from "socket.io-client";

export const socket = io("ws://192.168.2.124:4000", { 
    transports: ["websocket"],
    secure: false 
});