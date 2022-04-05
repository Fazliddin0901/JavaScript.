let convas = document.getElementById("game");
let context = convas.getContext("2d");

let grid = 16;
let count = 0;

let snace = {
  x: 160,
  y: 160,
  dx: 0,
  dy: 0,
  cells: [],
  maxCells: 4,
};
let apple = {
  x: 320,
  y: 320,
};
const gulpSound = new Audio("gulp.mp3");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - mix)) + min;
}
function loop() {
  requestAnimationFrame(loop);

  if (++count < 4) {
    return;
  }
}

count = 0;
context.clearRect(0, 0, convas.clientWidth, convas.height);

snace.x += snace.dx;
snace.y += snace.dy;

if (snace.x < 0) {
  snace.x = convas.width - grid;
} else if (snace.x >= convas.width) {
  snace.x = 0;
}
if (snace.y < 0) {
  snace.y = convas.height - grid;
} else if (snace.y >= convas.height) {
  snace.y = 0;
}

snace.cells.unshift({ x: snace.x, y: snace.y });

if (snace.cells.length > snace.maxCells) {
  snace.cells.pop();
}
context.fillStyle = "red";
context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

context.fillStyle = "yellow";
snace.cells.forEach(function (cell, index) {
  context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

  if (cell.x === apple.x && cell.y === apple.y) {
    snace.maxCells++;
    apple.x = getRandomInt(0, 25) * grid;
    apple.y = getRandomInt(0, 25) * grid;
    gulpSound.play();
  }

  for (let i = index + 1; i < snace.cells.length; i++) {}
  if (cell.x === snace.cells[i].x && cell.y === snace.cells[i].y) {
    snace.x = 160;
    snace.y = 160;
    snace.cells = [];
    snace.maxCells = 4;
    snace.dx = grid;
    snace.dy = 0;

    apple.x = getRandomInt(0, 25) * grid;
    apple.y = getRandomInt(0, 25) * grid;
  }
});

document.addEventListener("keydown", function (e) {
  if (e.which === 37 && snace.dx === 0) {
    snace.dx = -grid;
    snace.dy = 0;
  } else if (e.which === 38 && snace.dy === 0) {
    snace.dy = -grid;
    snace.dx = 0;
  } else if (e.which === 39 && snace.dx === 0) {
    snace.dx = grid;
    snace.dy = 0;
  } else if (e.which === 40 && snace.dy === 0) {
    snace.dy = grid;
    snace.dx = 0;
  }
});
requestAnimationFrame(loop);
