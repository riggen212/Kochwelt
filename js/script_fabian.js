function determinePortion() {
    let inputField = document.getElementById("inputAmount");
    let inputValue = parseInt(inputField.value);
   
    inputValidation(inputValue, inputField);
}

function inputValidation(inputValue, inputField) {
    let valueInvalid = inputValue <= 0 || inputValue > 10 || isNaN(inputValue);
    let error = document.getElementById("error");

    if (valueInvalid) {
        error.textContent = "Bitte geben Sie eine Zahl zwischen 1 und 10 ein.";
        inputField.classList.add("borderError");
        setDefaultValues();
        return;
    } else {
        error.textContent = "";
        inputField.classList.remove("borderError");
        const INGREDIENTS = document.getElementsByClassName("amountNumber");
        calculateIngredients(INGREDIENTS, inputValue);
    }
}

function calculateIngredients(INGREDIENTS, inputValue) {
    for (let i = 0; i < INGREDIENTS.length; i++) {
        let newAmount = (INGREDIENTS[i].getAttribute("data-default") / 4) * inputValue;
        INGREDIENTS[i].innerHTML = newAmount;
    } 
}

function setDefaultValues() {
    const INGREDIENTS = document.getElementsByClassName("amountNumber");
    for (let i = 0; i < INGREDIENTS.length; i++) {
        INGREDIENTS[i].innerHTML = INGREDIENTS[i].getAttribute("data-default");
    }
}
