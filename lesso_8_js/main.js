'use strict';
// // IDをキーに要素を取得
// {
//   const e = document.getElementById('button');
//   e.addEventListener('click', () => {
//     // console.log('Clicked!');
//     const result = document.getElementById('result');
//     console.log(result.innerText);
//   }, false);
// }

// // タグ名をキーに要素を取得
// {
//   const e = document.getElementById('button');
//   e.addEventListener('click', () => {
//     const elements = document.getElementsByTagName('div');
//     for(let i = 0; i < elements.length; i++) {
//       console.log(elements[i].innerText);
//     }
//   }, false);
// }

// // name属性をキーに要素を取得
// {
//   const e = document.getElementById('button');
//   e.addEventListener('click', () => {
//     const elements = document.getElementsByName('result');
//     console.log(elements[0].value);
//   }, false);
// }

// // class属性をキーに要素を取得
// {
//   const e = document.getElementById('button');
//   e.addEventListener('click', () => {
//     const elements = document.getElementsByClassName('foo');
//     for(let i = 0; i < elements.length; i++) {
//       console.log(elements[i].innerText);
//     }
//   }, false);
// }

// // ノードの追加
// {
//   const e = document.getElementById('button');
//   e.addEventListener('click', () => {
//     const li = document.createElement('li');
//     const text = document.createTextNode('test');
//     li.appendChild(text);
//     list.appendChild(li);
//   }, false);
// }

// // ノードの置換
// {
//   const e = document.getElementById('button');
//   e.addEventListener('click', () => {
//     const newList = document.createElement('li');
//     newList.setAttribute('id', 'newList');
//     const newText = document.createTextNode('new element');
//     newList.appendChild(newText);
//     const oldList = document.getElementById('oldList');
//     const parentNode = oldList.parentNode;
//     parentNode.replaceChild(newList, oldList);
//   }, false);
// }

// // ノードの削除
// {
//   const e = document.getElementById('button');
//   e.addEventListener('click', () => {
//     const parentElement = document.getElementById('list');
//     const elements = parentElement.getElementsByTagName('li');
//     const removeIndex = elements.length - 1;
//     // console.log(elements.length);
//     parentElement.removeChild(elements[removeIndex]);
//   }, false);
// }

// // 演習
// {
//   const e = document.getElementById('button');
//   e.addEventListener('click', () => {
//     const textbox = document.getElementById('textbox');
//     const li = document.createElement('li');
//     const text = document.createTextNode(textbox.value);
//     li.appendChild(text);
//     list.appendChild(li);
//     // <li>test</li>
//   }, false);
// }