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

  // Toggle dropdown menu
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  // Function to handle "Contact Issuer" click
  function contactIssuer() {
    alert("Contact Issuer clicked!");
  }
  
  // Function to handle "More Information" click
  function showMoreInformation() {
    alert("More Information clicked!");
  }
  