const input = document.querySelector(`#name-input`);
const nameInput = document.querySelector(`#name-output`)

input.addEventListener(`input`, onInputFocus);


function onInputFocus(even) {

    nameInput.textContent = even.currentTarget.value;

}
