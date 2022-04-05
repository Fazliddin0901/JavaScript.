function shifirla(str) {
  let shifr = [];
  let d = "";
  for (let i = 0; i < str.length; i++) {
    shifr.push(str.charCodeAt(i));
    d = d + shifr[i].toString(2);
  }
  document.querySelector(".result").textContent = d;
}

// shifirla("Fazliddin");

document.querySelector(".tug").addEventListener("click", function () {
  let inputValue = document.querySelector(".kirit").value;

  shifirla(inputValue);
});
