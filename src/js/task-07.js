const inputFontSize = document.querySelector(`#font-size-control`);
const textSize = document.querySelector(`#text`);

inputFontSize.addEventListener(`input`,changeFontSize);

function changeFontSize(event) {
    let valueSze = event.currentTarget.value;
    textSize.style.fontSize = `${valueSze}px`;
}