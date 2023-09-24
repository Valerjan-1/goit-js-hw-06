const numberOfCategories = document.querySelector("#categories");
const categories = [...numberOfCategories.children];
console.log("Number of categories:", categories.length);

categories.forEach(function (category) {
  // const categorie = category.children;
  console.log(`Category:`, category.firstElementChild.textContent);

  console.log("Elements:", category.lastElementChild.children.length);
});
