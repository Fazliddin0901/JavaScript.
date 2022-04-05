'use strict';
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const formniKorsat = document.querySelector('.form');
let markerAlmash = document.querySelector('.logo');
let nextTugmasi = document.querySelector('.form__btn');

let bakavoyIKki = document.querySelector('.leaflet-routing-alt ');

let lt = 0;
let lng = 0;
let lt1 = 0;
let lng1 = 0;
let locationSaqla;
let locationSaqla2;
let shart = 1;
let map;
let oradagiMasofaniOl;

class Shaxs {
  constructor(masofa, tezlik, kordinata) {
    this.masofa = masofa;
    this.tezlik = tezlik;
    this.kordinata = kordinata;
  }
}
class Piyoda extends Shaxs {
  type = 'piyoda';
  vaqt;
  constructor(masofa, tezlik, kordinata) {
    super(masofa, tezlik, kordinata);
    this.vaqtniChiqar();
  }
  vaqtniChiqar() {
    this.vaqt = this.masofa / this.tezlik;
    return this.vaqt;
  }
}

class Velikda extends Shaxs {
  type = 'vilosoped';
  vaqt;
  constructor(masofa, tezlik, kordinata) {
    super(masofa, tezlik, kordinata);
    this.vaqtniChiqar();
  }
  vaqtniChiqar() {
    this.vaqt = this.masofa / this.tezlik;
    return this.vaqt;
  }
}
class Mashina extends Shaxs {
  type = 'mashina';
  vaqt;
  constructor(masofa, tezlik, kordinata) {
    super(masofa, tezlik, kordinata);
    this.vaqtniChiqar();
  }
  vaqtniChiqar() {
    this.vaqt = this.masofa / this.tezlik;
    return this.vaqt;
  }
}

// dsfuwvhuervjewvweuvevehuechecheceucecuecheececuecuhecuehcechuechecucheuehcecechehceucheucuceuchecuehceuhcechecheucheuc
class bigBro {
  #arr = [];
  constructor() {
    this.mapLocation();

    nextTugmasi.addEventListener(
      'click',
      function (e) {
        e.preventDefault();
        this.obyektYarat();
      }.bind(this)
    );

    markerAlmash.addEventListener('click', e => {
      e.preventDefault();
      if (shart == 1) {
        this.birinchiMarker();
        shart = 2;
      } else if (shart == 2) {
        this.ikkinchiMarker();
        shart = 3;
      } else if (shart == 3) {
        this.yolChizishUchun();
        shart = 1;
      }
    });
  }
  mapLocation() {
    navigator.geolocation.getCurrentPosition(this.mapUchun.bind(this));
  }

  mapUchun(e) {
    console.log(e);
    lt = e.coords.latitude;
    lng = e.coords.longitude;
    console.log(lt, lng);

    map = L.map('map').setView([lt, lng], 18);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    // this.birinchiMarker();
  }

