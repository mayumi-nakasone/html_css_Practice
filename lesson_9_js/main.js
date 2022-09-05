'use strict';
{
  // プロパティを使って関連付ける方法
  const e = document.getElementById(('button'));
  e.onclick = () => {
    console.log('Clicked!');
  }
}
{
  // loadメソッド
  window.onload = () => {
    console.log('load event!')
  }
}

{
  // AddEventListenerメソッド
  const e = document.getElementById(('button'));
  e.addEventListener('click', () => {
    console.log('Clicked!');
  }, false);
}