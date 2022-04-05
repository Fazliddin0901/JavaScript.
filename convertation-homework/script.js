let birinchi = document.querySelector(".birinchi");
let birinchi1 = document.querySelector(".birinchi1");
let two = document.querySelector(".two");
fetch(`https://api.fastforex.io/fetch-all?api_key=cd819107bf-af7afd5e1e-r9qw6m`)
  .then((response) => {
    // console.log(response);
    return response.json();
  })
  .then((res) => {
    let birinchiniOl;
    let ikkinchiniOl;
    console.log(res);
    let uzgar = Object.entries(res.results);

    for (let [key, val] of uzgar) {
      let option = `<option class="bir">${key}</option>`;
      birinchi.insertAdjacentHTML("afterbegin", option);
      birinchi1.insertAdjacentHTML("afterbegin", option);
    }
    birinchi.addEventListener("change", () => {
      birinchiniOl = birinchi.value;
    });
    birinchi1.addEventListener("change", () => {
      ikkinchiniOl = birinchi1.value;
    });
    document.querySelector(".natija").addEventListener("click", () => {
      let summa = Number(document.que  mainFunct(birinchiniOl, ikkinchiniOl, summa, res);
    });
  });
function mainFunct(nomi, nomi1, summa, obj) {
  let mapgaUtkaz = new Map(Object.entries(obj.results));
  let sum1 = mapgaUtkaz.get(nomi);
  let sum2 = mapgaUtkaz.get(nomi1);
  let utkaz = sum2 / sum1;
  // console.log(utkaz);
  return utkaz * summa;
}
