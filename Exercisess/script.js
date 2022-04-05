// 6-masala

// let a = Number(prompt("Birinchi son kiriting"));
// let b = Number(prompt("Ikkinchi sonni kiriting"));

// if (a > b) {
//   let c = `${a}>${b}`;
//   console.log(c);
// }
// if (b > a) {
//   let da = `${b}>${a}`;
//   console.log(da);
// }

// 7-masala

// let a = Number(prompt("Birinchi sonni kiriting"));
// let b = Number(prompt("Ikkinchi sonni kiriting"));

// if (a > b) {
//   let d = "1";
//   console.log(d);
// }
// if (b > a) {
//   let c = "1";
//   console.log(c);
// }

// 8-masala

// let a = Number(prompt("Birinchi sonni kirit"));
// let b = Number(prompt("Ikkinchi sonni kirit"));

// if (a > b) {
//   console.log(a);
//   console.log(b);
// } else if (b > a) {
//   console.log(b);
//   console.log(a);
// }

// 9-masala
// L0​=2;
// L1 = 1;
// L2 = L0 + L1 = 3;
// L3 = L1 + L2 = 4;
// L4 = L2 + L3 = 7;
// L5 = L3 + L4 = 11
// 5-chi baxtli raqam buyerda : 11 ga teng. Buni formula yordamida hisobladik.

// 12-masala

// let a = Number(prompt("Sonni kirit"));
// let b = Number(prompt("2-Sonni kirit"));
// let c = Number(prompt("3-Sonni kirit"));

// if (a < b && a < c) {
//   console.log("Eng kichik son " + a);
// } else if (b < a && b < c) {
//   console.log("Eng kichik son " + b);
// } else if (c < a && c < b) {
//   console.log("Eng kichik son " + c);
// } else {
//   console.log((a = b = c) + "Siz kiritganlar hammasi teng");
// }

// 13-masala

// let a = Number(prompt("Sonni kirit"));
// let b = Number(prompt("2-Sonni kirit"));
// let c = Number(prompt("3-Sonni kirit"));

// if ((a > b && a < c) || (a < b && a > c)) {
//   console.log(a);
// } else if ((b > a && b < c) || (b < a && b > c)) {
//   console.log(b);
// } else if ((c > b && c < a) || (c < b && c > a)) {
//   console.log(c);
// }

// 14-masala

// let a = Number(prompt("Sonni kirit"));
// let b = Number(prompt("2-Sonni kirit"));
// let c = Number(prompt("3-Sonni kirit"));

// if (a < b && a < c) {
//   console.log(a);
//   if (b > a && b > c) {
//     console.log(b);
//   } else {
//     console.log(c);
//   }
// }
// if (b < a && b < c) {
//   console.log(b);
//   if (a > b && a > c) {
//     console.log(a);
//   } else {
//     console.log(c);
//   }
// }
// if (c < a && c < b) {
//   console.log(c);
//   if (a > b && a > c) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// }

// 15-masala

// let a = Number(prompt("Sonni kirit"));
// let b = Number(prompt("2-Sonni kirit"));
// let c = Number(prompt("3-Sonni kirit"));

// if (a + b > b + c && a + c) {
//   console.log(a, b);
// } else if (a + c > b + c && a + b) {
//   console.log(a, c);
// } else if (b + c > a + c && a + b) {
//   console.log(b, c);
// } else if (a + b === b + c && a + c) {
//   console.log("siz kiritgan sonlarnig hammasi temg");
// }

// 16-masala

// let a = Number(prompt("Sonni kirit"));
// let b = Number(prompt("2-Sonni kirit"));
// let c = Number(prompt("3-Sonni kirit"));

// if (a < b < c) {
//   console.log(a * 2, b * 2, c * 2);
// } else if (a > b && a < c) {
//   console.log(a * -1, b * -1, c * -1);
// } else if (b > a && b < c) {
//   console.log(a * -1, b * -1, c * -1);
// } else if (c > a && c < b) {
//   console.log(a * -1, b * -1, c * -1);
// }

// 17-masala

