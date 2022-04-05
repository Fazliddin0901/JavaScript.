// let age = 16;
// if (age > 18) {
//   console.log("tizimga kirdingiz");
// } else if (age < 7) {
//   console.log("vapshe kichkina ekansiz");
// } else {
//   console.log("maktab bolasi ekansiz");
// }

// let askAge = Number(prompt("Maktabni bitirganmisan-yoshing netchida:"));

// if (age > 18 && age < 45) {
//   if (pasport) {
//     console.log("salom");
//   } else {
//     console.log("yo`q");
//   }
// } else {
//   console.log("bie nmim");
// }

// age > 18 && age < 45
//   ? pasport
//     ? console.log("salom")
//     : console.log("yo`q")
//   : console.log("bie nmim");

// age > 18 && age < 45
//   ? pasport
//     ? console.log("salom")
//     : console.log("yo`q")
//   : console.log("bie nmim");

// "use strick";
// birthYear = 2002;

// function hisobla(birthYear, nowYear) {
//   yosh = nowYear - birthYear;
//   return yosh;
// }

// console.log(hisobla(1996, 2022));

// let friends2 = new Array("Jasur", "Jasur", "Aziz");
// let friends = new Array("Shoxrux", "Ibrohim", "Jo`raqo`zi", friends2);
// friends[1] = "Ibrohimjon";
// console.log(friends[0], friends[2], friends[1]);
// console.log(friends.length);

// let raqamlar = new Array(12, 222, 354, 443, 54, 6, 7);
// raqamlar.push(6);
// console.log(raqamlar);
// raqamlar.unshift(354);
// console.log(raqamlar);
// raqamlar.splice(6, 1);
// console.log(raqamlar);

//  object

// let about = {
//   job: "Developer",
//   age: "24",
//   university: "TATU",
//   array: ["ikkita", [12, 21, 30]],
//   firstName: "Umid",
//   lastName: "Rustamov",
// };

// console.log(about.job[6]);
// console.log(about.array[1][1]);

// console.log(about["university"]);

// let keyName = "Name";
// console.log(about["first" + keyName]);

// const aboutMe = {
//   birth: 1336,
//   now: 2022,
//   calcAge: function () {
//    let age=Function={
//       return this.now - this.birth;
//     }
//   },
// };
// console.log(aboutMe.calcAge());

// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// let agee = [];
// let birth = [1996, 1997, 2000, 2002];
// let calcAge = function () {
//   for (let i = 0; i < birth.length; i++) {
//     let age = 2022 - birth[i];
//     agee.push(age);
//   }
// };
// calcAge();
// console.log(agee);

// let about = {
//   job: "Developer",
//   age: "24",
//   university: "TATU",
//   array: ["ikkita", [12, 21, 30]],
//   firstName: "Umid",
//   lastName: "Rustamov",
// };
// let mySTR = "Salom";
// console.log(mySTR.startsWith("S"));
// console.log(mySTR.endsWith("m"));
// console.log(mySTR.slice(-2, -1));
// console.log(mySTR.substring(4, 1));

// let me = "Aassalom TATU";
// let a = me.indexOf("sal");
// let b = me.indexOf("TU");
// console.log(me.substring(a, a + 3) + me.substring(b, b + 2));

// let c = me.indexOf("asal");
// let d = me.indexOf("TU");
// console.log(me.substring(c, c + 4) + me.substring(d, d + 2));

// let str = "Salom";
// console.log(str.substr(1, 2));

// let strs = "Toshkento";
// console.log(strs.replace("o", "a"));
// let f = strs.replace("o", "a");
// console.log(f.replace("o", "a"));
// console.log(strs.toUpperCase());
// console.log(strs.toLowerCase());

// let mySTR1 = "Sa";
// let mySTR2 = "lom";
// let full = "";
// full = full.concat(mySTR1 + mySTR2);
// console.log(full);

// let str = "                                      Uk a jo nim        ";
// console.log(str);
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());
// console.log(str.charAt(0));
// console.log(str.length);

// let str = "salomassalom";
// let myArr = str.split("");
// let arr = [];
// for (let i = 0; i < myArr.length; i++) {
//   arr.push(myArr[i]);
//   if (myArr[i] == "l") {
//     arr.push("l");
//   } else {
//     continue;
//   }
// }
// console.log(arr);

let str = "YakPak";
let arr = str.split("");
