const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");
btnEl.addEventListener("click", () => {
  createPassword();
});
copyIconEl.addEventListener("click", function (e) {
  if (inputEl.value) {
    copyPassword();
    alertContainerEl.classList.remove("active");
    setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 2000);
  }
});
copyIconEl.addEventListener("keydown", function (e) {
  if (e.key === "Enter" || e.key === " ") {
    copyPassword();
  }
});
function createPassword() {
  const chars = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    "!@#$%^&*()_+-=[]{}|;:,.<>?",
  ].join("");
  let maxLength = 16;
  let password = "";
  for (let i = 0; i < maxLength; i++) {
    password += chars[getRandomIndex(chars.length)];
  }
  inputEl.value = password;
  alertContainerEl.innerText = password + " Copied!";
}
function getRandomIndex(max) {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0] % max;
}
function copyPassword() {
  inputEl.select();
  navigator.clipboard.writeText(inputEl.value);
}
