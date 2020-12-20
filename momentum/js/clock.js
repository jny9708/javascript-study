const clockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector("h1");

function getCurrentTime(){
    const date = new Date();
    const hour = concatZero(date.getHours());
    const minutes = concatZero(date.getMinutes());
    const seconds = concatZero(date.getSeconds());
    clockTitle.innerText = `${hour}:${minutes}:${seconds}`;
}

function concatZero(date){
    if(date<10){
        date = `0${date}`
    }
    return date
}

function init(){
    getCurrentTime();
    setInterval(getCurrentTime,1000);
}

init();