document.addEventListener("DOMContentLoaded", function () {
    const countdown = () => {
        const now = new Date();
        let year = now.getFullYear();

        // Set the target date to December 2 of the current or next year
        let countDate = new Date(`December 2, ${year} 00:00:00`);
        if (now.getTime() > countDate.getTime()) {
            year++;
            countDate = new Date(`December 2, ${year} 00:00:00`);
        }

        const gap = countDate.getTime() - now.getTime();

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        // Select elements safely
        const dayElem = document.querySelector('.day');
        const hourElem = document.querySelector('.hour');
        const minuteElem = document.querySelector('.minute');
        const secondElem = document.querySelector('.second');

        if (dayElem && hourElem && minuteElem && secondElem) {
            dayElem.innerText = textDay;
            hourElem.innerText = textHour;
            minuteElem.innerText = textMinute;
            secondElem.innerText = textSecond;
        } else {
            console.error("Countdown elements not found in the DOM!");
        }
    };

    setInterval(countdown, 1000);
    countdown(); // Call it immediately to prevent delay
});
