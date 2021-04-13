'use strict';

const taskTb = document.getElementById('task-table');
const taskTbBody = document.getElementById('task-table-body');
const createButton = document.getElementById('create-button');
const radioButtons = document.getElementsByName('radio-status');

const todos = [];

window.onload = () => {
    radioButtons.forEach((e) => {
        e.addEventListener('click', () => {
            displayTodos(todos);
            checkStatus();
        });
    });
}

createButton.addEventListener('click', () => {

    const todo = {
        task: '入力された情報',
        status: '作業中'
    };


    todo.task = document.getElementById('task-input-form').value;
    todos.push(todo);

    displayTodos(todos);

    document.getElementById('task-input-form').value = '';
});



const displayTodos = (todosArray) => {

    while (taskTbBody.children[1] !== undefined) {
        taskTbBody.removeChild(taskTbBody.children[1]);
    }

    todosArray.forEach((element, index) => {
        const tbRow = document.createElement('tr');
        tbRow.classList.add('tr');

        const idCell = document.createElement('td');
        const taskCell = document.createElement('td');
        const statusCell = document.createElement('td');
        const deleteCell = document.createElement('td');
        
        const idText = document.createTextNode(index);
        const taskText = document.createTextNode(element.task); 
        const statusButton = document.createElement('input');
        const deleteButton = document.createElement('input');

        statusButton.type = 'button';
        statusButton.value = element.status;
        deleteButton.type = 'button';
        deleteButton.value = '削除';

        statusButton.addEventListener('click', () => {
            if (statusButton.value === '作業中') {
                todos[index]['status'] = '完了';
            } else {
                todos[index]['status'] = '作業中';
            }
            checkStatus();
            
        });


        deleteButton.addEventListener('click', () => {
            todos.splice(index, 1);
            displayTodos(todos); 
        });

        tbRow.appendChild(idCell).appendChild(idText);
        tbRow.appendChild(taskCell).appendChild(taskText);
        tbRow.appendChild(statusCell).appendChild(statusButton);
        tbRow.appendChild(deleteCell).appendChild(deleteButton);

        taskTbBody.appendChild(tbRow);
    });    

}

const checkStatus = () => {
    const checkedRadio = document.querySelector('input:checked[name=radio-status]')
    if (checkedRadio === null) {
        displayTodos(todos);
        return
    } 
    
    const checkedRadioId = checkedRadio.id
    if ( checkedRadioId === 'all') {
        displayTodos(todos);
    } else if( checkedRadioId === 'doing') {
        hiddenElement(todos, '完了');
    } else if( checkedRadioId === 'done') {
        hiddenElement(todos, '作業中');
    }
}



const hiddenElement = (todosArray, nowstatus) => {
    for(let i = 0; i < todosArray.length; i++){
        if (todosArray[i]['status'] === nowstatus){
            taskTbBody.children[i+1].style.display = 'none';
        }
    }
}