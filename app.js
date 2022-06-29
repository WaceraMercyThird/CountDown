const countdown  = () => {
    const countDate = new Date("October 1, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;


    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap /day);
    console.log(textDay)
    const textHour = Math.floor((gap % day)/hour);
    const textMinute = Math.floor((gap % hour)/minute);
    const textsecond = Math.floor((gap % minute)/ second);

    // console.log(textHour);
    document.querySelector('.day').innerText = textDay;

    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textsecond;  
};

setInterval(countdown, 1000);

