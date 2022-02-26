// alert("salom");
// alert("Yohudbek qalesiz buvottimi to`y qachon");

// console.log("Qanday o`zi");

// let ism = "Fazliddin";
// console.log(ism);

// let familya = "Umirzoqov";
// console.log(familya);

// let yosh = "20";
// console.log(yosh);

// let talim = "TATU";
// console.log(talim);

// 1-masala

// let vazn = prompt("Og`irligingni kirit");
// let boy = prompt("Bo`yingni kirit");
// let A = vazn / boy ** 2;
// console.log(A);
// if (A < 18.5) {
//   console.log("Siz juda ozg`in ekansiz");
// }
// if (18.5 < A && A > 24.9) {
//   console.log("sizning vazningiz yaxshi");
// }
// if (25 < A && A > 30) {
//   console.log("siz qitta semiz ekansiz");
// }

// 2-misil

// let raqam = Number(prompt(`Raqamni kiriting`));
// let A = raqam / 2;
// console.log(A);
// if (A % 2 === 0) {
//   console.log("Siz juft son kiritdingiz");
// } else {
//   console.log("Siz toq son kiritgingiz");
// }

// 4- masala

// 1-mashq

// let summa = Number(prompt("Summani kiriting"));

// let A = (summa * 15) / 100;
// console.log("Foiz miqdor" + A);

// let opshiy = summa + A;
// console.log("Umumiy summa" + opshiy);

// 2-mashq

// let yosh = Number(prompt("Yoshingizni kiriting "));
// let A = yosh * 365;
// console.log(A + "Kun yashabsiz");
// let B = yosh * 365 * 24;
// console.log(B + "Soat yashabsiz");
// let C = yosh * 365 * 24 * 60;
// console.log(C + "Minut yashabsiz");
// let D = yosh * 365 * 24 * 60 * 60;
// console.log(D + "Sekund yashabsiz");

// 6-masala

// 1-mashq

// let son1 = Number(prompt("Birinchi raqamlarni kiriting"));
// let son2 = Number(prompt("Ikkinchi raqamlarni kiriting"));
// let son3 = Number(prompt("Uchinchi raqamlarni kiriting"));

// let myFunc = function (a, b, c) {
//   if (a > b && a > c) {
//     console.log("Eng katta son" + a);
//   } else if (b > a && b > c) {
//     console.log("Eng katta son" + b);
//   } else if (c > b && c > a) {
//     console.log("Eng katta son" + c);
//   } else {
//     console.log("Sizning sonlariz bir hil, qaytadan kiriting");
//   }
// };
// myFunc(son1, son2, son3);

// let son1 = Number(prompt("Sonni kirit"));
// let son2 = Number(prompt("Ikkinchi sonni kirit"));

// let myFunc = function (a, b) {
//   return a + b;
// };
// console.log(myFunc(son1, son2));
// let obj = {};
// let a = 4;
// console.log(a);
// const b = 9;
// b = 10;

// let a = 10;
// let b = a + 5 + a ** 3;
// console.log(b);

// let age = Number(prompt("Yoshingni kirit"));
// // alert(age > 30);
// let agee = Number(prompt("Raqamni kirit"));
// console.log(age < agee);

// let lastName = "Umirzoqov";
// let year = "29";
// let ism = "Fazliddin";
// console.log(`Mening ismim ${ism} familiyam ${lastName} yoshim ${year}`);

// let yosh = Number(prompt("Yoshingizni kiriting"));
// if (yosh > 18) {
//   console.log("sen katt ekansan");
// } else if (yosh < 18 && yosh > 7) {
//   console.log("sen maktabga bor");
// } else if (yosh < 7) {
//   console.log("sen hali bolasan");
// }

// let son = "129";
// let son2 = 129;
// console.log("109" - 7);

// for (let i = 1; i < 8; i++) {
//   console.log(`${i}-kun`);
//   for (let j = 1; j < 4; j++) {
//     console.log(`${j}-mashqni bajar`);
//   }
// }

// let hafta = new Array(
//   "Dushanba",
//   "Seshanba",
//   "Chorshanba",
//   "Payshanba",
//   "Juma",
//   "Shanba"
// );

// let para = 2;
// for (let i = 0; i < 6; i++) {
//   console.log(`Bugun ${hafta[i]}`);

//   let summa=0;
//   for(let j=0;j<6;j++){
//     console.log(`${}`)
//   }

// }

// let sonlar = Math.trunc(Math.random() * 10) + 1;
// while (sonlar > 5 && sonlar % 2 == 1) {
//   console.log(`${sonlar} siz yetib kelmadiz`);
//   let sonlar = Math.trunc(Math.random() * 9 + 1);
// }
// console.log(`${sonlar} tugabdi`);

// let yosh = Number(prompt("Yoshingizni kiriting"));
// if (yosh > 18) {
//   console.log("siz urushga borishingiz mumkin");
// } else if (yosh < 18) {
//   console.log("sen hali yoshsan urushga bormaysan");
// }

// let vazn = Number(prompt("Vazningizni kiriting"));
// let boy = Number(prompt("Bo`yingizni kiriting"));
// let A = vazn / boy ** 2;
// if (A < 18.5) {
//   console.log("siz juda ozg`insiz sal semiring");
// } else if (A > 18.5 && A < 24.9) {
//   console.log("Siz narmalniy odam ekansiz");
// } else if (A > 25 && A < 29.9) {
//   console.log("Siz ozgina semiz ekansiz ");
// } else {
//   console.log("Siz vapshe semiz ekansiz odam bo`lmaysan ");
// }
// console.log("Sizning normangiz " + A + "  ekan");

// let son = Number(prompt("Sonni kiriting"));
// let A = son % 2;
// if (A === 0) {
//   console.log("Siz kiritgan son juft son ekan");
// } else if (A === 1) {
//   console.log("Siz kiritgan son toq son ekan");
// }

// let login = prompt("Loginni kiriting");

// if (login == "user") {
//   let userParol = prompt("user parolini kiriting");
//   if (userParol == "user") {
//     console.log("User siz tizimga muvaffaqqiyatli kirdingiz");
//   } else {
//     console.log("Parol xato");
//   }
// } else if (login == "admin") {
//   let adminParol = prompt("admin parolini kiriting");
//   if (adminParol == "admin") {
//     console.log("Admin siz tizimga muvaffaqiyatli kirdingiz");
//   } else {
//     console.log("Siz tizimga kirmaysiz");
//   }
// }

// let summa = Number(prompt("Summani kiriting"));
// console.log("Yegan narx " + summa + "$");
// let foiz;
// if (summa > 50 && summa < 300) {
//   foiz = (summa * 15) / 100;
//   console.log("usluga haqqi " + foiz + "$");
// } else if (summa <= 50 || summa > 300.9) {
//   foiz = (summa * 20) / 100;
//   console.log("Usluga haqqi " + foiz + "$");
// }

// let umumiy = summa + foiz;
// console.log("Umumiy summa " + umumiy + "$");
