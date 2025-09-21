document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = 'Thank you for contacting me!';
    this.reset();
});

// Responsive navbar toggle
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');
navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});