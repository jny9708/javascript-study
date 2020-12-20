const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList =  document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];

function deleteToDo(event){
    const deleteEl = event.target.parentNode;
    toDoList.removeChild(deleteEl);
    const filterdToDos = toDos.filter(filterFn,deleteEl);
    toDos = filterdToDos;
    saveTodos();
}

function filterFn(todo,idx,obj,deleteEl){
    return parseInt(this.id) !== todo.id
}

function saveTodos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function printToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌"
    delBtn.addEventListener("click",deleteToDo);
    const span = document.createElement("span");
    const toDoId = toDos.length+1;
    span.innerText=text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = toDoId; 
    toDoList.appendChild(li);  
    const toDoObj = {
        text: text,
        id : toDoId
    };
    toDos.push(toDoObj);
    saveTodos()
}

function handleSubmit(evnet){
    evnet.preventDefault();
    const currentValue = toDoInput.value;
    printToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadToDos = localStorage.getItem(TODOS_LS);
    const parsedToDos = JSON.parse(loadToDos);
    if(loadToDos!==null){
        
        parsedToDos.forEach(function(toDo){
            printToDo(toDo.text);
        });
        
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();