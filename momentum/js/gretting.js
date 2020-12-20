const formEl = document.querySelector(".js-form"),
    inputEl = formEl.querySelector("input"),
    greetingMsgEl = document.querySelector(".js-greetings");

const USER_LS = 'currentUser';


function handleSubmit(event){
    event.preventDefault();
    localStorage.setItem(USER_LS,inputEl.value);
    loadName();
}

function askForName(){
    formEl.classList.remove("hide");
    formEl.classList.add("show");
    formEl.addEventListener("submit",handleSubmit)
}

function printgreetingMsg(text){
    formEl.classList.remove("show");
    formEl.classList.add("hide");
    greetingMsgEl.classList.remove("hide");
    greetingMsgEl.classList.add("show");
    greetingMsgEl.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else{
        printgreetingMsg(currentUser);
        
    }
}



function init(){
    loadName();
}

init();