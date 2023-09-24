const rangeControl = document.querySelector(`#font-size-control`);
const spanText = document.querySelector(`#text`);

rangeControl.addEventListener(`input`, changeValue);
function changeValue(event) {
  spanText.style.fontSize = `${event.currentTarget.value}px`;
}
