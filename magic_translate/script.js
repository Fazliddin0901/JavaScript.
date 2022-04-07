let select = document.querySelector(".opti");
let select2 = document.querySelector(".opti2");
let textArea = document.querySelector(".text");
let textArea2 = document.querySelector(".text2");
let btn = document.querySelector(".tugma");

const options = {
  method: "GET",
  headers: {
    "Accept-Encoding": "application/gzip",
    "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    "X-RapidAPI-Key": "d96eedff8amshdd02469b5410f36p180a4fjsn615e157008b4",
  },
};

fetch(
  "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    for (let key of response.data.languages) {
      let html = `<option value="${key.language}">${key.language}</option>`;
      select.insertAdjacentHTML(`afterbegin`, html);
      select2.insertAdjacentHTML(`afterbegin`, html);
    }
  });

btn.addEventListener("click", function () {
  const encodedParams = new URLSearchParams();
  encodedParams.append("q", textArea.value);
  encodedParams.append("target", select2.value);
  encodedParams.append("source", select.value);

  const options1 = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      "X-RapidAPI-Key": "d96eedff8amshdd02469b5410f36p180a4fjsn615e157008b4",
    },
    body: encodedParams,
  };

  fetch(
    "https://google-translate1.p.rapidapi.com/language/translate/v2",
    options1
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(select.value);
      console.log(textArea.value);
      console.log(response);
      textArea2.value = response.data.translations[0].translatedText;
    });
});
