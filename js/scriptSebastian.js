let allSpanElements = 0;

function getSpanElements() {
    const TABLE = document.getElementById(`ingredients`);
    const spanElement = TABLE.querySelectorAll(`span`);
    console.log(spanElement.length);
    allSpanElements = spanElement;
} 


function calculateIngredients() {
    console.log(allSpanElements);
    
    const NUMBER = document.getElementById(`calculated`).textContent;
    console.log(NUMBER);
    let factor = document.getElementById(`factor`).value;
    console.log(factor);
    let result = NUMBER * factor;
    console.log(result);
    
    document.getElementById("calculated").textContent = `${result}`;
};

