const refs = {

  form: document.querySelector(`#controls`),
  inputValue: document.querySelector(`[type="number"]`),
  btnCreate: document.querySelector(`[data-create]`),
  btnDestroy: document.querySelector(`[data-destroy]`),
  boxes: document.querySelector(`#boxes`),
}

// console.log(refs.form);
// console.log(refs.inputValue);
// console.log(refs.btnCreate);
// console.log(refs.btnDestroy);
// console.log(refs.boxes);

refs.inputValue.addEventListener(`input`, amountElement);


// let amount = 4;
function amountElement(event) {
  if (event.currentTarget.value < 1 || event.currentTarget.value > 100) {
    alert`Введите число от 1 до 100`
    event.currentTarget.value = ``;
  }
  const amountOfElements = event.currentTarget.value;

 console.log(refs.btnCreate.setAttribute(`index`,Number(amountOfElements) )) ;
  
  // console.log(refs.btnCreate.attributes)
 
  // console.log(refs.btnCreate.attributes.index);
}
 refs.btnCreate.addEventListener(`click`, createBoxes);
// const elements = refs.inputValue.addEventListener(`input`, amountElement);
// console.log(elements);

function createBoxes(amount) {
  console.log(amount.currentTarget);
  let element = ``;
  for (let i = 1; i <= amount;i+=1)  {
   element += `<div></div>`;
  } boxes.append(element);
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
