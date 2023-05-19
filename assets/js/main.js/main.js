document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.carousel-button.previous');
    const nextButton = document.querySelector('.carousel-button.next');
  
    let currentPosition = 0;
    const itemWidth = container.clientWidth;
  
    prevButton.addEventListener('click', () => {
      currentPosition += itemWidth;
      if (currentPosition > 0) {
        currentPosition = -(itemWidth * (container.children.length - 1));
      }
      container.style.transform = `translateX(${currentPosition}px)`;
    });
  
    nextButton.addEventListener('click', () => {
      currentPosition -= itemWidth;
      if (currentPosition < -(itemWidth * (container.children.length - 1))) {
        currentPosition = 0;
      }
      container.style.transform = `translateX(${currentPosition}px)`;
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
  
    galleryItems.forEach(function(item) {
      item.addEventListener('click', function() {
        // Get the source and alt attributes of the clicked image
        const src = item.src;
        const alt = item.alt;
  
        // Update the modal image with the clicked image
        modalImage.src = src;
        modalImage.alt = alt;
  
        // Display the modal
        modal.style.display = 'block';
      });
    });
  
    modal.addEventListener('click', function() {
      // Hide the modal when clicked outside the image
      modal.style.display = 'none';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });