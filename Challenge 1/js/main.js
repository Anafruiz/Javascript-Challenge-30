"use strict";

function key(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop the function from running all together
  audio.currentTime = 0; //rewind to start
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip it if it's not a transform
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", key);

const mouse = document.querySelectorAll(".key");

function clickTrigger() {
  let key = this.dataset.key;
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  this.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function unclickTrigger() {
  this.classList.remove("playing");
}
mouse.forEach((item) => item.addEventListener("mousedown", clickTrigger));
mouse.forEach((item) => item.addEventListener("mouseup", unclickTrigger));
