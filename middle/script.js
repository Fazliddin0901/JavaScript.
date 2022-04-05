// const myName = "Fazliddin";

// function age() {
//   const birthYear = 2002;

//   function calcAge() {
//     var jobs = "Haccer";
//     let job = "Developer";
//     console.log(`My name is ${myName} and my age is ${2022 - birthYear}`);
//   }
//   if (birthYear === 2002) {
//     var yosh = "32";
//   }
//   console.log(yosh);
//   calcAge();
// }
// age();
// let f = 36;
// console.log(f);

// let arrIch = [...cafe.ichimliklar];
// console.log(arrIch);

// const shira = ["keks", "muzqaymoq"];
// let shirin = [...cafe.ichimliklar, ...shira];
// console.log(shirin);
//  cafe.order(0, 1);

// const arr = [1, 2, 4];
// const [x = 1, y = 1, z = 1, t = 1, r = 10] = arr;
// console.log(x, y, z, t, r);

// const arr = [2, 3, [8, 9]];
// let b;
// const arra = [2, 3, 8, 9, [5, 6]];
// for (i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "object") {
//     b = arr[i][1];
//     break;
//   }
// }
// console.log(b);

// const {
//   title: nomlash,
//   ichimliklar,
//   locationCafe,
//   ochiqVaqt: {
//     dush: { open: ochilish },
//     shanba: shanbaKuni,
//   },
//   turi,
// } = cafe;

// console.log(ochilish);

// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

const cafe = {
  taomlar: ["osh", "shorva", "shashlik", "bishtax"],
  shirinlik: ["muzqaymoq", "tort", "paxlava"],
  ichimliklar: ["cola", "choy", "kampot"],

  ochiqVaqt: {
    dush: {
      open: "9:00",
      close: "22:00",
    },
    shanba: {
      open: "8:00",
      close: "23:00",
    },
  },
  location: "Tashkent, YunusObod, TATU",
  order: function (taom, ichimlik) {
    console.log(
      `Siz ${this.taomlar[taom]} buyurtma qildingiz va ${this.ichimliklar[ichimlik]}  `
    );
  },
};
// let a = ["a", "b", "c", "d"];
// console.log(a.entries());
for (let el of cafe.taomlar.entries()) {
  console.log(`${el[0] + 1}-----${el[1]}`);
}
// for (let el of a) {
//   console.log(el);
// }

// const c = [...cafe.shirinlik, ...cafe.ichimliklar];
// for (let element of c) {
//   console.log(element);
// }

// console.log(cafe.odam ?? "Bunaqa key mavjud emas");

// let a = [1, 2, 3, 4, 5, 6];
// let sum = 0;

// for (let element of a) {
//   sum = sum + element;
// }
// console.log(sum);
// let y = [birinchiOvqat, ikkinchiOvqat];
// console.log(y, kerakEmas);

// const { ochiqVaqt } = cafe;
// console.log(ochiqVaqt);

// console.log(0 || true || false || undefined || NaN || null);
