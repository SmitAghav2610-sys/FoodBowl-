function redirectToDetails(name, rating, imgSrc, offer) {
    // Use localStorage to pass data to the details page
    localStorage.setItem('restaurantName', name);
    localStorage.setItem('restaurantRating', rating);
    localStorage.setItem('restaurantImage', imgSrc);
    localStorage.setItem('restaurantOffer', offer);

    // Redirect to details page
    window.location.href = "details.html";
}


//script for menu slider circular menu 
// <!-- JavaScript for Slide Show -->


let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  // Hide all slides
  slides.forEach(slide => slide.style.display = 'none');

  // Increment the slideIndex
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0; // Go back to the first slide
  }

  // Display the current slide
  slides[slideIndex].style.display = 'block'; // Show current slide
  slides[slideIndex].classList.add('fade'); // Add fade effect

  // Call showSlides again after 3 seconds
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides(); // Start the slideshow

