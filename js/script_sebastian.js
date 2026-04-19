const TABLE = document.getElementById(`ingredientsElements`);
const SPANELEMENTLIST = TABLE.querySelectorAll(`span`);
let errormessage = document.getElementById(`errorText`);
let spanArray = [];

function getSpanElements() {
    spanArray = Array.from(SPANELEMENTLIST).map(span => span.textContent.trim());
}

function inputValidation() {
    const FACTOR = document.getElementById(`numberInput`).valueAsNumber;

    if (FACTOR < 1 || FACTOR > 10 || isNaN(FACTOR)) {
        errormessage.textContent = "Bitte geben Sie eine Zahl zwischen 1 und 10 ein.";
    }
    else {
        errormessage.textContent = "";
        calculateIngredients(FACTOR);
    }
}

function calculateIngredients(factor) {  
    for (let i = 0; i < spanArray.length; i++) {
        let result = spanArray[i] * factor;
        SPANELEMENTLIST[i].textContent = result;       
    }    
};

