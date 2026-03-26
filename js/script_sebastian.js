const TABLE = document.getElementById(`ingredients`);
const SPANELEMENTLIST = TABLE.querySelectorAll(`span`)

let spanArray = [];

function getSpanElements() {
    spanArray = Array.from(SPANELEMENTLIST).map(span => span.textContent.trim());
} 

function calculateIngredients() {
    const FACTOR = document.getElementById(`factor`).valueAsNumber;   
    for (let i = 0; i < spanArray.length; i++) {
        let result = spanArray[i] * FACTOR;
        SPANELEMENTLIST[i].textContent = result;       
    }    
};

