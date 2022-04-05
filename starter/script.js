'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let latitude;
let longitude;

let map;
let event1;

class Mashq {
  date = new Date();
  id = (Date.now() + '').slice(-8);

  constructor(distance, duration, coords) {
    this.distance = distance;
    this.duration = duration;
    this.coords = coords;
  }
  _setTavsif() {
    this.months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    this.malumot = `${this.type[0].toUpperCase()}${this.type.slice(1)}
    ${months[this.date.getMonth()]}${this.date.getDate()}
    `;
  }
}

class Yugurish extends Mashq {
  type = 'running';
  constructor(distance, duration, coords, qadamSoni) {
    super(distance, duration, coords);
    this.qadamSoni = qadamSoni;
    this._setTavsif();
  }
}

class Velik extends Mashq {
  type = 'cycling';
  constructor(distance, duration, coords, elevation) {
    super(distance, duration, coords);
    this.elevation = elevation;
    this._setTavsif();
  }
}

class App {
  #mashqlar = [];
  constructor() {
    this._getCurrentPosition();
    inputType.addEventListener('change', this._showToogle);
    form.addEventListener('submit', this._createObject.bind(this));

    containerWorkouts.addEventListener('click', this._moveCenter.bind(this));
  }

  // Hozir turgan ornini lokatsiyasini olish
  _getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      this._showMap.bind(this),
      function () {
        alert('Lokatsiya ololmadim');
      }
    );
  }
  // Hozir turgan ornimni lokatsiyasini Mapga berib Mapni ochib berish

  _showMap(e) {
    (latitude = e.coords.latitude), (longitude = e.coords.longitude);

    map = L.map('map').setView([latitude, longitude], 18);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    this._showForm();
    this._getLocalStorage();

    L.Routing.control({
      waypoints: [
        L.latLng(latitude, longitude),
        L.latLng(latitude + 0.05, longitude + 0.05),
      ],
      lineOptions: {
        styles: [{ color: 'blue', opacity: 1, weight: 5 }],
      },
    })
      .on('routesfound', function (e) {
        console.log(e.routes[1].summary.totalDistance);
        // console.log(route.summary.totalDistance);
      })
      .addTo(map);

    let btn = document.querySelector('.leaflet-routing-container');
    btn.addEventListener('click', function () {
      btn.classList.toggle('leaflet-routing-container-hide');
    });
    this._showForm();
    this._getLocalStorage();
  }

  _showForm() {
    map.on('click', function (e) {
      event1 = e;
      console.log(event1);
      form.classList.remove('hidden');
      inputDistance.focus();
    });
  }

  // Select option runningdan  ozgarganda   o`zgartirish

  _showToogle() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }

  // Forma submit bolganda markerni mapga chiqarish

  _setMarker(obj) {
    L.marker(obj.coords)
      .addTo(map)
      .bindPopup(
        L.popup({
          Maxwidth: 500,
          Minwidth: 50,
          autoClose: false,
          closeOnClick: false,
          className: `${obj.type}-popup`,
        }).setContent(obj.malumot)
      )

      .openPopup();
    this._hideForm();
  }

  // Formadan malumotlarni o`qib Object yaratish

  _createObject(e) {
    e.preventDefault();
    let davom = '';
    let numbermi = (...inputs) => {
      return inputs.every(val => Number.isFinite(val));
    };
    let musbatmi = (...inputs) => {
      return inputs.every(val => val > 0);
    };
    let distance = +inputDistance.value;
    let duration = +inputDuration.value;
    let type = inputType.value;

    if (type === 'running') {
      let cadence = +inputCadence.value;
      if (
        !numbermi(distance, duration, cadence) ||
        !musbatmi(distance, duration, cadence)
      ) {
        return 'Error!';
      }
      davom = new Yugurish(
        distance,
        duration,
        [event1.latlng.lat, event1.latlng.lng],
        cadence
      );
      console.log(davom);
    }

    if (type === 'cycling') {
      let elevation = +inputElevation.value;
      if (
        !numbermi(distance, duration, elevation) ||
        !musbatmi(distance, duration)
      ) {
        return 'Error!';
      }
      davom = new Velik(
        distance,
        duration,
        [event1.latlng.lat, event1.latlng.lng],
        elevation
      );
    }

    // mashqa obyektini mashqlar obyektiga push qilish
    this.#mashqlar.push(davom);
    // Mashq obj dagi malumotlarni mapga marker qilib otkazib beradi
    this._setMarker(davom);

    // Mashqning royhatini chiqarish
    this._renderList(davom);
    console.log(this.#mashqlar);
    // SetLocaldan foydalanish
    this._setLocalStorage();
  }

  _renderList(obj) {
    let html = `<li class="workout workout--${obj.type}" data-id="${obj.id}">
    <h2 class="workout__title">${obj.malumot}</h2>
    <div class="workout__details">
      <span class="workout__icon">
      ${obj.type === 'running' ? '🏃' : '🚴‍♀️'}
      </span>
      <span class="workout__value">${obj.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${obj.duration}</span>
      <span class="workout__unit">min</span>
    </div>`;

    if (obj.type === 'running') {
      html += `
  
  
  <div class="workout__details">
  <span class="workout__icon">⚡️</span>
  <span class="workout__value">${obj.distance / obj.duration}</span>
  <span class="workout__unit">min/km</span>
</div>
<div class="workout__details">
  <span class="workout__icon">🦶🏼</span>
  <span class="workout__value">${obj.qadamSoni}</span>
  <span class="workout__unit">spm</span>
</div>
</li>`;
    }
    if (obj.type === 'cycling') {
      html += ` <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${obj.distance / (obj.duration / 60)}</span>
      <span class="workout__unit">km/h</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⛰</span>
      <span class="workout__value">${obj.elevation}</span>
      <span class="workout__unit">m</span>
    </div>
  </li> `;
    }

    form.insertAdjacentHTML('afterend', html);
  }

  // Malumotlarni localStorecega saqlash

  _setLocalStorage() {
    localStorage.setItem('mashqlar', JSON.stringify(this.#mashqlar));
  }

  _getLocalStorage() {
    let data = JSON.parse(localStorage.getItem('mashqlar'));
    if (!data) return;

    this.#mashqlar = data;
    console.log('dfdddd' + this.#mashqlar);
    this.#mashqlar.forEach(val => {
      this._renderList(val);
      this._setMarker(val);
    });
  }
  // Formani yopish

  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.classList.add('hidden');
  }

  _moveCenter(e) {
    let element = e.target.closest('.workout');
    if (!element) return;

    let elementId = element.getAttribute('data-id');
    console.log(elementId);

    let objs = this.#mashqlar.find(val => {
      return val.id === elementId;
    });
    console.log(objs);
    map.setView(objs.coords, 18, {
      animate: true,
      pan: {
        duration: 2,
      },
    });
    L.circle(objs.coords, { radius: 100 }).addTo(map);
  }
}

const magicMap = new App();

setTimeout(function () {
  console.log(latitude, longitude);
}, 3000);
