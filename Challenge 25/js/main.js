"use strict";

const divs = document.querySelectorAll("div");
const button = document.querySelector("button");
function logText(e) {
  e.stopPropagation(); //stop bubbling!
  // console.log(this);
}
divs.forEach((div) =>
  div.addEventListener("click", logText, {
    capture: true,
  })
);
button.addEventListener(
  "click",
  () => {
    console.log("click");
  },
  { once: true }
);