  birinchiMarker() {
    locationSaqla = L.marker([lt, lng], {
      draggable: true,
    })
      .on('move', function (e) {
        lt = e.latlng.lat;
        lng = e.latlng.lng;
        console.log(e);
        console.log(lt, lng);
      })
      .addTo(map)
      .bindPopup(
        L.popup({
          Maxwidth: 500,
          Minwidth: 50,
          autoClose: true,
          closeOnClick: false,
        }).setContent(
          '<p>Siz turgan Joy!<br />Enter tugmasini bosib kerakli  joyni tanlang  </p>'
        )
      )

      .openPopup();
    markerAlmash.textContent = 'Bormoqchi bolgan joyingizni saqlang';
  }
  ikkinchiMarker() {
    map.removeLayer(locationSaqla); // birinchi markerni uchirish uchun
    // birinchi markerni qotirib qoyidh uchun
    locationSaqla = L.marker([lt, lng], {
      draggable: false,
    })
      .on('move', function (e) {
        lt = e.latlng.lat;
        lng = e.latlng.lng;
        console.log(e);
        console.log(lt, lng);
      })
      .addTo(map)
      .bindPopup(
        L.popup({
          Maxwidth: 500,
          Minwidth: 50,
          autoClose: true,
          closeOnClick: false,
        }).setContent(
          '<p>Siz turgan Joy!<br />Enter tugmasini bosib kerakli  joyni tanlang  </p>'
        )
      )

      .openPopup();
    // this.ikkinchiMarkerni elon qilish uchun
    lt1 = lt + 0.001;
    lng1 = lng + 0.001;
    locationSaqla2 = L.marker([lt1, lng1], {
      draggable: true,
    })
      .on('move', function (e) {
        lt1 = e.latlng.lat;
        lng1 = e.latlng.lng;
        console.log(e);
        console.log(lt1, lng1);
      })
      .addTo(map)
      .bindPopup(
        L.popup({
          Maxwidth: 500,
          Minwidth: 50,
          autoClose: true,
          closeOnClick: false,
        }).setContent(
          '<p>Siz turgan Joy!<br />Enter tugmasini bosib kerakli  joyni tanlang  </p>'
        )
      )

      .openPopup();
    markerAlmash.textContent = 'yonalishni chiqarish uchun bosing';
  }

  yolChizishUchun() {
    map.removeLayer(locationSaqla);
    map.removeLayer(locationSaqla2);

    L.Routing.control({
      waypoints: [L.latLng(lt, lng), L.latLng(lt1, lng1)],
      draggableWaypoints: false,

      lineOptions: {
        styles: [{ color: 'blue', opacity: 1, weight: 5 }],
      },
    })
      .on('routesfound', function (e) {
        // console.log(e);
        oradagiMasofaniOl = e.routes[0].summary.totalDistance;
        // console.log(route.summary.totalDistance);
        // console.log(masofaOl);
      })
      .addTo(map);
    markerAlmash.textContent = 'qayta yonalish kiriting';
    formniKorsat.classList.remove('hidden');
  }

  obyektYarat() {
    let objYarat;
    if (inputType.value == 'piyoda') {
      if (+inputDistance.value > 0) {
        objYarat = new Piyoda(oradagiMasofaniOl, inputDistance.value, [
          lt,
          lng,
        ]);
      }
    } else {
      if (inputType.value == 'vilosoped') {
        if (+inputDistance.value > 0) {
          objYarat = new Velikda(oradagiMasofaniOl, inputDistance.value, [
            lt,
            lng,
          ]);
        }
      } else if (inputType.value == 'mashina') {
        if (+inputDistance.value > 0) {
          objYarat = new Mashina(oradagiMasofaniOl, inputDistance.value, [
            lt,
            lng,
          ]);
        }
      }
    }
    this.#arr.push(objYarat);
    this.lokalStoragegaQosh();
    this.htmlgaQosh(objYarat);
  }

  htmlgaQosh(obj) {
    let htmlgaQoshibTashla = `<li class="workout workout--running" data-id="1234567890">
    <h2 class="workout__title">Running on April 2</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        obj.type == 'piyoda' ? '🏃‍♂️' : obj.type == 'vilosoped' ? '🚴‍♀️' : '🚗'
      }</span>
      <span class="workout__value">${obj.masofa}</span>
      <span class="workout__unit">m</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${obj.vaqt}</span>
      <span class="workout__unit">min</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${obj.tezlik}</span>
      <span class="workout__unit">km/h</span>
    </div>
  </li>`;
    containerWorkouts.insertAdjacentHTML('afterend', htmlgaQoshibTashla);
    formniKorsat.classList.add('hidden');
  }

  lokalStoragegaQosh() {
    localStorage.setItem('birinchiStorage', JSON.stringify(this.#arr));
  }
}

const kattaBro = new bigBro();
console.log(kattaBro);
