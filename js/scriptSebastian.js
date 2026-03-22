let allSpanElements = 0;

function getSpanElements() {
    const TABLE = document.getElementById(`ingredients`);
    const spanElement = TABLE.querySelectorAll(`span`);
    console.log(spanElement.length);
    allSpanElements = spanElement;
} 


function calculateIngredients() {
    allSpanElements.forEach((element, index) => {
        const NUMBER = document.getElementById(`calculated`).textContent;
        let factor = document.getElementById(`factor`).value;
        let result = NUMBER * factor;
        element.textContent = `${result}`;
        index++;
    })
};

