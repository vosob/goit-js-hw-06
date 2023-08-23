const refs = {
  inputRange: document.querySelector("#font-size-control"),
  changeSizeText: document.querySelector("#text"),
};

refs.inputRange.addEventListener("input", onchangeInputSize);

function onchangeInputSize(evt) {
  refs.changeSizeText.style.fontSize = `${evt.currentTarget.value}px`;
}
