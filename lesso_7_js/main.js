'use strict';
// // console.log('Hello World! from main.js');
// // 足し算 「+」
// console.log(10 + 3);

// // 引き算 「-」
// console.log(10 - 3);

// // 掛け算 「*」
// console.log(10 * 3);

// // 割り算 「/」
// console.log(10 / 3);

// // 余り 「%」
// console.log(10 % 3);

// let x;
// console.log(x);
// x = 1;
// console.log(x);
// x = 2;
// console.log(x);
// // 再宣言はエラーになります。
// // let x;

// let y = 10;
// console.log(y);
// y = 11;
// console.log(y);

// // let str = 'Hello JavaScript';
// let str = "Hello JavaScript";
// console.log(str);

// // let i;
// // let j;
// // let k;
// let i,j,k;

// const a = 1;
// console.log(a);
// // a = 2;

// const prefecture = 'tokyo';
// console.log(prefecture);
// let color;
// let colorName;
// let myColorName;
// let favoriteFood = 20;

// let _color;
// let $name;

// let name1;
// let _name1;

// let foo = 'small';
// let Foo = 'big';
// console.log(foo);
// console.log(Foo);

// // console.log('Hello I'm Yuta Nakamura');
// console.log('Hello I\'m Yuta Nakamura');

// console.log('\¥ \t AAA \n BBB');

// console.log("Hello I\'m Yuta Nakamura");
// console.log('"Nakamura"-san.');

// console.log('Hello');
// console.log("Hello");

// let num = 10;

// // インクリメント
// num++;
// console.log(num);

// // デクリメント
// num--;
// console.log(num);

// //前置演算子のインクリメント
// ++num;
// console.log(num);

// //後置演算子のインクリメント
// --num;
// console.log(num);

// let num1 = 10;
// let num2 = 10;
// let ans1 = ++num1;
// let ans2 = num2++;
// console.log(ans1);
// console.log(ans2);

// const x =100;
// const x =99;
// if(x >= 100) {
//   console.log('100以上の値です。');
// }else {
//   console.log('100未満の値です。');
// }

// const x = 90;
// if(x >= 90) {
//   console.log('A');
// } else if(x >= 80) {
//   console.log('B');
// } else if(x >= 60) {
//   console.log('C');
// } else {
//   console.log('D');
// }

// let num = 100;
// let str = '100';

// if(num == str) {
//   console.log('同じ')
// } else {
//   console.log('同じではない')
// }

// if(num === str) {
//   console.log('同じ')
// } else {
//   console.log('同じではない')
// }

// const n = 1;
// switch(n) {
//   case 1:
//     console.log('one');
//     break;
//    case 2:
//     console.log('two');
//     break;
//   case 3:
//     console.log('three');
//     break;
//   default:
//     console.log('other');
//     break;
// }

// 演習
// 年齢によって、テーマパークの入場料を出し分けてコンソールに出力するプログラム。
// 仕様は下記とする
// 大人 （12歳以上の者）5,000yen
// 中人（6歳以上12歳未満の者)2,500yen
// 小人 （6歳未満の者） 1,000yen

// テスト
// 年齢ageの値を変えてテストしましょう。
// テストする時は、主に、境界値（条件分岐する値の前後の値）をつかってテストします
// 12
// 11
// 6
// 5

// const age = 5;
// if(age >= 12) {
//   console.log('5.000yen');
// } else if(age >= 6) {
//   console.log('2.500yen');
// } else {
//   console.log('1.000yen');
// }

// for(let i = 1; i <= 3; i++){
//   console.log(i);
// }

// let i = 1;
// while(i <= 3) {
//   console.log(i)+
//   i++;
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while(i <= 3);

// 演習
// let sum = 0;
// for(let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// const colors = ['Red', 'Green', 'Blue'];
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);

// const colors = ['Red', 'Green', 'Blue'];
// // console.log(colors.length);
// for(let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// const user = {name: 'Olivia', gender: 'woman', birth: '1990/1/1'};
// console.log(user.name);
// console.log(user.gender);
// console.log(user.birth);

// 演習
// const scores = [100, 90, 80, 70, 60];
// let sum = 0;
// for(let i = 0; i < scores.length; i++) {
//   sum += scores[i];
// }
// const average = sum / scores.length;
// console.log(sum);
// console.log(average);

// function getRectangle(height,width) {
//   return height * width;
// }
// console.log(getRectangle(3,5));

// const getRectangle = function(height, width) {
//   return height * width;
// }
// console.log(getRectangle(3, 5));

// const getRectangle 
//   = new Function('height', 'width', 'return height * width');
// console.log(getRectangle(3, 5));

// const getRectangle = (height, width) => {
//   return height * width;
// }
// console.log(getRectangle(3, 5));

// 演習：りんごの値段を計算するプログラムの関数化
// Aさんが1個100円(税込)のりんごを、13個買いました。
// りんごの単価と値段を関数の引数に渡すと、合計金額を計算して返す関数を作成
// 作成した関数を呼び出して、
// 佐藤さんの支払金額はいくらになるか計算して、コンソールに出力する。

// function price(unitPrice,n) {
//   return unitPrice * n;
// }
// console.log(price(100,13));