// Define an array of image URLs
const images = [
  'https://photos.google.com/photo/AF1QipM6305s2_NTFNaz7BlzB0oWkAdWN4_VqM9Euy0w'
];

let currentIndex = 0;
const imageElement = document.getElementById('image');
const imageContainer = document.getElementById('imageContainer');
const passwordForm = document.getElementById('passwordForm');

function changeImage() {
  imageElement.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

// Initial call to changeImage function
changeImage();

// Set interval to change image every 3 seconds (3000 milliseconds)
setInterval(changeImage, 0100);

// Function to check password
function checkPassword() {
  const passwordInput = document.getElementById('password');
  const password = passwordInput.value;

  if (password === '580777') {
    // Show image container if password is correct
    imageContainer.style.display = 'block';
    // Clear password input
    passwordInput.value = '';
    // Hide password form
    passwordForm.style.display = 'none';
  } else {
    alert('Incorrect password. Please try again.');
    // Clear password input
    passwordInput.value = '';
  }
}
