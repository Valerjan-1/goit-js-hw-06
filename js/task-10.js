function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('[type="number"]');
const btnCreate = document.querySelector("button[data-create]");
const dtnDestroy = document.querySelector("button[data-destroy]");
const divBoxes = document.getElementById("boxes");
