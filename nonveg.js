document.getElementById('search-bar').addEventListener('input', function () {
    const searchTerm = this.value.trim().toLowerCase();
    const allCategories = document.querySelectorAll('.category'); // Select all category sections
    const resultsContainer = document.getElementById('filtered-results-container');

    // Clear previous results
    resultsContainer.innerHTML = '';

    let hasResults = false;

    allCategories.forEach(category => {
        const categoryName = category.querySelector('h2')?.textContent.toLowerCase() || '';
        const allCards = category.querySelectorAll('.card');

        // Check if the category name matches the search term
        if (categoryName.includes(searchTerm)) {
            // Clone and display all cards in this category
            allCards.forEach(card => {
                const clonedCard = card.cloneNode(true);
                resultsContainer.appendChild(clonedCard);
                hasResults = true;
            });
        } else {
            // Check individual cards in the category for matches
            allCards.forEach(card => {
                const cardName = card.getAttribute('data-name')?.toLowerCase() || '';

                // Exact match for full product name
                const isExactMatch = cardName === searchTerm;

                // Partial match for product name
                const isPartialMatch = cardName.includes(searchTerm);

                if (isExactMatch || isPartialMatch) {
                    const clonedCard = card.cloneNode(true);
                    resultsContainer.appendChild(clonedCard);
                    hasResults = true;
                }
            });
        }
    });

    // Toggle visibility based on results
    resultsContainer.style.display = hasResults ? 'flex' : 'none';

    // Style results container to mimic original layout
    resultsContainer.style.flexWrap = 'wrap';
    resultsContainer.style.justifyContent = 'center';
});


// // script 2 for kart page

// function goToOrderPage(productName, image, price, restaurantName, restaurantRating) {
//     // Store product and restaurant details in localStorage
//     localStorage.setItem('productName', productName);
//     localStorage.setItem('productImage', image);
//     localStorage.setItem('productPrice', price);
//     localStorage.setItem('restaurantName', restaurantName);
//     localStorage.setItem('restaurantRating', restaurantRating);
//     window.location.href = "order-details.html"; // Redirect to order details page
// }


//new script 3

document.addEventListener("DOMContentLoaded", () => {
    const orderButtons = document.querySelectorAll(".buy-btn a");

    orderButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            // Prevent default navigation
            event.preventDefault();

            // Find the parent card of the clicked button
            const card = button.closest(".card");

            // Extract product details
            const productName = card.querySelector(".product-details h3").textContent.trim();
            const price = card.querySelector(".price").textContent.trim().replace(/\u20B9/g, ""); // Remove ₹ symbol
            const imageSrc = card.querySelector(".right img").src;
            const restaurant = card.querySelector(".restaurant-info .name").textContent.trim();
            const rating = card.querySelector(".restaurant-info .rating").textContent.trim();

            // Create a product object
            const product = {
                name: productName,
                price: price,
                image: imageSrc,
                restaurant: restaurant,
                rating: rating,
            };

            // Store product details in localStorage
            localStorage.setItem("selectedProduct", JSON.stringify(product));

            // Redirect to the cart page
            window.location.href = "mycart.html";
        });
    });
});


