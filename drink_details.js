$(document).ready(function() {
    // Function to get the drink ID from the URL
    function getDrinkIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("id");
    }

    // Function to fetch and display drink details
    function fetchAndDisplayDrinkDetails(drinkId) {
        const apiUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${drinkId}`;

        // Make the API request
        $.get(apiUrl, function(data) {
            // Handle the API response and display the drink details on the page
            const drink = data.drinks[0];

            // Example: Display the drink name and instructions
            const drinkDetailsHtml = `
                <img src="${drink.strDrinkThumb}">
                <h2>${drink.strDrink}</h2>
                <div id="ingredients-list"></div>
                <p>${drink.strInstructions}</p>
                <!-- Add more HTML to display other drink details as needed -->
            `;

            $("#drink-details").html(drinkDetailsHtml);

            // Loop through ingredients and measures and add them to the ingredients list
            const ingredientsList = [];
            for (let i = 1; i <= 15; i++) {
                const ingredient = drink[`strIngredient${i}`];
                const measure = drink[`strMeasure${i}`];
                if (ingredient && measure) {
                    ingredientsList.push(`${ingredient} - ${measure}`);
                } else {
                    // If either ingredient or measure is empty, stop the loop
                    break;
                }
            }

            // Display the ingredients list
            const ingredientsListHtml = ingredientsList.map(item => `<p>${item}</p>`).join("");
            $("#ingredients-list").html(ingredientsListHtml);

        });
    }

    const drinkId = getDrinkIdFromUrl();
    if (drinkId) {
        fetchAndDisplayDrinkDetails(drinkId);
    }
});


/*


$(document).ready(function() {
    // Function to get the drink ID from the URL
    function getDrinkIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("id");
    }

    // Function to fetch and display drink details
    function fetchAndDisplayDrinkDetails(drinkId) {
        const apiUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${drinkId}`;

        // Make the API request
        $.get(apiUrl, function(data) {
            // Handle the API response and display the drink details on the page
            const drink = data.drinks[0];

            // Example: Display the drink name and instructions
            const drinkDetailsHtml = `
                <img src="${drink.strDrinkThumb}">
                <h2>${drink.strDrink}</h2>
                <div id="ingredients-list"></div>
                <p>${drink.strInstructions}</p>
                <!-- Add more HTML to display other drink details as needed -->
            `;

            $("#drink-details").html(drinkDetailsHtml);

            // Loop through ingredients and measures and add them to the ingredients list
            const ingredientsList = [];
            for (let i = 1; i <= 15; i++) {
                const ingredient = drink[`strIngredient${i}`];
                const measure = drink[`strMeasure${i}`];
                if (ingredient && measure) {
                    ingredientsList.push(`${ingredient} - ${measure}`);
                } else {
                    // If either ingredient or measure is empty, stop the loop
                    break;
                }
            }

            // Display the ingredients list
            const ingredientsListHtml = ingredientsList.map(item => `<p>${item}</p>`).join("");
            $("#ingredients-list").html(ingredientsListHtml);

        });
    }

    const drinkId = getDrinkIdFromUrl();
    if (drinkId) {
        fetchAndDisplayDrinkDetails(drinkId);
    }
});


ingredientsList = []

var 1 = 1;

while(drink.strIngredient[i] != "null"){
    ingredientList.append(drink.strIngredient[i])
}

for i in range(len(ingredientList)){
    <p>ingredientList[i]</p>
}

*/
