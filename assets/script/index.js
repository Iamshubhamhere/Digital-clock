
'use strict';

const set = document.querySelector('.set');
const clear = document.querySelector('.clear');
const input = document.querySelector('.input');
function playAlarm() {
    const audio = new Audio('./assets/audio/Alarm.mp3');
    audio.play();
  }

 function clock() {
	const clock = document.querySelector('.clock')
	const now = new Date();

    let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
    const time = `${hours.toString().padStart(2, '0')}:
    ${minutes.toString().padStart(2, '0')}:
    ${seconds.toString().padStart(2, '0')}`;
	clock.textContent = time;
}

setInterval(clock, 1000);


