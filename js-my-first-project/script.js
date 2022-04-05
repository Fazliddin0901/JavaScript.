document.querySelector(".jarayon").textContent = "Son kiriting";

let randomNum = Math.trunc(Math.random() * 20) + 1;

// document.querySelector(".soroq").textContent = randomNum;

let kiruvchiMalumot;
let ball = 20;

// document.querySelector(".cont-kub-left").value = randomNum;
document.querySelector(".shirish").addEventListener("click", function () {
  kiruvchiMalumot = document.querySelector(".cont-kub-left").value;

  // document.querySelector(".soroq").textContent = kiruvchiMalumot;

  if (kiruvchiMalumot < randomNum) {
    document.querySelector(".jarayon").textContent =
      "Siz kichik son kiritdingiz";
    ball = ball - 1;
    document.querySelector(".balll").textContent = ball;
  } else if (kiruvchiMalumot > randomNum) {
    document.querySelector(".jarayon").textContent =
      "Siz katta son kiritdingiz";
    ball = ball - 1;
    document.querySelector(".balll").textContent = ball;
  } else {
    document.querySelector(".balll").textContent = ball;
    document.querySelector(".jarayon").textContent = "Siz to`g`ri topdingiz";
    document.querySelector("body").style.backgroundColor = "#60b070";
  }
  if (ball === 0) {
    document.querySelector("body").style.backgroundColor = "#911A00";
    document.querySelector(".logo").textContent = "Siz to`g`ri yutqazdingiz";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    kiruvchiMalumot = document.querySelector(".cont-kub-left").value;
    // document.querySelector(".soroq").textContent = kiruvchiMalumot;
    if (kiruvchiMalumot < randomNum) {
      document.querySelector(".jarayon").textContent =
        "Siz kichik son kiritdingiz";
      ball = ball - 1;
      document.querySelector(".balll").textContent = ball;
    } else if (kiruvchiMalumot > randomNum) {
      document.querySelector(".jarayon").textContent =
        "Siz katta son kiritdingiz";
      ball = ball - 1;

      document.querySelector(".balll").textContent = ball;
    } else {
      document.querySelector(".balll").textContent = ball;
      document.querySelector("body").style.backgroundColor = "#60b070";
      document.querySelector(".jarayon").textContent = "Siz to`g`ri topdingiz";
      document.querySelector(".logo").textContent = "Siz to`g`ri yutdingiz";
      document.querySelector(".soroq").textContent = kiruvchiMalumot;
      document.querySelector(".soroq").style.padding = "5rem";
      document.querySelector(".soroq").style.borderRadius = "50%";
    }
    if (ball === 0) {
      document.querySelector("body").style.backgroundColor = "#911A00";
      document.querySelector(".logo").textContent = "Siz to`g`ri yutqazdingiz";
    }
  }
});

document.querySelector(".qayta").addEventListener("click", function () {
  // document.querySelector(".soroq").textContent = kiruvchiMalumot;
  document.querySelector("body").style.backgroundColor = "rgb(24, 23, 23)";
  document.querySelector(".balll").textContent = "0";
  ball = 20;
  document.querySelector(".balll").textContent = ball;
  document.querySelector(".soroq").style.borderRadius = "0%";
  document.querySelector(".soroq").textContent = "?";
});
