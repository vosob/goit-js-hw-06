const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  // * щоб сторінка не обновлялась після сабміту
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("предупреждением о том, что все поля должны быть заполнены");
  }

  console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();
}
