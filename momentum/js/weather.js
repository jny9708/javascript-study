const COORDS = 'coords';
const APIKEY = '31d85dfe12778a3f5ca9c3c6071d860e';

const weatherEl = document.querySelector(".js-weather");

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`
    ).then(function(res){
        return res.json();
    }).then(function(json){
        console.log(json);
        const temp = json.main.temp;
        const place = json.name;
        weatherEl.innerText = `${temp} @ ${place}`;
    })
}

function savePos(posObj){
    localStorage.setItem(COORDS,JSON.stringify(posObj));
}

function handlePosSucces(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const posObj = {
        latitude,
        longitude
    };
    console.log(posObj);
    savePos(posObj);
}

function handlePosError(){
    console.log('error');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handlePosSucces,handlePosError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();