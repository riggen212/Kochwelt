const baseAmounts = {
    'amount-meat': 500,
    'amount-onion': 1,
    'amount-garlic': 2,
    'amount-tomatoPaste': 1,
    'amount-tomatoes': 1
};


function updateQuantities() {
    // Portions-Input aus deinem HTML holen
    const inputField = document.getElementById('portionInput');
    const portions = parseInt(inputField.value);


    if (isNaN(portions) || portions < 1) {
        return; 
    }

    const factor = portions / 4;

    for (const id in baseAmounts) {
        const element = document.getElementById(id);
        if (element) {
            let newValue = baseAmounts[id] * factor;


            element.innerText = Number.isInteger(newValue)
                ? newValue
                : newValue.toFixed(1).replace('.', ',');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('portionInput');
    const button = document.getElementById('calcBtn');
    
    if (button) {
        button.addEventListener('click', updateQuantities);
    }
    
    if (inputField) {
        inputField.addEventListener('input', updateQuantities);
        
        inputField.addEventListener('change', updateQuantities);
    }
});
