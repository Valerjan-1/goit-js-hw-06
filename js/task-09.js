function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChange = document.querySelector(`.change-color`);
const bodyChange = document.querySelector(`body`);
const spanColor = document.querySelector(`span.color`);

colorChange.addEventListener(`click`, bodyRandomColor);

function bodyRandomColor() {
  let colors = getRandomHexColor();
  bodyChange.style.backgroundColor = colors;
  spanColor.textContent = colors;
}
