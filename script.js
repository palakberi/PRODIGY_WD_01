window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  console.log('scrollY:', window.scrollY);  // Add this line to log the scroll position
  if (window.scrollY > 50) {
      console.log('Adding scrolled class');  // Log when adding the class
      navbar.classList.add('scrolled');
  } else {
      console.log('Removing scrolled class');  // Log when removing the class
      navbar.classList.remove('scrolled');
  }
});
