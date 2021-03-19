'use strict';

const taskTb = document.getElementById('task-table');
const taskTbBody = document.getElementById('task-table-body');
const createButton = document.getElementById('create-button');

const todos = [];

createButton.addEventListener('click', () => {

    const todo = {
        task: '入力された情報',
        status: '作業中'
    };

    while (taskTbBody.children[1] !== undefined) {
        taskTbBody.removeChild(taskTbBody.children[1]);
    }

    todo.task = document.getElementById('task-input-form').value;
    todos.push(todo);

    displayTodos(todos);

    document.getElementById('task-input-form').value = '';
    
});


const displayTodos = (todosArray) => {
    console.log(todosArray);
    for (let i = 0; i < todosArray.length; i++) {

        const tbRow = document.createElement('tr');
        tbRow.classList.add('tr');

        const idCell = document.createElement('td');
        const taskCell = document.createElement('td');
        const statusCell = document.createElement('td');
        const deleteCell = document.createElement('td');
        
        const idText = document.createTextNode(i);
        const taskText = document.createTextNode(todosArray[i].task); 
        const statusButton = document.createElement('input');
        const deleteButton = document.createElement('input');

        statusButton.type = 'button';
        statusButton.value = todosArray[i].status;
        deleteButton.type = 'button';
        deleteButton.value = '削除';

        tbRow.appendChild(idCell).appendChild(idText);
        tbRow.appendChild(taskCell).appendChild(taskText);
        tbRow.appendChild(statusCell).appendChild(statusButton);
        tbRow.appendChild(deleteCell).appendChild(deleteButton);

        taskTbBody.appendChild(tbRow);
    }
}
