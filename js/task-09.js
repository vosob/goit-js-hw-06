function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  button: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
};

refs.button.addEventListener("click", onClick);

function onClick() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = getRandomHexColor();
}
