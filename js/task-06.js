const validInput = document.querySelector(`#validation-input`);
validInput.addEventListener(`blur`, handlerGreeting);

function handlerGreeting(event) {
  if (
    event.currentTarget.value.length < validInput.getAttribute(`data-length`)
  ) {
    validInput.classList.add(`invalid`);
  } else {
    event.currentTarget.value.length >= validInput.getAttribute(`data-length`);
    {
      validInput.classList.remove(`invalid`);
      validInput.classList.add(`valid`);
    }
  }
}
