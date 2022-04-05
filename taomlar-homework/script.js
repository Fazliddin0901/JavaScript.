let search = document.querySelector(".search");
let searchIcon = document.querySelector(".icon");
let sorry = document.querySelector(".sorry");
let popup = document.querySelector(".yakun");

searchIcon.addEventListener("click", (e) => {
  e.preventDefault();
  let searchVal = search.value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchVal}`)
    .then((response) => response.json())
    .then((res) => {
      let bigFood = document.querySelector(".bigFood");
      let data = res.meals;
      console.log(data);
      let html;
      bigFood.innerHTML = "";

      for (let key of data) {
        html = `<div class="section">
        <img src="${key.strMealThumb}" alt="#" class="image1" />
        <p class="nomi">${key.strMeal}</p>
        <button class="tugma">Get Recipe</button>
      </div>`;
        bigFood.insertAdjacentHTML("afterbegin", html);
      }
    });
  search.value = " ";
});

// console.log("SYN1");
// setTimeout(function () {
//   console.log("Asyn");
// }),
//   0;
// Promise.resolve("Promise").then((res) => console.log(res));
// console.log("SYN2");

// console.time("loop");
// fetch("https://restcountries.com/v2/name/uzbekistan");
// console.timeEnd("loop");

// const tanga = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve("Siz yutdingiz");
//     } else {
//       reject("Siz yutqazdiz brat");
//     }
//   });
// });

// tanga.then((res) => console.log(res)).catch((err) => alert("error"));
