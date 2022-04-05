let kiritlganMalumot = document.querySelector(".kirit");
let tugma = document.querySelector(".add");
let cont = document.querySelector(".container");

let arr = [];

let yangicha = document.createElement("div");
console.log(yangicha);
yangicha.classList.add("qoshamiz");

tugma.addEventListener("click", function () {
  let val = kiritlganMalumot.value;

  arr.push(val);
  kiritlganMalumot.value = "";
  console.log(val);
  console.log(arr);

  yangicha.innerHTML = `<p>${arr[arr.length - 1]}</p>
  <p class='delete'>Delete</p>`;
  cont.append(yangicha.cloneNode(true));
});
