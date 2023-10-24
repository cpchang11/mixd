$(document).ready(function() {
    // Function to search for a cocktail by name
    function searchCocktailByName(cocktailName) {
        const apiUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${cocktailName}`;
        
        // Make the API request
        $.get(apiUrl, function(data) {
            // Handle the API response by redirecting to the drink details page
            redirectToDrinkDetails(data);
        });
    }

    // Function to search for a cocktail by ingredient
    function searchCocktailByIngredient(cocktailIngredient) {
        const ingredientUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${cocktailIngredient}`;

        // Make an API request to search by ingredient
            $.get(ingredientUrl, function(data) {
                // Extract and display drink names
                redirectToDrinkDetails(data)
                // const drinks = data.drinks;
            //     if (drinks) {
            //         const drinkNames = drinks.map(drink => drink.strDrink);
            //         const drinkList = drinkNames.join(', ');
            //         alert(`Drinks with ${userSearchTerm}: ${drinkList}`);
            //         redirectToDrinkDetailsPage(drinkList);
            //     } else {
            //         alert(`No drinks found with ${userSearchTerm}.`);
            //     }
            });
    }

    // Function to redirect to the drink details page
    function redirectToDrinkDetails(data) {
        // Encode the drink details as a JSON string and pass it as a URL parameter
        const drinkDetails = JSON.stringify(data);
        window.location.href = `drink_details.html?details=${encodeURIComponent(drinkDetails)}`;
    }

    // Search button click event
    $(".searchButton").click(function() {
        const cocktailName = $(".searchInput").val();
        searchCocktailByName(cocktailName);
    });

    // Listen for Enter key press on the input field
    $(".searchInput").keypress(function(event) {
        if (event.keyCode === 13) { // 13 is the key code for Enter key
            const cocktailName = $(this).val();
            searchCocktailByName(cocktailName);
        }
    });

    // Search button click event for ingredients
    $(".searchButton2").click(function() {
        const cocktailIngredient = $(".searchInput2").val();
        searchCocktailByIngredient(cocktailIngredient)
    });

    // Listen for Enter key press on the input field for ingredients
    $(".searchInput2").keypress(function(event) {
        if (event.keyCode === 13) { // Check for Enter key press
            const cocktailIngredient = $(this).val(); // Get the user's search term
            searchCocktailByIngredient(cocktailIngredient)
        }
    });
});


/*


$(document).ready(function() {
        // Function to search for a cocktail by name and redirect to drink details
    function searchCocktailByName(cocktailName) {
        const apiUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${cocktailName}`;
        
        // Make the API request
        $.get(apiUrl, function(data) {
            const drinkDetails = data.drinks[0]; // Assuming the first result contains the drink details
            if (drinkDetails) {
                redirectToDrinkDetails(drinkDetails);
            } else {
                alert(`No drink details found for ${cocktailName}`);
            }
        });
    }


    // Function to redirect to the drink details page
    function redirectToDrinkDetails(data) {
        // Encode the drink details as a JSON string and pass it as a URL parameter
        const drinkDetails = JSON.stringify(data);
        window.location.href = `drink_details.html?details=${encodeURIComponent(drinkDetails)}`;
    }

    // Search button click event
    $(".searchButton").click(function() {
        const cocktailName = $(".searchInput").val();
        searchCocktailByName(cocktailName);
    });

    // Listen for Enter key press on the input field
    $(".searchInput").keypress(function(event) {
        if (event.keyCode === 13) { // 13 is the key code for Enter key
            const cocktailName = $(this).val();
            searchCocktailByName(cocktailName);
        }
    });

    // New code to search by ingredient and display drink names
    $(".searchInput2").keypress(function(event) {
        if (event.keyCode === 13) { // Check for Enter key press
            const userSearchTerm = $(this).val(); // Get the user's search term
            const ingredientUrl = `https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${userSearchTerm}`;

            // Make an API request to search by ingredient
            $.get(ingredientUrl, function(data) {
                // Extract and display drink names
                const drinks = data.drinks;
                if (drinks) {
                    const drinkNames = drinks.map(drink => drink.strDrink);
                    const drinkList = drinkNames.join(', ');
                    alert(`Drinks with ${userSearchTerm}: ${drinkList}`);
                    redirectToDrinkDetailsPage(drinkList);
                } else {
                    alert(`No drinks found with ${userSearchTerm}.`);
                }
            });
        }
    });

    // Function to search for drinks by ingredient and redirect to drink details
    $('.searchButton2').click(function() {
        const userSearchTerm = $('.searchInput2').val();
        $.ajax({
            url: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php',
            data: { i: userSearchTerm },
            success: function(response) {
                const drinkList = response.drinks;
                if (drinkList) {
                    // Redirect to drink details page with the list of drinks
                    redirectToDrinkDetailsPage(drinkList);
                } else {
                    alert('No matching drinks found.');
                }
            },
        });
    });

    // Function to redirect to drink details page with the list of drinks
    function redirectToDrinkDetailsPage(drinkList) {
        const drinkListJson = JSON.stringify(drinkList);
        window.location.href = 'drink_details.html?details=' + encodeURIComponent(drinkListJson);
    }


});

*/