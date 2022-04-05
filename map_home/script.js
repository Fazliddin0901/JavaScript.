'use strict';
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const buttonBos = document.querySelector('.form__btn');

let letitut;
let longitut;
let letitut1;
let longitut1;
let map;
let eventMap;
let uchir, uchir1;
let masofaOl;
let shart = 0;
let y = 1;
class Shaxs {
  constructor(masofa, tezlik, coords, coords1) {
    this.masofa = masofa;
    this.tezlik = tezlik;
    this.coords = coords;
    this.coords1 = coords1;
  }
}
class Piyoda extends Shaxs {
  vaqt;
  type = 'piyoda';
  constructor(masofa, tezlik, coords, coords1) {
    super(masofa, tezlik, coords, coords1);
    this.vaqtniHisobla();
  }
  vaqtniHisobla() {
    this.vaqt = this.masofa / this.tezlik;
    return this.vaqt;
  }
}
class Velik extends Shaxs {
  vaqt;
  type = 'vilosapedda';
  constructor(masofa, tezlik, coords, coords1) {
    super(masofa, tezlik, coords, coords1);
    this.vaqtniHisobla();
  }
  vaqtniHisobla() {
    this.vaqt = this.masofa / this.tezlik;
    return this.vaqt;
  }
}
class Mashina extends Shaxs {
  vaqt;
  type = 'mashinada';
  constructor(masofa, tezlik, coords, coords1) {
    super(masofa, tezlik, coords, coords1);
    this.vaqtniHisobla();
  }
  vaqtniHisobla() {
    this.vaqt = this.masofa / this.tezlik;
    return this.vaqt;
  }
}

