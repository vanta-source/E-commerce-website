//Access To HTMLCollection
const dots = document.getElementsByClassName("slider_navigators");
const slides = document.getElementsByClassName("img_S");
const slideElements = document.getElementsByClassName("img_S");
const imageContainer = document.querySelector(".image_container");
const indicator = document.querySelector(".indicator");
let originalOrder = Array.from(slides); // Store the original order of images
const slideElementArr = [...slideElements];
console.log(slideElements);
let activeDotIndex = 0;

// Function to handle dot click
Array.from(dots).forEach((dot, index) => {
  dot.addEventListener("click", function () {
    clearActiveDots(); // Call the function - Clear previously active dot - with this here when we come back to the function the previous dot will be deactivated
    dot.classList.add("active"); // Set clicked dot as active
    activeDotIndex = index; // Store Data for change image based on the Dot index
    changeImg(slides, activeDotIndex); // Call the function of changing image
  });
});

// Clear the active class from all dots
function clearActiveDots() {
  Array.from(dots).forEach((dot) => dot.classList.remove("active"));
}

// Set the first dot as active by default
dots[0].classList.add("active");

function changeImg(slideElementArr, index) {
  if (index === 0) {
    // Reset the image order to the original
    resetImages();
  } else {
    // Swap the first image with the selected image
    const firstImage = slides[0]; // First image in the collection
    const selectedImage = slides[index]; // The image to swap with the first one

    imageContainer.insertBefore(selectedImage, firstImage); // Swap selected image to the first position
    imageContainer.insertBefore(firstImage, slides[index + 1]); // Move first image to selected image's original position

    // Add 'activeSlider' class to the selected image and remove it from the previously active image
    clearActiveImages(); // Clear the active class from all images
    selectedImage.classList.add("activeSlider", "more"); // Add active class to the selected image
  }
}

// Function to reset the images to their original order
function resetImages() {
  originalOrder.forEach((image) => {
    imageContainer.appendChild(image); // Append images in their original order
  });

  clearActiveImages(); // Clear the active class from all images
  slides[0].classList.add("activeSlider"); // Add the active class back to the first image
}

// Function to clear the 'active-image' class from all images
function clearActiveImages() {
  Array.from(slides).forEach((image) => image.classList.remove("activeSlider"));
}

// Add 'active-image' class to the first image on page load
window.onload = function () {
  slides[0].classList.add("activeSlider"); // Style the first image by default
};

// Add functionality for the indicator button (next button)
indicator.addEventListener("click", function () {
  activeDotIndex += 1; // Increment the index to move to the next image

  // If the index goes beyond the number of images, reset to the beginning
  if (activeDotIndex >= slides.length) {
    activeDotIndex = 0;
    resetImages(); // Reset the images to their original order
  } else {
    changeImg(slideElementArr, activeDotIndex); // Swap the next image with the first one
  }

  // Update the dot navigation to reflect the current active dot
  clearActiveDots();
  dots[activeDotIndex].classList.add("active");
});

//validate Email
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("emailFeedback");

  if (validateEmail(emailInput.value)) {
    errorMessage.textContent = ""; // Clear any previous error message

    // You can add your form submission logic here
  } else {
    errorMessage.textContent = "Please enter a valid email address.";
  }
});
