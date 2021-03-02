import events from "./events";

const socketController = (socket) => {
  socket.on(events.setNickname, ({ nickname }) => {
    socket.broadcast.emit(events.notifyNewUser, { nickname });
    socket.nickname = nickname;
  });
};

export default socketController;
