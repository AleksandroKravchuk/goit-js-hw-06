

const pearentCalk = document.querySelector('#counter');
const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');


const calkr = {
  value: 0,
  increment() {
    this.value -= 1;
  },
  dicrement() {
    this.value += 1;
  }
}

decrementBtn.addEventListener('click', function () {
  calkr.increment();
  counterValue.textContent = calkr.value;
})

incrementBtn.addEventListener('click', function () {
  calkr.dicrement();
  counterValue.textContent = calkr.value;
})



