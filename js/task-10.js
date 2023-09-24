function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('[type="number"]');
const btnCreate = document.querySelector("button[data-create]");
const dtnDestroy = document.querySelector("button[data-destroy]");
const divBoxes = document.getElementById("boxes");
// const divBoxesSizeWidth = (divBoxes.style.width = `30px`);
// const divBoxesSizeHeight = (divBoxes.style.height = `30px`);
// console.log(divBoxesSizeHeight);

btnCreate.addEventListener(`click`, createBoxes);
console.dir(inputNumber);
function createBoxes(amount) {
  if (
    Number(inputNumber.value) >= Number(inputNumber.min) ||
    Number(inputNumber.value) <= Number(inputNumber.max)
  ) {
    return alert(`Please enter number from 1 to 100`);
  }
}
