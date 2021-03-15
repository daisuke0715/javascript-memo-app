'use strict';

const taskTb = document.getElementById('task-table');
const taskTbBody = document.getElementById('task-table-body');
const createButton = document.getElementById('create-button');


// 追加ボタンクリック時の挙動
createButton.addEventListener('click', () => { 
    let newTask = document.getElementsByTagName('tr');
    newTask = [].slice.call(newTask);
    let index = newTask.length - 1;
    createTask(index);
});


// メモ新規作成のメソッド
const createTask = (index) =>  {
    const tbRow = document.createElement('tr');
    const idCell = document.createElement('td');
    const idCellText = document.createTextNode(index);
    const taskTextCell = document.createElement('td');
    const taskText = document.createTextNode(escapeHtml(document.getElementById('task-input-form').value));
    const statusCell = document.createElement('td');
    const statusButton = document.createElement('input');
    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('input');

    tbRow.classList.add(`tr${index}`);

    statusButton.classList.add(`status-button${index}`);
    statusButton.type = 'button';
    statusButton.value = '作業中';
    
    deleteButton.classList.add(`delete-button${index}`);
    deleteButton.type = 'button';
    deleteButton.value = '削除';

    idCell.appendChild(idCellText);
    taskTextCell.appendChild(taskText);
    statusCell.appendChild(statusButton);
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
};


