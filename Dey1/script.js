// console.log("Hello Ibrohim");

// let birthYear = 2002;
// let now = 2022;

// let age = now - birthYear;
// console.log(age);

// alert("salom dunyo");

// alert("maning ismim Fazliddin");

// let ism = "Fazliddon";
// console.log(ism);

// let familiya = "Umirzoqov";
// console.log(familiya);

// let yosh = "19";
// consol.log(yosh);

// let name = prompt("Ismingizni kiriting");
// // let lastName = prompt("Familyangizni kiriting");
// let weight = prompt("Vazningizni kiriting");
// let height = prompt("bo`yingizni kiriting");
// let result = weight / height ** 2;
// alert(result + "      Malades vazniz yaxshi");

// let myName = "Fazliddin";
// let age = 19;
// let job = "Developer";
// let aboutMe = ` I am ${myName} , I am ${age}, My job is ${job}`;
// console.log(`My info :${aboutMe}`);

// let askAge = prompt("Yoshingizni kiriting");

// if (7 <= askAge) {
//   console.log(`Sening yoshing ${askAge} da . Sen maktabga borishing mumkin`);
// } else if (askAge >= 18) {
//   console.log(`Seni yoshing ${askAge} da. Sen maktabni bitirgansan`);
// } else {
//   console.log(`Seni yoshing ${askAge} da . Sen maktabga borishing mumkin emas`);
// }

// console.log("20" + "8" - 4);

// console.log("28" * "4" + "8");

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean("Fazliddin"));

// let yosh = prompt("yoshingizni kiriting");

// if (Number(yosh) === 25) {
//   console.log("sizning yoshingiz qabul qilindi");
// } else {
//   console.log(`sizning yoshingiz ${yosh} da emas`);
// }

// let universitet = prompt("Siz universitetda o`qiganmisiz 1(ha) yoki 0(yo`q)");
// let age = prompt("Hozir necha yoshdasiz");

// if (age >= 20 && universitet === "1") {
//   console.log("Tabriklayman ishga qabul qilindingiz");
// } else if (age > 20) {
//   console.log(
//     "Sizning yoshingiz to`g`ri keladi ,ammo universitetni o`qimagan ekansiz"
//   );
// } else if (universitet === "1") {
//   console.log("Siz universitetni tugatgan ekansiz ammo yosh ekansiz");
// } else {
//   console.log("haydang aka eshshagingizni");
// }

// let askAge = Number(prompt("Erkakmisan omadingni sina:"));
// switch (askAge) {
//   case 1:
//     console.log("Ayol ekansan chiqib ket 1");
//     break;
//   case 2:
//     console.log("Ayol ekansan 2");
//     break;
//   case 3:
//     console.log("Ko`t ekansan 3");
//     break;
//   case 4:
//     console.log("Qaytadan urunchi 4");
//     break;
//   case 5:
//     console.log("Qachon erkak bo`lding sur bottan 5");
//     break;
//   case 6:
//     console.log("Ayol ekansan 6");
//     break;
//   case 7:
//     console.log("Qiz ekansan 7");
//     break;
//   case 8:
//     console.log("Hali erkak emassan bolasan 8");
//     break;
//   case 9:
//     console.log("Kete LGBT 9");
//     break;
//   case 10:
//     console.log("Malades erkak ekansan 10");
//     break;
//   default:
//     console.log("Mutantmisan");
// }

// switch (askAge) {
//   case 1:
//     console.log("Yoshi 1 teng ekan");
//     break;
//   case 2:
//     console.log("Yoshi 2 teng ekan");
//     break;
//   case 3:
//     console.log("Yoshi 3 teng ekan");
//     break;
//   case 4:
//     console.log("Yoshi 4 teng ekan");
//     break;
//   case 5:
//     console.log("Yoshi 5 teng ekan");
//     break;
//   case 6:
//     console.log("Yoshi 6 teng ekan");
//     break;
//   case 7:
//     console.log("Yoshi 7 teng ekan");
//     break;

//   default:
//     console.log("Mutantmisan");
// }

// let num = 0;
// do {
//   console.log(num);
//   num++;
// } while (num < 2);

// firstFor: for (let num = 0; num < 7; num++) {
//   for (let size = 0; size < 9; size++) {
//     if (size == 8) {
//       break firstFor;
//     }
//     console.log(size);
//   }

//   // if (num == 3) continue;
//   // console.log(num);
// }

// let num = 1;
// while (num < 6) {
//   console.log(num);
//   num++;
// }

// for (let num = 1; num < 6; num++) {
//   console.log(num);
// }

// let num = 0;
// while (num < 5) {
//   num++;
//   console.log(num);
// }

// let arr = [1, 2, 3, 4, 5, 6, 1, 8, 1, 0];
// let k = 1;
// let cont = 0;
// for (let f = 0; f < arr.length; f++) {
//   if (arr[f] === k) {
//     cont++;
//   }
// }
// console.log(cont);

// let str = `java script otamiz bollar`;
// let arr = str.split("");
// console.log(arr);
// let cont = 0;
// for (let f = 0; f < arr.length; i++) {
//   if (arr[f][0].toUpperCase === str) {
//     cont++;
//   }
// }

// let newStr = str[0].toUpperCase() + str.slice(1);
// function ucFirst(str) {
//   if (!str) return str;

//   return str[0].toUpperCase() + str.slice(1);
// }

// console.log(); // Вася

// let kutubhonaNomi = prompt("Kutubhona nomini kiriting");

// let kutubhonaIsmi = "MagicSoft";

// if (kutubhonaNomi == kutubhonaIsmi) {
//   alert("Karta raqamini kiriting");
//   let kartaRaqami = Number(prompt("Karta raqamini kiriting"));
//   let karta = "9860";
//   if (kartaRaqami == karta) {
//     alert("Tabriklaymiz siz to`g`ri kiritdingiz");
//   } else {
//     alert("Siz hato kiritdingiz uzur aka kirgiza olmayman");
//   }
// } else {
//   alert("Siz hato kiritdingiz uzur aka kirgiza olmayman");
// }

let myFunc = function (obj) {
  obj.name = "Jafar";
  obj.age = 1;
  console.log(obj);
};
myFunc("Umid");
console.log("Umid");
