const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const vegetableList = document.querySelector(`#ingredients`);

const makeVegatableList = options => {
  return options.map(option => {
  const vegatableEl = document.createElement(`li`);
  vegatableEl.classList.add(`item`);
  vegatableEl.textContent = option;
  return vegatableEl;
});
}

const elements = makeVegatableList(ingredients); 

vegetableList.append(...elements)
console.log(vegetableList)
