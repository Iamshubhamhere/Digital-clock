"use strict";

const set = document.querySelector(".set");

let alarmTime = null;

const audio = new Audio("./assets/audio/ALarmsound.mp3");
audio.type = "audio/mp3";

function ringAlarm() {
  // code to ring the alarm
  document.getElementById("alarm-img").classList.add("animate");
  document.getElementById("alarm-heading").style.color = "#ff3c57";
}

function stopAlarm() {
  // code to stop the alarm
  document.getElementById("alarm-img").classList.remove("animate");
  document.getElementById("alarm-heading").style.color = "";
}

function clock() {
  const clock = document.querySelector(".clock");
  const now = new Date();

  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");
  const time = `${hours}:${minutes}:${seconds}`;
  clock.textContent = time;
  if (alarmTime === `${hours}:${minutes}`) {
    audio.play();
    ringAlarm();
  }
}

setInterval(clock, 1000);

document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault();
  const alarmTimeInput = document.querySelector(".input");
  const alarmTimeDisplay = document.querySelector("#output");
  const inputRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  if (inputRegex.test(alarmTimeInput.value)) {
    alarmTime = alarmTimeInput.value;
    alarmTimeDisplay.textContent = alarmTime;
    alarmTimeInput.value = "";
  } else {
    alert("Please enter a valid time in HH:MM format.");
    alarmTimeInput.value = "";
  }
});

document.querySelector(".form").addEventListener("reset", function (event) {
  alarmTime = null;
  document.querySelector("#output").textContent = "";
  audio.pause();
  stopAlarm();
  audio.currentTime = 0;
  document.getElementById("alarm-img").classList.remove("animate");
});

clear.addEventListener("click", function () {
  // Clear the timeout and display a message
  clearTimeout(alarmTimeout);
  input.value = " ";
  alert("Alarm cleared.");
});
