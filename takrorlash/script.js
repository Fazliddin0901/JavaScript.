// let simpleArrSum = [1, 2, 3];

//  function{

// }

// function testFuncrion() {
//   const x = 5;
//   const y = 10;
//   console.log(x + y);
// }
// testFuncrion();

// function hello() {
//   console.log("Hello");
// }
// hello();

// let a = 15;
// let b = 40;
// function summa() {}

// function ichmaich(f) {
//   return function (a, b) {
//     return (a + b) * f;
//   };
// }
// let r = ichmaich(10);
// console.log(r(1, 2));

// function ichmaich(r) {
//   return function (a, b) {
//     return (a + b) * r;
//   };
// }
// let g = ichmaich(20);
// console.log(g(2, 3));

// function add(a, b) {
//   return a + b;
// }
// function calc(c, math) {
//   return c + math;
// }
// console.log(calc(8, add(7, 2)));
// console.log(calc(8, add(7, 2)));

// function kattaHarf(soz) {
//   console.log(soz.toUpporCase());
// }
// function kiichikHarf(soz){
//   console.log(soz.toLowerCase);
// }
// function birinchiHarf(soz){
//   let arr =soz.split("");
//   for(let i=0;i<arr.length;i++){

//   }
// }

// function qoshish(a, b) {
//   console.log(a + b);
// }
// function ayirish(a, b) {
//   console.log(a - b);
// }
// function kopaytirish(a, b) {
//   console.log(a * b);
// }
// function bolish(a, b) {
//   console.log(a / b);
// }

// let calc = function (x, y, myfunc) {
//   myfunc(x, y);
// };
// calc(4, 5, qoshish);

// calc(10, 2, ayirish);

// calc(10, 10, kopaytirish);

// calc(1000, 100, bolish);

// function firstObj(me1) {
//   return function (me2) {
//     return function (me3) {
//       return function (me4) {
//         console.log(me1 + me2 + me3 + me4);
//       };
//     };
//   };
// }

// let y = firstObj(5);
// let a = y(2);
// let b = a(3);
// b(30);

// let you = {
//   home: "Senior",
//   ism: "Umid",
//   order(model, age, location) {
//     console.log(model, age, location);
//   },
// };
// let me = {
//   home: "Senior",
//   ism: "Umid",
//   order(model, age, location) {
//     console.log(model, age, location);
//   },
// };
// let newOrder = you.order;
// let youOrder = newOrder.bind(you, "Redmi Note 8 pro");

// youOrder(20, "Tashkent");

// let magicPhone = {};

// magicPhone.phones = 2;
// magicPhone.buy = function () {
//   console.log(++this.phones);
// };
// console.log(magicPhone.phones);
// let myfunc = magicPhone.buy.bind(magicPhone);
// document.querySelector(".tugma").addEventListener("click", myfunc);