// let a = Number(prompt("Sonni kirit"));
// let b = Number(prompt("2-Sonni kirit"));
// let c = Number(prompt("3-Sonni kirit"));

// if (a < b < c) {
//   console.log(a * 2, b * 2, c * 2);
// } else if (a > b > c) {
//   console.log(a * 2, b * 2, c * 2);
// } else {
//   console.log(a * -1, b * -1, c * -1);
// }

// 18-masala

// 666766666666666666666666666666666666666666666666666o`chriladigan narsalar ro`yhati

// let func = function () {
//   let sana = 0;
//   return function () {
//     sana++;
//     console.log(sana);
//   };
// };
// let x = func();
// x();
// x();

// let f = function () {
//   let data = [];
//   return function () {
//     data.push(3);
//     console.log(data);
//   };
// };
// let e = f();
// e();
// e();
// e();
// e();

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// let add5 = makeAdder(5);
// let add10 = makeAdder(10);

// console.log(add5(2));
// console.log(add10(2));

// let arr = ["U", "m", "i", "d"];
// console.log(arr);
// let x = arr.slice(0, 3);
// console.log(x);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let y = arr.reverse();
// console.log(y);

// let arrr = [7, 8, 9, 0];
// let arer = [2, 3, 4, 5, 6];
// let y = arr.concat(arrr, arer);
// console.log(y);

// let arr = [1, 2, 3, 4];
// let x = arr.at(-1);
// console.log(x);

// let arr = [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
// arr.forEach(function (val, key, arr) {
//   console.log(val);
// });

// let fazliddinClick = {
//   ism: "Fazliddin Umirzoqov",
//   balance: 1000,
//   transaction: [],
//   pin: 0901,
// };

// let shoxruxClick = {
//   ism: "Shoxrux Abduraxmonov",
//   balance: 1000,
//   transaction: [],
//   pin: 2222,
// };
// let otkazma = function (jonatuvchi, qabulQiluvchi, pul) {
//   pinCode = Number(prompt("Qancha pul jonatmoqchisiz"));
//   if (pinCode == jonatuvchi.pin) {
//   } else {
//     console.log("Parol hato");
//   }
// };

// let valyuta = new Map([
//   ["USD", "Amerika dollari"],
//   [("UZS", "O`zbekiston so`mi")],
//   ["RU", "Rossiya rubli"],
// ]);

// valyuta.forEach(function (val, key) {
//   console.log(`valyuta:${key}-${val}`);
// });

// let mySet = new Set([1, 2, 3, 4, 5]);
// mySet.forEach(function (val, key, arr) {
//   console.log(`valyuta:${arr}-${val}`);
// });

// let x = arr.map(function (val, key) {
//   return console.log(val * 100);
// });

// let dollar = [10, 10, 20, 30];
// let dollarToUZS = 10900;
// let uzs = dollar.filter(function (val) {
//   return val > 20;
// });
// console.log(dollar);
// console.log(uzs);

// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: "Jessica Davis",
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: "Steven Thomas Williams",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account = [account1, account2, account3];
// let a = account.find(function (val) {
//   return val.pin == 2222;
// });

// console.log(a);

// dsoihfvhhsvhsvoisdvdsvdsvndsivdovidvdnvndvdovdvdvovvrivhrerervejuherjvervujrbvrevrvrbvrrbujrbrubr
// let a = Number(prompt("raqamni kirit"));

// let x = String(a);
// console.log(x);
// let d = 0;
// for (let i = 0; i < x.length; i++) {
//   d = d + x[i];
//   if (d / x) {
//     console.log("Qoldiq qolmaydi");
//   }
// }
// iovjhsnwoefijrbgoijewfdguifievevoeivnevievehveiveveveoihvevheiveoeveheieoeevoeieeoiviwweviveweivwhveiveiveioeveiwovevw

// let myarray = ["Bob", "aully", "Amy", "d", "q", "iiujh"];
// myarray.sort(); // Массив становится ["Amy", "Bob", "Bully"]
// console.log(myarray.sort());

// let arr = ["z", "d", "y", "q"];

