"use strict";
const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const allHands = document.querySelectorAll(".hand");

function setDate() {
  const now = new Date();

  //SECONDS
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  //MINUTES
  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  //HOURS
  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  //Take off the transition
  if (secondsDegrees === 90) {
    allHands.forEach((hand) => (hand.style.transition = "none"));
  } else {
    allHands.forEach((hand) => (hand.style.transition = ""));
  }
}

setInterval(setDate, 1000);
setDate();
