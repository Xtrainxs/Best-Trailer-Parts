// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handler
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const success = document.getElementById('form-success');
  success.style.display = 'block';
  event.target.reset();
});
