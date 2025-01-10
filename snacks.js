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
