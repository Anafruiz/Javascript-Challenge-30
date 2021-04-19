"use strict";
//we listen for the key pressed and we push it in an empty array
const pressed = [];
const secretCode = "hola";

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  pressed.push(e.key);
  console.log(pressed);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    console.log("ding ding");
  }
});
