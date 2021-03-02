import events from "./events";

const socketController = (socket) => {
  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    console.log(socket.nickname);
  });
};

export default socketController;
