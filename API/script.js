'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// function renderHtml(data, className) {
//   let html = ` <article class="country" ${className}>
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.nativeName}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       data.population / 1000000
//     ).toFixed(1)}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>`;

//   countriesContainer.insertAdjacentHTML('afterbegin', html);
//   countriesContainer.style.oppacity = '1';
// }

// const getCountry = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(request.responseText);
//     renderHtml(data);

//     // console.log(data);

//     let border = data.borders;
//     border.forEach(val => {
//       let request2 = new XMLHttpRequest();
//       request2.open('GET', `https://restcountries.com/v2/alpha/${val}`);
//       request2.send();
//       request2.addEventListener('load', function () {
//         let data2 = JSON.parse(request2.responseText);
//         renderHtml(data2, 'neighbour');
//       });
//     });
//   });
// };

// const getCountry = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())

//     .then(res => {
//       let [data] = res;
//       renderHtml(data);

//       let border = data.borders[4];
//       fetch(`https://restcountries.com/v2/name/${border}`)
//         .then(function (response) {
//           return response.json();
//         })
//         .then(function (res) {
//           let [a] = res;
//           renderHtml(a, 'neighbour');
//         });
//       return fetch(`https://restcountries.com/v2/alpha/${border}`);
//     });
// };

const functionRet = async function () {
  //   let data2 = await fetch(`https://restcountries.com/v2/name/uzbekitan`);
  //   let [body] = await data2.json();
  //   console.log(body);
  //   renderHtml(body);
  //   let border = body.borders[2];
  //   let chegaradosh = await fetch(`https://restcountries.com/v2/alpha/${border}`);
  //   console.log(chegaradosh);
  //   let chegaradoshBody = await chegaradosh.json();
  //   renderHtml(data2, 'neighbour');

  console.time('loop');

  // const data1 = await fetch('https://restcountries.com/v2/name/uzbekistan');
  // const dataJson = await data1.json();
  // const data2 = await fetch('https://restcountries.com/v2/name/usa');
  // const dataJson1 = await data2.json();
  // const data3 = await fetch('https://restcountries.com/v2/name/russia');
  // const dataJson2 = await data3.json();
  // console.log(dataJson, dataJson1, dataJson2);

  // const data = await Promise.all([
  //   fetch('https://restcountries.com/v2/name/uzbekistan'),
  //   fetch('https://restcountries.com/v2/name/usa'),
  //   fetch('https://restcountries.com/v2/name/italia'),
  //   fetch('https://restcountries.com/v2/name/japan'),
  //   fetch('https://restcountries.com/v2/name/ukraine'),
  //   fetch('https://restcountries.com/v2/name/korea'),
  // ]);
  // console.log(data);

  const data = await Promise.race([
    fetch('https://restcountries.com/v2/name/uzbekistan'),
    fetch('https://restcountries.com/v2/name/usa'),
    fetch('https://restcountries.com/v2/name/italia'),
    fetch('https://restcountries.com/v2/name/japan'),
    fetch('https://restcountries.com/v2/name/ukraine'),
    fetch('https://restcountries.com/v2/name/korea'),
  ]);
  console.log(data);

  let timeOut = function (sekund) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve('Sizning internetingiz sekin');
      }, sekund * 1000);
    });
  };
  const data1 = await Promise.race([data, timeOut[0.1]]);

  console.timeEnd('loop');
};
functionRet();

// data();
// getCountry('uzbekistan');
// getCountry('usa');
// getCountry('russia');
