import { handleNewUser } from "./notifications";

export const getSocket = () => socket;

let socket = null;

export const updateSocket = (targetSocket) => {
  socket = targetSocket;
};

export const initSockets = (targetSocket) => {
  const { events } = window;
  updateSocket(targetSocket);
  socket.on(events.notifyNewUser, handleNewUser);
};
