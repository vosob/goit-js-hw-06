const quantityOfCategories = document.querySelector("#categories");
console.log("Number of categories: ", quantityOfCategories.children.length);

const nameOfCategories = document.querySelectorAll(".item");

nameOfCategories.forEach((item) => {
  const children = item.children;
  console.log("Category: ", children[0].textContent);
  console.log("Elements: ", children[1].children.length);
});
