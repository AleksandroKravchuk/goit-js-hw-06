const input = document.querySelector(`#name-input`);
const nameInput = document.querySelector(`#name-output`)
const name = nameInput.textContent;

input.addEventListener(`input`, onInputEnter);


function onInputEnter(even) {

    if (even.currentTarget.value !== ``) {
        nameInput.textContent = even.currentTarget.value;
    } else { nameInput.textContent = `${name}` }; 
}


