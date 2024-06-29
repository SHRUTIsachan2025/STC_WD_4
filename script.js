// Change navigation style on scroll
window.addEventListener('scroll', function() {
  var nav = document.querySelector('nav');
  nav.classList.toggle('scrolling-active', window.scrollY > 0);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
