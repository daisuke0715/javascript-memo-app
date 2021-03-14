'use strict';

const taskTb = document.getElementById('task-table');
const taskTbBody = document.getElementById('task-table-body');
const createButton = document.getElementById('create-button');


createButton.addEventListener('click', () => { 
    let elements = document.getElementsByTagName('tr');
    elements = [].slice.call(elements);
    console.log(elements);
    let index = elements.length - 1;
    createTask(index);

});



const createTask = (index) =>  {
    const tbRow = document.createElement('tr');

    const idCell = document.createElement('td');
    const idCellText = document.createTextNode(index);
    idCell.appendChild(idCellText);

    const taskTextCell = document.createElement('td');
    const taskText = document.createTextNode(escapeHtml(document.getElementById('task-input-form').value));
    taskTextCell.appendChild(taskText);

    const statusCell = document.createElement('td');
    const statusButton = document.createElement('input');
    statusButton.classList.add('status-button');
    statusButton.type = 'button';
    statusButton.value = '作業中';
    statusCell.appendChild(statusButton);


    const deleteCell = document.createElement('td')
    const deleteButton = document.createElement('input');
    deleteButton.classList.add('delete-button');
    deleteButton.type = 'button';
    deleteButton.value = '削除';
    deleteCell.appendChild(deleteButton);


    tbRow.appendChild(idCell);
    tbRow.appendChild(taskTextCell);
    tbRow.appendChild(statusCell);
    tbRow.appendChild(deleteCell);

    taskTbBody.appendChild(tbRow);
};



// XSS対策(エスケープ処理)
// => 不正な入力内容を読み込まないようにする処理 
const escapeHtml = (str) => {
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#39;');
    return str;
}