let defaultIngredients = [600, 1, 2, 1, 250, 100, 2, 1, 1];

function determinePortion() {
    let ingredients = document.getElementsByClassName("amountNumber");

    for (let i = 0; i < defaultIngredients.length; i++) {

        let inputValue = parseInt(document.getElementById("inputAmount").value);

        let newAmount = (defaultIngredients[i] / 4) * inputValue;

        ingredients[i].innerHTML = newAmount;
    }
}

