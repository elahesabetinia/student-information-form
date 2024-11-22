document.addEventListener('DOMContentLoaded', function () {
  // Header shrink effect
  const headerTitle = document.getElementById('header-title');
  
  // Set the initial large size
  headerTitle.style.fontSize = '4em';
  headerTitle.style.textShadow = '0 0 30px rgba(255, 255, 255, 0.8)';
  
  // Shrink header after a delay
  setTimeout(() => {
      headerTitle.style.transition = 'font-size 1s ease-out, text-shadow 1s ease-out';
      headerTitle.style.fontSize = '2.5em';
      headerTitle.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
  }, 2000); // Shrink after 2 seconds
  
  // Additional animations can be added here for other elements if desired
});        