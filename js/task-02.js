const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listItemEl = document.querySelector("#ingredients");

ingredients.forEach((element) => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = element;
  listItemEl.append(listEl);
});
