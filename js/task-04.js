const value = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener("click", onClickDecrementBtn);
incrementBtn.addEventListener("click", onClickIncrementBtn);

let counterValue = 0;
function onClickDecrementBtn() {
  value.textContent = counterValue -= 1;
}

function onClickIncrementBtn() {
  value.textContent = counterValue += 1;
}
