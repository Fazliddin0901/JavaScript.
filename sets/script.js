// let offisIshchilari = [
//   "Frontend",
//   "Frontend",
//   "Frontend",
//   "Frontend",
//   "Frontend",
//   "Frontend",
//   "BackEnd",
//   "BackEnd",
//   "BackEnd",
//   "BackEnd",
//   "MobileApp",
//   "MobileApp",
//   "MobileApp",
//   "MobileApp",
//   "Developers",
//   "Developers",
//   "SMMchik",
//   "developer",
// ];
// let mySet = new Set(offisIshchilari);

// console.log(mySet.size);
// console.log(mySet.add("usta"));
// const arr = [...mySet];

// MAP

// const obj = {
//   name: "Umid",
//   age: "20",
//   job: "Developer",
// };

// const me = new Map();
// console.log(obj);
// console.log(me.set(true, "Umid"));
// console.log(me.get(true));
// console.log(me.set(4, "Assalomu alaykum"));
// console.log(me.set(false, "Qanday o`zi"));
// console.log(me.set("bulutirammi", "Buvottimi"));

// Mapni universal usuli

// const rest = new Map([
//   [1, 30],
//   [2, 40],
//   [6, 50],
//   ["Umid", 60],
// ]);
// console.log(rest.get(2));
// console.log(rest.get("Umid"));
// console.log(rest.set("terue", "Umid"));
// if (rest.has("Umid")) {
//   console.log(rest.get("Umid"));
// } else {
//   console.log("Bunday element yo`q");
// }
// rest.delete(6);
// console.log(rest);

// real project

const savol = new Map([
  ["Savol", "O'zbekiston poytaxti: "],
  [1, "Toshkent"],
  [2, "Samarqand"],
  [3, "Xorazm"],
  ["javob", 1],
  [true, "Tugri javob"],
  [false, "Xato qayta urining"],
]);
console.log(savol.get("Savol"));
for (let [key, val] of savol) {
  if (typeof key == "number") {
    console.log(`${key}-Javob: ${val}`);
  }
}
// const kirit = Number(prompt("Javob raqamini kiriting:"));

// kirit == savol.get("javob")
//   ? console.log(savol.get(true))
//   : console.log(savol.get(false));

const me = {
  name: "Umid",
  age: 20,
  job: "dEv",
  status: "student",
  true: "zursan",
  false: "eee",
};

const meMap = new Map(Object.entries(me));

const arrMap = meMap.keys();
console.log(arrMap);
