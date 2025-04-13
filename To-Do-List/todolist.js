const todoList = JSON.parse(localStorage.getItem('todoList')) || save();
const todoName = document.querySelector('.todo-input');
const todoDate = document.querySelector('.todo-date');
const todoAddBtn = document.querySelector('.todo-add-btn');
const todoMenu = document.querySelector('.todo-menu-box');
showList();


todoAddBtn.addEventListener('click', addToList);

function addToList(){
    const name = todoName.value;
    const date = todoDate.value;
    
    if(name === '' || date === ''){
        todoName.classList.add('error-input');
        todoDate.classList.add('error-input');
        // todoDate.style.color = 'red';
        return;
    }
    else{
        todoName.classList.remove('error-input');
        todoDate.classList.remove('error-input');
        todoList.push({name, date});
        todoName.value = '';
        todoDate.value = '';
        showList();
        save();
        return;
    }
}

function showList(){
    let todoHtml = '';
    for (let i = 0; i < todoList.length; i++){
        const todoObj = todoList[i];
        const {name, date} = todoObj;
        todoHtml += `<div>${name}</div> <div> ${date}</div> <button id="delete-btn" onclick="todoList.splice(${i}, 1); showList(); save();">Delete</button>`; 
    }
    todoMenu.innerHTML =todoHtml;
    return;
}
function save(){
    localStorage.setItem('todoList', JSON.stringify(todoList));
}


