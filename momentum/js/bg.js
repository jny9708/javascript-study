// ctrl + k , m => select language mode
// ctrl + j => terminal

const bodyEl = document.querySelector("body");
const IMG_NUM = 4 ;

// function imgLoadCheck(img){

// }

function printImage(){
    const number = genRandom();
    const img = new Image();
    img.src = `../images/${number+1}.jpg`;
    img.classList.add("bg");
    bodyEl.prepend(img);
    //img.onload = imgLoadCheck(img);
    //img.addEventListener("loaded",imgLoadCheck.bind(null,null,img));
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUM);
    return number;
}

function init(){
    printImage();
}

init();