'use strict';

const taskTb = document.getElementById('task-table');
const taskTbBody = document.getElementById('task-table-body');
const createButton = document.getElementById('create-button');
const radioStatuses = document.getElementsByName('radio-status');

const todos = [];

window.onload = () => {
    radioStatuses.forEach((e) => {
        e.addEventListener('click', () => {
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

    checkStatus();

    document.getElementById('task-input-form').value = '';
});



const displayTodos = (todosArray) => {

    while (taskTbBody.children[1] !== undefined) {
        taskTbBody.removeChild(taskTbBody.children[1]);
    }

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

        statusButton.addEventListener('click', () => {
            statusChange(i);
        });


        deleteButton.addEventListener('click', () => {
            deleteTask(i);
        });

        tbRow.appendChild(idCell).appendChild(idText);
        tbRow.appendChild(taskCell).appendChild(taskText);
        tbRow.appendChild(statusCell).appendChild(statusButton);
        tbRow.appendChild(deleteCell).appendChild(deleteButton);

        taskTbBody.appendChild(tbRow);
    }
}

const statusChange = index => {
    if (todos[index].status === '作業中' ) {
        todos[index].status = '完了';
    } else {
        todos[index].status = '作業中';
    }
    checkStatus();
}


const deleteTask = index => {
    todos.splice(index, 1);
    checkStatus();
}


const checkStatus = () => {
    let nowStatus = '';

    // 現在のステータス情報を取得
    for (let i = 0; i < radioStatuses.length; i++){
        if (radioStatuses[i].checked) {
            nowStatus = radioStatuses[i].id;
            break;
        }
    }

    let newTodos = [];
    // ステータスによって表示させるタスク内容を変更する
    if (nowStatus === 'doing') {
        todos.filter((value) => {
            if (value.status === '作業中') {
                newTodos.push(value);
                displayTodos(newTodos);
            }
        });
    }else if (nowStatus === 'done') {
        todos.filter((value) => {
            if (value.status === '完了') {
               newTodos.push(value);
               displayTodos(newTodos);
            }
        });
    }else {
        displayTodos(todos);
    }

    
}