class App {
  #arr = [];
  constructor() {
    this._getCurrentPosition();
    buttonBos.addEventListener('click', e => {
      e.preventDefault();
      this.objectYaratish();
    });
    document.querySelector('.boshlash').addEventListener('click', e => {
      e.preventDefault();
      if (y == 1) {
        this.kerakliJoyniTanlash();
        y = 2;
        console.log(1);
      } else {
        if (y == 2) {
          this.XaritagaJOylashtirish();
          y = 3;
          console.log(2);
        } else {
          if (y == 3) {
            this.enterKey();
            y = 1;
          }
        }
      }
    });
  }
  // turgan ornimni olaish
  _getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      this._showMap.bind(this),
      function () {
        alert('Erorr');
      }
    );
  }

  // Mapni Ochishx
  _showMap(e) {
    letitut = e.coords.latitude;
    longitut = e.coords.longitude;
    map = L.map('map').setView([letitut, longitut], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    this.localdanChiqarish();
  }

  kerakliJoyniTanlash() {
    var greenIcon = new L.Icon({
      iconUrl:
        'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
    uchir = L.marker([letitut, longitut], {
      draggable: true,
      icon: greenIcon,
    })
      .on('move', function (e) {
        letitut = e.latlng.lat;
        longitut = e.latlng.lng;
        // console.log(e);
        // console.log(letitut, longitut);
      })
      .addTo(map)
      .bindPopup(
        L.popup({
          Maxwidth: 500,
          Minwidth: 50,
          autoClose: false,
          closeOnClick: false,
        }).setContent(
          '<p>Siz turgan Joy!<br />Enter tugmasini bosib kerakli  joyni tanlang  </p>'
        )
      )

      .openPopup();
    letitut1 = letitut + 0.01;
    longitut1 = longitut + 0.01;
    document.querySelector('.logo').textContent =
      'Qayerdan boshlashingizni tanlang';
  }

  //// samlknhjfsn gdhsbfckghdsj,bhcvk dsjbgkvhdc

  XaritagaJOylashtirish() {
    map.removeLayer(uchir);

    uchir = L.marker([letitut, longitut], {
      draggable: false,
    })
      .on('move', function (e) {
        letitut = e.latlng.lat;
        longitut = e.latlng.lng;
        // console.log(e);
        // console.log(letitut, longitut);
      })
      .addTo(map)
      .bindPopup(
        L.popup({
          Maxwidth: 500,
          Minwidth: 50,
          autoClose: false,
          closeOnClick: false,
        }).setContent(
          '<p>Siz turgan Joy!<br />Enter tugmasini bosib kerakli  joyni tanlang  </p>'
        )
      )

      .openPopup();
    document.querySelector('.logo').textContent =
      'Enter tugmasini boshlashingizni tanlang';
    var redIcon = new L.Icon({
      iconUrl:
        'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
    uchir1 = L.marker([letitut1, longitut1], {
      draggable: true,
      icon: redIcon,
    })
      .on('move', e => {
        letitut1 = e.latlng.lat;
        longitut1 = e.latlng.lng;
        // console.log(letitut1, longitut1);
      })
      .addTo(map)
      .bindPopup(
        L.popup({
          Maxwidth: 500,
          Minwidth: 50,
          autoClose: false,
          closeOnClick: false,
        }).setContent(
          `<p>Siz bormoqchi bo'lgan JOy!<br />Enter tugmasini bosib kerakli  joyni tanlang  </p>`
        )
      )

      .openPopup();
  }
  enterKey() {
    // console.log(121653653);
    L.Routing.control({
      waypoints: [L.latLng(letitut, longitut), L.latLng(letitut1, longitut1)],
      draggableWaypoints: false,

      lineOptions: {
        styles: [{ color: 'blue', opacity: 1, weight: 5 }],
      },
    })
      .on('routesfound', function (e) {
        masofaOl = e.routes[0].summary.totalDistance;
        // console.log(route.summary.totalDistance);
        // console.log(masofaOl);
      })
      .addTo(map);

    document.querySelector('.logo').textContent = 'Qayta Tanlash uchun bosing';
    map.removeLayer(uchir);
    map.removeLayer(uchir1);

    form.classList.remove('hidden');
    // this.objectYaratish();
  }

  objectYaratish() {
    let yol;
    if (inputType.value === 'piyoda') {
      if (!+inputDistance.value > 0) return;
      yol = new Piyoda(
        masofaOl,
        +inputDistance.value,
        [letitut, longitut],
        [letitut1, longitut1]
      );
      // console.log(yol);
    }

    if (inputType.value === 'vilosapedda') {
      if (!+inputDistance.value > 0) return;
      yol = new Velik(
        masofaOl,
        inputDistance.value,
        [letitut, longitut],
        [letitut1, longitut1]
      );
      // console.log(yol);
    }

    if (inputType.value === 'mashinada') {
      if (!+inputDistance.value > 0) return;
      yol = new Mashina(masofaOl, inputDistance.value, [letitut1, longitut1]);
      // console.log(yol);
    }
    this.#arr.push(yol);
    // console.log(this.#arr);
    this.localgaSaqlash();
    this.malumotlarniSaralash(yol);
  }
  malumotlarniSaralash(obj) {
    let htmlContent = `<li class="workout workout--running" data-id="1234567890">
    <h2 class="workout__title">Running on April 01</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        obj.type === 'piyoda' ? '🏃‍♂️' : obj.type == 'vilosapedda' ? '🚴‍♀️' : '🚗'
      }</span>
      <span class="workout__value">${obj.masofa}</span>
      <span class="workout__unit">${
        obj.type === 'piyoda' ? 'm' : obj.type == 'vilosapedda' ? 'km' : 'km'
      }</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${Math.round(obj.vaqt)}</span>
      <span class="workout__unit">min</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${obj.tezlik}</span>
      <span class="workout__unit">min/km</span>
    </div>
  </li>`;
    // console.log(obj);
    // console.log(htmlContent);
    containerWorkouts.insertAdjacentHTML('afterbegin', htmlContent);
    form.classList.add('hidden');
  }

  localgaSaqlash() {
    localStorage.setItem('Xaritalar', JSON.stringify(this.#arr));
  }
  localdanChiqarish() {
    let data = JSON.parse(localStorage.getItem('Xaritalar'));
    this.#arr = data;
    this.#arr.forEach(val => {
      if (!val) return;
      this.malumotlarniSaralash(val);
    });
  }
}

const magicMap = new App();
