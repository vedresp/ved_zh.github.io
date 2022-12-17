window.addEventListener('load', function() {
  // Get all of the images
  const images = document.querySelectorAll('img');

  // Add an event listener to each image
  images.forEach(function(image) {
    image.addEventListener('click', function() {
      // Create a copy of the image
      const imageCopy = image.cloneNode(true);

      // Insert the copy after the original image
      image.parentNode.insertBefore(imageCopy, image.nextSibling);

      // Toggle the 'zoom' class on the copy
      imageCopy.classList.toggle('zoom');

      // Add a new event listener to the copy
      imageCopy.addEventListener('click', function() {
        // When the copy is clicked, remove it from the document
        this.parentNode.removeChild(this);
      });
    });
  });
});
