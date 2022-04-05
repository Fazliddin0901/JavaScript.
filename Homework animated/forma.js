let kun = document.querySelector(".kun");
let soat = document.querySelector(".soat");
let minut = document.querySelector(".minut");
let sekund = document.querySelector(".sekund");

let son = Number(prompt("Sekundni kiriting"));
let min = Number(prompt("Minutni kiriting"));
let soa = Number(prompt("Kunni kiriting"));
let ku = Number(prompt("Kunni kiriting"));

let toxta = setInterval(() => {
  sekund.textContent = `${son--}`;
  if (son == -1) {
    minut.textContent = `${min--}`;
    son = 5;
    if (min == -1) {
      soat.textContent = `${soa--}`;
      min = 5;
      if (soa == -1) {
        soa = 5;
        kun.textContent = `${ku--}`;

        if (ku == -1) {
          clearInterval(toxta);
        }
      }
    }
  }
});
