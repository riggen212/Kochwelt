let inputField = document.getElementById("inputAmount");    

function determinePortion() {
    const INGREDIENTS = document.getElementsByClassName("amountNumber");
    inputValue = +inputField.value;
    calculateIngredients(INGREDIENTS, inputValue);
}

function inputValidation() {
    inputValue = +inputField.value;
    let valueInvalid = inputValue <= 0 || inputValue > 10 || isNaN(inputValue) || inputValue == "";
    let error = document.getElementById("error");

    if (valueInvalid) {
        error.textContent = "Bitte geben Sie eine Zahl zwischen 1 und 10 ein. Die Rezeptangaben werden auf eine Menge von 4 Portionen gesetzt.";
        inputField.classList.add("borderError");
        setDefaultValues();
        return;
    }
    
    error.textContent = "";
    inputField.classList.remove("borderError");
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
