
'use strict';

const set = document.querySelector('.set');
const clear = document.querySelector('.clear');
const input = document.querySelector('.input');
const alarm = document.getElementById('#output');
let alarmTimeout;

function playAlarm() {
    const audio = new Audio('./assets/audio/Alarm.mp3');
    audio.play();
  }

 function clock() {
	const clock = document.querySelector('.clock')
	const now = new Date();

    let hours = now.getHours().toString().padStart(2, '0');
	let minutes = now.getMinutes().toString().padStart(2, '0');
	let seconds = now.getSeconds().toString().padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds}`;
	clock.textContent = time;
}

setInterval(clock, 1000);


set.addEventListener("click", function () {
   
    const validTime = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/;
    const currentTime = clock.innerText.slice(0, -3);

    if (input.value == currentTime) {
        alarm.innerText = "Alarm can't be set to current time";
        
    } else if (validTime.test(timeInp.value)) {
        alarm.innerText = input.value;
    } else {
        alarm.innerText = 'Please input a valid 24h time';
    };
    // const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;

    // if (!timeRegex.test(inputmain)) {
    //   alert("Please enter a valid time in HH:MM format.");
    //   return;
    // }
  
    // const alarmDate = new Date(time.toDateString() + " " + inputmain);
    
    // // Check if alarm time has already passed today
    // if (alarmDate.getTime() < time.getTime()) {
    //   alarmDate.setDate(alarmDate.getDate() + 1);
    // }
    
    // // Calculate time until alarm goes off
    // const timeUntilAlarm = alarmDate.getTime() - time.getTime();
    
    // // Set the alarm
    // alarmTimeout = setTimeout(function() {
    //   alert("Wake up!");
    // }, timeUntilAlarm);
    
    // // Display confirmation message
    // alert("Alarm set for " + inputmain + ".");
    
    // // Clear input field
    // inputmain.value = "";
});



  
  clear.addEventListener("click", function() {
    // Clear the timeout and display a message
    clearTimeout(alarmTimeout);
    input.value = " ";
    alert("Alarm cleared.");
    
  });
  