// for (let i = 0; i < arr.length; i++) {
//   for (let z = 0; z < arr.length - 1; z++) {
//     if (arr[0].charCodeAt(0) < arr[i++].charCodeAt[0]) {
//     }
//   }
// }
// console.log(arr);

// arr[z].charCodeAt[0 >= arr[z + 1].charCodeAt[0]];

// let memory = [1, 2, 3, 111, 2, 67, 432, 678, 765432, 2];
// console.log(memory.sort());

// console.log(String.fromCharCode(65, 66, 67));

// Sotrlar uchun akalarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr

// let magic = [1, 32, 31, 23, 56, 4, 3, 8];

// let jo = macig.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(jo);

// magic.sort((a, b) => a - b);
// console.log(magic);

// let a = [122, 145, 3, 75664, 3245366345];
// a.sort((a, b) => (a - b) * -1);
// console.log(a);

// Tanlash operatori switch   Tanlash operatori switch    Tanlash operatori switch    Tanlash operatori switch    Tanlash operatori switch   Tanlash operatori switch

// 1-masala
// let a = Number(prompt());
// switch (a) {
//   case 1:
//     console.log(`Dushanba`);
//     break;
//   case 2:
//     console.log(`Seshanba`);
//     break;
//   case 3:
//     console.log(`Chorshanba`);
//     break;
//   case 5:
//     console.log(`Payshanba`);
//     break;
//   case 4:
//     console.log(`Juma`);
//     break;

//   case 5:
//     console.log(`Shanba`);
//     break;
//   case 5:
//     console.log(`Yakshanba`);
//     break;
// }

// 2-masala

// let a = Number(prompt("Bahoyingni kirit"));

// switch (a) {
//   case 1:
//     console.log("Yomon");
//     break;
//   case 2:
//     console.log("Qoniqarsiz");
//     break;
//   case 3:
//     console.log("Qoniqarli");
//     break;
//   case 4:
//     console.log("Yaxshi");
//     break;
//   case 5:
//     console.log("A`lo");
//     break;
// }
// if (a > 5) {
//   console.log(`XATO . Mutant togri kirit`);
// }

// 3-masala

// let a = Number(prompt("Oyning raqamini kirit"));

// switch (a) {
//   case 1:
//     console.log("1-oy Yanvar");
//     break;
//   case 2:
//     console.log("2-oy Fevral");
//     break;
//   case 3:
//     console.log("3-oy Mart");
//     break;
//   case 4:
//     console.log("4-oy Aprel");
//     break;
//   case 5:
//     console.log("5-oy May");
//     break;
//   case 6:
//     console.log("6-oy Iyun");
//     break;
//   case 7:
//     console.log("7-oy Iyul");
//     break;
//   case 8:
//     console.log("8-oy Avgust");
//     break;
//   case 9:
//     console.log("9-oy Sentabr");
//     break;
//   case 10:
//     console.log("10-oy Oktabr");
//     break;
//   case 11:
//     console.log("11-oy Noyabr");
//     break;
//   case 12:
//     console.log("12-oy Dekabr");
//     break;
// }
// if (a > 12) {
//   console.log("Mutant 13-oy yoqku");
// }

// 4-masala

// let a = Number(prompt("Oyning raqamini kirit"));

// switch (a) {
//   case 1:
//     console.log("1-oy Yanvar va unda 30 kun bor");
//     break;
//   case 2:
//     console.log("2-oy Fevral  va unda 29 kun bor");
//     break;
//   case 3:
//     console.log("3-oy Mart  va unda 30 kun bor");
//     break;
//   case 4:
//     console.log("4-oy Aprel va unda 30 kun bor");
//     break;
//   case 5:
//     console.log("5-oy May va unda 30 kun bor");
//     break;
//   case 6:
//     console.log("6-oy Iyun va unda 30 kun bor");
//     break;
//   case 7:
//     console.log("7-oy Iyul va unda 30 kun bor");
//     break;
//   case 8:
//     console.log("8-oy Avgust va unda 30 kun bor");
//     break;
//   case 9:
//     console.log("9-oy Sentabr va unda 30 kun bor");
//     break;
//   case 10:
//     console.log("10-oy Oktabr va unda 30 kun bor");
//     break;
//   case 11:
//     console.log("11-oy Noyabr va unda 30 kun bor");
//     break;
//   case 12:
//     console.log("12-oy Dekabr va unda 30 kun bor");
//     break;
// }
// if (a > 12) {
//   console.log("Mutant 13-oy yoqku");
// }

