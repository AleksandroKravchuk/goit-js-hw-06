const refs = {
  inputValue: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}


refs.inputValue.addEventListener('input', amountElement);


function amountElement(event) {
  if (event.currentTarget.value < 1 || event.currentTarget.value > 100) {
    event.currentTarget.value = '';
    alert`Введите число от 1 до 100`;
    
  }
  const amountOfElements = event.currentTarget.value;

  refs.btnCreate.setAttribute('index', amountOfElements);
}


refs.btnCreate.addEventListener('click', createBoxes);

const changeSizes = {
  value: 20,
  addValue() {
    this.value += 10;
  },
  startValue() {
    this.value = 20;
  },

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function createBoxes(amount) {
  amount = refs.btnCreate.getAttribute('index');
  let element = '';
  for (let i = 1; i <= amount; i += 1) {
    changeSizes.addValue();
    element = document.createElement('div');
    element.style.width = `${changeSizes.value}px`;
    element.style.height = `${changeSizes.value}px`;
    element.style.backgroundColor = getRandomHexColor();


    refs.boxes.append(element);

  }
}


refs.btnDestroy.addEventListener('click', destroyBoxes);


function destroyBoxes(event) {
  refs.boxes.innerHTML = ``;
  changeSizes.startValue();
  refs.inputValue.value = ``;
}






