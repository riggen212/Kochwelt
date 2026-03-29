const TABLE = document.getElementById(`ingredients`);
const SPANELEMENTLIST = TABLE.querySelectorAll(`span`);
let errormessage = document.getElementById(`errorMessage`);
let spanArray = [];

function getSpanElements() {
    spanArray = Array.from(SPANELEMENTLIST).map(span => span.textContent.trim());
}

function inputValidation() {
    const FACTOR = document.getElementById(`factor`).valueAsNumber;

    if (FACTOR < 1 || FACTOR > 15 || isNaN(FACTOR)) {
        errormessage.textContent = "Dies ist keine gültige Eingabe. Bitte geben Sie eine Zahl zwischen 1 und 15 ein.";
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

