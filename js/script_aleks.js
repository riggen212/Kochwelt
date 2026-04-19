function formatFraction(value) {
    if (Number.isInteger(value)) return value;

    if (value === 0.25) return "1/4";
    if (value === 0.5) return "1/2";
    if (value === 0.75) return "3/4";

    return value.toFixed(2);
}

function calculate() {
    let portionInput = parseInt(document.getElementById('portion').value);
    let errorMessage = document.getElementById('error');
    let inputField = document.getElementById('portion');
    if (isNaN(portionInput) || portionInput < 1 || portionInput > 4) {
        errorMessage.style.display = "block";
        inputField.classList.add("borderError");
        return;
    }

    errorMessage.style.display = "none";
    document.getElementById('portion').value = portionInput;
    inputField.classList.remove("borderError");
    let basePortion = 4;
    let factor = portionInput / basePortion;

    document.getElementById('spaghetti').innerText = Math.round(400 * factor);
    document.getElementById('meat').innerText = Math.round(400 * factor);

    let onionValue = 1 * factor;
    document.getElementById('onion').innerText = formatFraction(onionValue);

    document.getElementById('garlic').innerText = Math.round(2 * factor);
    document.getElementById('tomato').innerText = Math.round(400 * factor);
    document.getElementById('oil').innerText = Math.round(2 * factor);
}