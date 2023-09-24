const formLogin = document.querySelector(`.login-form`);
formLogin.addEventListener(`submit`, hendlerSubmit);

function hendlerSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === `` || password.value === ``) {
    return alert(`All fields must be completed!`);
  }
  const userData = { email: email.value, password: password.value };
  console.dir(userData);
  event.currentTarget.reset();
}
