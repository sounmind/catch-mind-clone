const $notifications = document.querySelector("#jsNotification");

const alertNotification = (text, color) => {
  const $notification = document.createElement("div");
  $notification.textContent = text;
  $notification.style.backgroundColor = color;
  $notifications.appendChild($notification);
};

export const handleNewUser = ({ nickname }) => {
  alertNotification(`${nickname} just joined!`, "yellowgreen");
};

export const handleDisconnectedUser = ({ nickname }) => {
  alertNotification(`${nickname} just left`, "red");
};