// 5-masala

// let a = Number(prompt("Birinchi sonni kirit"));
// let b = Number(prompt("Ikkinchi sonni kirit"));
// let c = Number(
//   prompt(
//     "Nima qilmoqchisan : 1-qoshish , 2- ayirish , 3-bolish , 4-kopaytirish"
//   )
// );
// switch (c) {
//   case 1:
//     console.log(a + b);
//     break;
//   case 2:
//     console.log(a - b);
//     break;
//   case 3:
//     console.log(a / b);
//     break;
//   case 4:
//     console.log(a * b);
//     break;
// }

// 6-masala

// let a = Number(prompt("olchamni kirit kirit"));

// let b = Number(
//   prompt(
//     "Birlikni tanla: 1- desimetr ,2-kilometr ,3-metr ,4-millemetr,5-santimetr"
//   )
// );

// switch (b) {
//   case 1:
//     console.log((a * 10) / 100 + "Metr");
//     break;
//   case 2:
//     console.log(a * 1000 + "metr");
//     break;
//   case 3:
//     console.log(a + "metr");
//     break;
//   case 4:
//     console.log(a / 1000 + "Metr");
//     break;
//   case 5:
//     console.log(a / 100 + "Metr");
//     break;
// }

// 8-masala

// let a = Number(prompt("Sanani kirit"));
// let b = Number(prompt("Oyni kirit"));
// if (0 < a && a < 31) {
//   switch (b) {
//     case 1:
//       console.log(a + "-Yanvar");
//       break;
//     case 2:
//       console.log(a + "-Fevral");
//       break;
//     case 3:
//       console.log(a + "-Mart");
//       break;
//     case 4:
//       console.log(a + "-Aprel");
//       break;
//     case 5:
//       console.log(a + "-May");
//       break;
//     case 6:
//       console.log(a + "-Iyun");
//       break;
//     case 7:
//       console.log(a + "-Iyul");
//       break;
//     case 8:
//       console.log(a + "-Avgust");
//       break;
//     case 9:
//       console.log(a + "-Sentabr");
//       break;
//     case 10:
//       console.log(a + "-Oktabr");
//       break;
//     case 11:
//       console.log(a + "-Noyabr");
//       break;
//     case 12:
//       console.log(a + "-Dekabr");
//       break;
//   }
// } else {
//   console.log("mutant togri kirit");
// }

// 9-masala
// let a = Number(prompt("Sanani kirit"));
// let b = Number(prompt("Oyni kirit"));

// if (0 < a && a < 30) {
//   switch (b) {
//     case 1:
//       console.log(a + 1 + "-Yanvar");
//       break;
//     case 2:
//       console.log(a + 1 + "-Fevral");
//       break;
//     case 3:
//       console.log(a + 1 + "-Mart");
//       break;
//     case 4:
//       console.log(a + 1 + "-Aprel");
//       break;
//     case 5:
//       console.log(a + 1 + "-May");
//       break;
//     case 6:
//       console.log(a + 1 + "-Iyun");
//       break;
//     case 7:
//       console.log(a + 1 + "-Iyul");
//       break;
//     case 8:
//       console.log(a + 1 + "-Avgust");
//       break;
//     case 9:
//       console.log(a + 1 + "-Sentabr");
//       break;
//     case 10:
//       console.log(a + 1 + "-Oktabr");
//       break;
//     case 11:
//       console.log(a + 1 + "-Noyabr");
//       break;
//     case 12:
//       console.log(a + 1 + "-Dekabr");
//       break;
//   }
//   if ((a = 31)) {
//     console.log("oyning birinchi kuni ");
//   }
// } else {
//   console.log("mutant togri kirit");
// }

