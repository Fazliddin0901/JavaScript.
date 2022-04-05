// let arr = [1, 2, 3, 4];

// let x = arr.reduce(function (tupla, val, key) {
//   return tupla + val;
// }, 10);
// console.log(x);

// let arr = 4, 5, 6, 7, 8, 9, 10, 11, 1, 1, 1, 11, 1, 1];
// let a = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > a) {
//     a = arr[i];
//   }
// }
// console.log(a);

// let max = arr.reduce(function (katta, val) {
//   if (katta < val) {
//     return val;
//   } else {
//     return katta;
//   }
// }, arr[0]);
// console.log(max);

// let arr = [1, 2, 3, 4, 5, 6, 6];
// let filt = [7, 8, 9];
// let kopay = [11, 22, 33, 44];
// let obshi = arr
//   .filter((val) => val > 2)
//   .map((val) => val * 5)
//   .reduce((yig, val) => yig + val);
// console.log(obshi);

// let string = "fhkasfmagsadidadsacsadjsodaft";
// let y = string.split("");
// let sets = new Set(y);
// let magic = ["m", "a", "g", "i", "c", "s", "o", "f", "t"];
// let x = [""];
// console.log(sets);
// for (let i = 0; (i = sets.length); i++) {
//   for (let j = 0; (j = magic.length); j++) {
//     if (sets[j] == magic[i]) {
//       sets.push(x);
//       console.log("topdim");
//     } else {
//       console.log("topolmadim");
//     }
//   }
// }

// if (("m", "a", "g", "i", "c", "s", "o", "f", "t")) {
//   y.push(x);
//   console.log(x, "topdim");
// } else {
//   console.log("topolmadim");
// }

// let arr = new Array(20);

// let x = arr.fill(15, 4, 6);
// console.log(x);

// for (let i = 0; i < 21; i++) {
//   arr.push(i);
// }
// console.log(arr);

// arr.fill((val, key) => key + 1);
// console.log(arr);

// let y = Array.from({ length: 100 }, function (val, key) {
//   return key * 2 + 1;
// });
// console.log(y);

// let c = Number.parseInt("23424.4332 pz");
// console.log(c);

// let j = Number.parseFloat("433242.34244 px");
// console.log(j);

// let h = Number.parseFloat("343dfd.432");
// console.log(h);

// let k = Number.parseFloat("wweew22");
// console.log(k);

// let m = Number.isNaN(Number.parseFloat(54435));
// console.log(m);

// let v = Number.isFinite(999);
// console.log(v);

// let p = Number(50 / 0);
// console.log(p);

// let q = 81;
// console.log(q ** (1 / 2));

// let a = Math.max(4, 3, 2, 5, 67, 78, 5, 43, 2);
// console.log(a);

// let e = Math.min("3", 2, "1", 4, 5, 66, 7, 8, 5, 444, 3, 2, "1");
// console.log(e);
// let y = Math.trunc(Math.random() * 200 - 100);
// console.log(y);

// function randoo(j, x) {
//   let ayir = x - j;
//   let k = Math.trunc(Math.random() * (ayir + 1) - j);
//   console.log(k);
// }
// randoo(20, 60);

// let a = Math.round(2.9);
// console.log(a);

// let a = Number(prompt("kiriting raqamni"));

// let arr = [];
// let b = arr.push(a);
// console.log(b);
// switch (a) {
// }

// switch (a) {
//   case 1:
//     console.log("Bir");
//     break;
//   case 2:
//     console.log("ikki");
//     break;
//   case 3:
//     console.log("uch");
//     break;
//   case 4:
//     console.log("tort");
//     break;
//   case 5:
//     console.log("besh");
//     break;
//   case 6:
//     console.log("olti");
//     break;
//   case 7:
//     console.log("yetti");
//     break;
//   case 8:
//     console.log("sakkiz");
//     break;
//   case 9:
//     console.log("toqqiz");
//     break;
// }

// let bigNum = Number.MAX_SAFE_INTEGER;
// console.log(bigNum);
// let min = Number.MIN_SAFE_INTEGER;
// console.log(min);
// let t = Number.NEGATIVE_INFINITY;
// console.log(t);

// let x = 2n;
// let j = 10;
// console.log(x + BigInt(j));

// let data = new Date("September ,1,2002");
// console.log(data);

// let bugun = new Date();
// // let hozir = bugun.getMonth();
// // console.log(hozir);

// // let davlat = bugun.toISOString();
// // console.log(davlat);
// let segodnya = bugun.getTime;
// console.log(bugun);

// let besh = new Date("March, 15, 2027");
// console.log(besh);

// let asr = new Date("February,28,1970");
// console.log(asr);
// function shifirla(str) {
//   let shifr = [];
//   let d = "";
//   for (let i = 0; i < str.length; i++) {
//     shifr.push(str.charCodeAt(i));
//     d = d + shifr[i].toString(2);
//   }
//   console.log(d);
// }
// shifirla("salom736eyhdehd");
// let n = 5;
// let m = n.toString(2);
// console.log(typeof m);

// let birinchiSana = prompt("Birinchi sanani kirit");
// let ikkinchiSana = prompt("Ikkinchi sanani kirit");

// let spOne = birinchiSana.split("/");
// let spTwo = ikkinchiSana.split("/");

// let result = console.log(result);

// let hozirInternational = new Date();
// let options = {
//   day: "numeric",
//   month: "numeric",
//   weekday: "long",
// };

// let davlat = navigator.language;
// console.log(davlat);

// let uzb = new Intl.DateTimeFormat(davlat, options).format(hozirInternational);
// console.log(uzb);

// let a = 32323233332333.322;
// let sozlama = {
//   style: "decimal",
//   unit: "celsius",
//   currency: "GBP",
// };
// let convert = new Intl.NumberFormat("de-DE", sozlama).format(a);
// console.log(convert);

// let convert1 = new Intl.NumberFormat("ar-SY", sozlama).format(a);
// console.log(convert1);
// let a = prompt("dd");
// let b = prompt("ds");

// let t = Number(prompt());

// let j = setTimeout(
//   function (a) {
//     console.log(a);
//   },
//   5000,
//   t
// );
// if (t > 18) {
//   clearTimeout(j);
// }
// console.log("bro");

let a = 0;
let b = 10;
setInterval(() => {
  a++;
  console.log(`${b},${a}`);
  if (a == 60) {
    a = 0;
    b--;
  }
}, 200x 00);
