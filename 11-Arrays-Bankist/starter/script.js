'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account = [account1, account2, account3, account4];

account.forEach(function (val) {
  val.username = val.owner
    .toLocaleLowerCase()
    .split(' ')
    .map(function (val) {
      return val[0];
    })
    .join('');
});
1;
// account.find(function(val){
//   return val.username===
// })
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// function
// if(movements__value%2==0){
//   document.querySelector.
// }
const pulYigindisi = function (obj) {
  let yig = obj.movements.reduce(function (yig, val) {
    return yig + val;
  }, 0);
  return yig;
};
let out = 0;
let sumIn = 0;
let komissiya = 0;
const statistika = function (obj) {
  out = obj.movements
    .filter(function (val) {
      return val < 0;
    })
    .reduce(function (sum, val) {
      return sum + val;
    }, 0);
  sumIn = obj.movements
    .filter(function (val) {
      return val > 0;
    })
    .reduce(function (sum, val) {
      return sum + val;
    }, 0);
  komissiya = obj.movements
    .filter(function (val) {
      return val < 0;
    })
    .map(function (val) {
      return (val * obj.interestRate) / 100;
    })
    .reduce(function (sum, val) {
      return sum + val;
    }, 0);
};
const ekrangaTranzaksiyalarniChiqarish = function (obj) {
  containerMovements.innerHTML = '';
  obj.movements.forEach(function (val, key) {
    let tekshir = val > 0 ? 'deposit' : 'withdrawal';
    let qalay = `<div class="movements__row">
    <div class="movements__type movements__type--${tekshir}">${
      key + 1
    } ${tekshir}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${val}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', qalay);
  });
};

let kirganUser;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  let login = inputLoginUsername.value;

  let parol = Number(inputLoginPin.value);

  kirganUser = account.find(function (val) {
    return val.username == login;
  });
  // console.log(kirganUser);
  if (kirganUser?.pin === parol) {
    inputLoginUsername.value = inputLoginPin.value = ``;
    labelWelcome.style.color = `#333`;
    containerApp.style.opacity = 1;
  } else {
    labelWelcome.textContent = `Try again`;
    labelWelcome.style.color = `red`;
  }

  ekrangaTranzaksiyalarniChiqarish(kirganUser);
  labelBalance.textContent = `${pulYigindisi(kirganUser)}€`;
  statistika(kirganUser);
  labelSumIn.textContent = sumIn;
  labelSumOut.textContent = Math.abs(out);
  labelSumInterest.textContent = Math.abs(komissiya);
});

btnClose.addEventListener('click', function (j) {
  j.preventDefault();
  let ochiribYubor = inputCloseUsername.value;
  let yoqotibYubor = Number(inputClosePin.value);
});

btnLoan.addEventListener('click', function (s) {
  s.preventDefault();

  let qiymata = Number(inputLoanAmount.value);
  if (qiymata > 0 && qiymata < pulYigindisi(kirganUser) * 0.1) {
    kirganUser.movements.push(qiymata);
    ekrangaTranzaksiyalarniChiqarish(kirganUser);
    labelBalance.textContent = `${pulYigindisi(kirganUser)}€`;
    statistika(kirganUser);
    labelSumIn.textContent = sumIn;
    labelSumOut.textContent = Math.abs(out);
    labelSumInterest.textContent = Math.abs(komissiya);
  }
});

btnTransfer.addEventListener('click', function (a) {
  a.preventDefault();
  let qabulQilibOl = inputTransferTo.value;
  let jonatyabman = Number(inputTransferAmount.value);
  if (
    qabulQilibOl !== kirganUser.username &&
    jonatyabman > 0 &&
    jonatyabman < pulYigindisi(kirganUser)
  ) {
    kirganUser.movements.push(jonatyabman * -1);
    let ushla = account.find(function (val) {
      return val.username == qabulQilibOl;
    });
    ushla.movements.push(jonatyabman);

    ekrangaTranzaksiyalarniChiqarish(kirganUser);
    labelBalance.textContent = `${pulYigindisi(kirganUser)}€`;
    statistika(kirganUser);
    labelSumIn.textContent = sumIn;
    labelSumOut.textContent = Math.abs(out);
    labelSumInterest.textContent = Math.abs(komissiya);
  }
});

btnSort.addEventListener('click', function (a) {
  a.preventDefault;
  kirganUser.movements.sort((a, b) => a - b);

  ekrangaTranzaksiyalarniChiqarish(kirganUser);
  labelBalance.textContent = `${pulYigindisi(kirganUser)}€`;
  statistika(kirganUser);
  labelSumIn.textContent = sumIn;
  labelSumOut.textContent = Math.abs(out);
  labelSumInterest.textContent = Math.abs(komissiya);

  // btnSort.addEventListener('click', function (a) {
  //   a.preventDefault;
  //   ekrangaTranzaksiyalarniChiqarish(kirganUser);
  //   labelBalance.textContent = `${pulYigindisi(kirganUser)}€`;
  //   statistika(kirganUser);
  //   labelSumIn.textContent = sumIn;
  //   labelSumOut.textContent = Math.abs(out);
  //   labelSumInterest.textContent = Math.abs(komissiya);
  // });
});

// btnSort.addEventListener('click', function (a) {
//   a.preventDefault;
//   kirganUser.movements.sort();

//   ekrangaTranzaksiyalarniChiqarish(kirganUser);
//   labelBalance.textContent = `${pulYigindisi(kirganUser)}€`;
//   statistika(kirganUser);
//   labelSumIn.textContent = sumIn;
//   labelSumOut.textContent = Math.abs(out);
//   labelSumInterest.textContent = Math.abs(komissiya);
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

labelBalance.addEventListener('click', function () {
  let utkazmalar = Array.from(
    document.querySelectorAll('.movements__value'),
    (val, key) => {
      return val.textContent;
    }
  );
  // element=>element.
  console.log(utkazmalar);
});

// DATE

let hozirInternational = new Date();
let options = {
  day: 'numeric',
  month: 'numeric',
  weekday: 'long',
};

let davlat = navigator.language;
let uzb = new Intl.DateTimeFormat(davlat, options).format(hozirInternational);
console.log(uzb);
document.querySelector('.balance__date,').textContent = uzb;
document.querySelector('.movements__date,').textContent = uzb;

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let x = Array.from(arr, function (val, key) {
//   {
//     return val * 10;
//   }
// });
// console.log(x);

// let y = [1, 2, 3, 4, 5, 6];
// let x = Array.from(y, function (val, key) {
//   return val * 5;
// });
// console.log(x);

// fetch('https://tuit.uz/').then(function (javob) {
//   switch (javob.status) {
//     case 200:
//       console.log('Sayt ishladi');

//       break;

//     case 404:
//       console.log('Sayt ishlamadi');
//       break;
//   }
// });
// .then(function (javobHTML) {
//   console.log(javobHTML);
// });