// 10-masala

// chiqmagan masalalar

// 12-masala

// let kirit = Number(
//   prompt("Sizda doiraning nimasi bor 1)radius ,2)diametr,3)uzunligi,4)yuzasi")
// );
// if (kirit > 4) {
//   console.log("Mutant kozing gazlamay qoldimi");
// }
// switch (kirit) {
//   case 1:
//     let radius = Number(prompt("Radiusni kiriting aka"));
//     console.log(
//       "Doiraning radiusi: " + radius + " ga teng",
//       `Doiraning diametri: D=` + 2 * radius,
//       "Doiraning uzunligi: L=" + 2 * 3.14 * radius,
//       "Doiraning yuzasi: S=" + 3.14 * Math.pow(radius, 2),
//       " ga teng"
//     );
//     break;
//   case 2:
//     let diametr = Number(prompt("Diametrni kiriting aka"));
//     console.log(
//       "Doiraning diametri: " + diametr,
//       `Doiraning radiusi: R=` + diametr / 2,
//       "Doiraning uzunligi: L=" + 2 * 3.14 * (diametr / 2),
//       "Doiraning yuzasi: S=" + 3.14 * Math.pow(diametr / 2, 2),
//       " ga teng"
//     );
//     break;

//   case 3:
//     let uzunlik = Number(prompt("Uzunlikni kiriting aka"));
//     console.log(
//       "Doiraning uzunligi: " + uzunlik,
//       `Doiraning radiusi: R=` + diametr / 2,
//       "Doiraning diametri: D=" + uzunlik / 3.14,
//       "Doiraning yuzasi: S=" + 3.14 * Math.pow((uzunlik / 2) * 3.14, 2),
//       " ga teng"
//     );
//     break;

//   case 4:
//     let yuza = Number(prompt("Yuzani kiriting aka"));
//     console.log(
//       "Doiraning yuzasi: " + yuza,
//       `Doiraning radiusi: R=` + Math.sqrt(yuza / 3.14),
//       "Doiraning diametri: D=" + 2 * Math.sqrt(yuza / 3.14),
//       "Doiraning uzunlik: L=" + 2 * 3.14 * Math.sqrt(yuza / 3.14),
//       " ga teng"
//     );
//     break;
// }

// 13-masala
// let kirit = Number(
//   prompt(
//     "Senda nima bor :1)katet , 2)gipatenuza , 3)gipatenuzaga tushurilgan balandlik ,4)Yuasi , borini kirit"
//   )
// );
// switch (kirit) {
//   case 1:
//     let katet = "katetni kiriting";
//     console.log(
//       "Uchburchakning kateti" + katet,
//       "Gipatenuzasi" + katet * 2 ** (1 / 2),
//       "Gipatenuzaga tushirilgan balandlik" + (katet * 2 ** (1 / 2)) / 2,
//       "Yuzasi"+ (katet * 2 ** (1 / 2))*((katet * 2 ** (1 / 2)) / 2))/2,
//     );
// }

//  for sikl operator   for sikl operator   for sikl operator    for sikl operator    for sikl operator   for sikl operator

// 1-masala

// let k = 10;
// let n = 5;
// for (let i = 0; i < n; i++) {
//   console.log(k);
// }

// 2-masala

// let a = 5;
// let b = 10;
// for (let i = a; i < b + 1; i++) {
//   console.log(i);
// }

// 3-masala

// let a = 5;
// let b = 10;
// let c = 0;
// for (let i = b; i > a - 1; i--) {
//   console.log(i);
//   c++;
// }
// console.log(c);

// 4-masala

// let narxi = Number(prompt("Kirit"));
// for (let i = 1; i < 11; i++) {
//   console.log(i * narxi);
// }

// 5-masala

// let narxi = Number(prompt("Kirit"));
// for (let i = 1; i <= 10; i++) {
//   console.log((i / 10) * narxi);
// }

// 6-masala

// let narxi = Number(prompt("Kirit"));
// for (let i = 12; i <= 20; i += 2) {
//   console.log((i / 10) * narxi);
// }

// 7-masala
