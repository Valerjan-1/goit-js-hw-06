const numberOfCategories = document.querySelector("#categories");
const categories = [...numberOfCategories.children];
console.log("Number of categories:", categories.length);

categories.forEach(function (category) {
  const categorie = category.children;
  console.log("Category:", categorie[0].textContent);
  console.log("Elements:", categorie[1].children.length);
});
