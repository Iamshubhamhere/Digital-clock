
'use strict';



function getClock() {
    const today = new Date();
    let minute = today.getMinutes().toString().padStart(2, '0');
    let sec = today.getSeconds().toString().padStart(2, '0');
    let hours = today.getHours().toString().padStart(2, '0');

    let session = document.getElementById('sessions')

    if ( hours >= 12) {
        session.innerHTML = 'PM'
    } else {
        session.innerHTML = 'AM'
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    document.getElementById('hrs').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minute;
    document.getElementById('seconds').innerHTML = sec;

}

setInterval(getClock, 10)