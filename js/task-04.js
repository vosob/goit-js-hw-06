const refs = {
  decrement: document.querySelector("[data-action='decrement']"),
  increment: document.querySelector("[data-action='increment']"),
  spanValue: document.querySelector("#value"),
};

const counterValue = {
  value: 0,

  increment() {
    this.value += 1;
  },

  decrement() {
    this.value -= 1;
  },
};

refs.decrement.addEventListener("click", function () {
  counterValue.decrement();

  refs.spanValue.textContent = counterValue.value;
});

refs.increment.addEventListener("click", function () {
  counterValue.increment();

  refs.spanValue.textContent = counterValue.value;
});
