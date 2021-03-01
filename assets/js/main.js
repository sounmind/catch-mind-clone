const $body = document.querySelector("body");
const nickname = localStorage.getItem("nickname");
const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";
const NICKNAME = "nickname";
const $loginForm = document.querySelector("#jsLogin");

if (!nickname) {
  $body.className = LOGGED_OUT;
} else {
  $body.className = LOGGED_IN;
}

const handleFormSubmit = (event) => {
  event.preventDefault();
  const input = $loginForm.querySelector("input");
  const { value } = input;
  input.value = ""; // reset
  localStorage.setItem(NICKNAME, value);
};

if ($loginForm) {
  $loginForm.addEventListener("submit", handleFormSubmit);
}
