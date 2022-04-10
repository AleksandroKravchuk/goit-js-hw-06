const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const vegetableList = document.querySelector(`#ingredients`);

function addVegetables(items,inx) {
  for (let item of items) {

item= document.createElement(`li`);
item.classList.add(`item`);
    item.textContent = ingredients[inx];
    return item;
    
}
  }
vegetableList.append( addVegetables(ingredients,0),addVegetables(ingredients,1),addVegetables(ingredients,2),addVegetables(ingredients,3),addVegetables(ingredients,4),addVegetables(ingredients,5));

console.log(vegetableList)