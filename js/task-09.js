const refs = {
body: document.querySelector(`body`),
btnChangeColor:document.querySelector(`.change-color`),
textChangeColor:document.querySelector(`.color`),
}

refs.btnChangeColor.addEventListener(`click`, getNewColor);

function getNewColor(event) {
  refs.body.style.backgroundColor =getRandomHexColor();
  refs.textChangeColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
