let inputField = document.getElementById("inputAmount"); 
const INGREDIENTS = document.getElementsByClassName("amountNumber");
const calculationButton = document.getElementById("calculationButton");
let error = document.getElementById("error");

let inputValue = 0;

inputField.addEventListener("change", () => {
    inputValue = inputField.value;
    inputValidation();

    if(inputValue <= 0 || inputValue > 10) {
        setDefaultValues();
    }
}) 

function inputValidation() {
    inputValue = +inputField.value;
    let valueInvalid = inputValue <= 0 || inputValue > 10;

    if (valueInvalid) {
        const errorMessage = "Bitte geben Sie eine Zahl zwischen 1 und 10 ein. Die Rezeptangaben werden auf eine Menge von 4 Portionen gesetzt.";
        error.textContent = errorMessage;
        error.setAttribute("aria-hidden", "false");
        error.setAttribute("aria-labelledby", errorMessage);
        inputField.value = "";
        inputField.classList.add("borderError");
        
        return;
    }

    error.textContent = "";
    error.setAttribute("aria-hidden", "true");
    error.removeAttribute("aria-labelledby");
    inputField.classList.remove("borderError");

}

function calculateIngredients() {
    inputValue = +inputField.value;

    if(inputValue > 0 && inputValue <= 10) {
        for (let i = 0; i < INGREDIENTS.length; i++) {
            let newAmount = (INGREDIENTS[i].getAttribute("data-default") / 4) * inputValue;
            INGREDIENTS[i].innerHTML = newAmount;
        } 
    }
}

function setDefaultValues() {
    for (let i = 0; i < INGREDIENTS.length; i++) {
        INGREDIENTS[i].innerHTML = INGREDIENTS[i].getAttribute("data-default");
    }   
}
