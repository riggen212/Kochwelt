let spanArray = [];
let spanElement = [];

function getSpanElements() {
    const TABLE = document.getElementById(`ingredients`);
    spanElement = TABLE.querySelectorAll(`span`);
    spanArray = Array.from(spanElement).map(span => span.textContent.trim());
} 

function calculateIngredients() {
    const factor = document.getElementById(`factor`).valueAsNumber;
    
    for (let i = 0; i < spanArray.length; i++) {
        let result = spanArray[i] * factor;
        spanElement[i].textContent = result;       
    }    
};

