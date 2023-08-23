const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", onInputBlur);

function onInputBlur(et) {
  if (refs.input.value.length === Number(refs.input.dataset.length)) {
    refs.input.classList.add("valid");
    refs.input.classList.remove("invalid");
  } else {
    refs.input.classList.remove("valid");
    refs.input.classList.add("invalid");
  }
}
