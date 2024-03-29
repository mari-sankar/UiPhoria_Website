const images = document.querySelectorAll('.image-container img');

  images.forEach(image => {
    image.addEventListener('click', () => {
      // Remove active class from all images
      images.forEach(img => img.classList.remove('active'));
      // Add active class to clicked image
      image.classList.add('active');
      if (image.alt === 'Image 1') {
        image.classList.add('image-1');
      }
      // Display clicked image in the right container
      document.getElementById('displayed-image').innerHTML = image.outerHTML;
    });
  });