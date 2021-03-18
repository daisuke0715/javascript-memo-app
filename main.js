'use strict';

const taskTb = document.getElementById('task-table');
let taskTbBody = document.getElementById('task-table-body');
const createButton = document.getElementById('create-button');

// 入力された情報が格納されている配列
const todos = [];


// 追加ボタンクリック時の挙動
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
    
});


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



// todos配列の中身を表示させる関数
const displayTodos = (todosArray) => {
    console.log(todosArray);
    for (let i = 0; i < todosArray.length; i++) {
        // 列の生成
        const tbRow = document.createElement('tr');
        tbRow.classList.add('tr');

        // セルの生成
        const idCell = document.createElement('td');
        const taskCell = document.createElement('td');
        const statusCell = document.createElement('td');
        const deleteCell = document.createElement('td');
        

        // セル内の要素の生成
        const idText = document.createTextNode(i);
        const taskText = document.createTextNode(todosArray[i].task); 
        const statusButton = document.createElement('input');
        const deleteButton = document.createElement('input');

        // ボタンの情報
        statusButton.type = 'button';
        statusButton.value = todosArray[i].status;
        deleteButton.type = 'button';
        deleteButton.value = '削除';

        // セルを生成した列に挿入
        tbRow.appendChild(idCell).appendChild(idText);
        tbRow.appendChild(taskCell).appendChild(taskText);
        tbRow.appendChild(statusCell).appendChild(statusButton);
        tbRow.appendChild(deleteCell).appendChild(deleteButton);

        // 完成した列を画面に追加
        // taskTbBody.innerHTML(tbRow);

        taskTbBody.appendChild(tbRow);
    }
}





// オブジェクト指向プログラミングのメリット
// 今回のエラーに気づいた方法
// 上記2点について自分なりの仮説を共有した状態で、質問する