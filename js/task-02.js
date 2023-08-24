const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listItemEl = document.querySelector("#ingredients");
const result = ingredients.map((element) => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = element;
  return listEl;
});

listItemEl.append(...result);
