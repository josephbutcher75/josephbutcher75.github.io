function handleThemeToggle() {
  // Check if jtd object exists (Just-the-Docs built-in)
  if (typeof jtd === 'undefined') {
    return;
  }
  
  // Get current theme from localStorage or default to light
  var currentTheme = localStorage.getItem('cs6035-theme') || 'light';
  
  // Toggle theme
  var newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  // Use Just-the-Docs built-in theme switching
  jtd.setTheme(newTheme);
  
  // Update button appearance
  var button = document.getElementById('theme-toggle');
  if (button) {
    if (newTheme === 'dark') {
      button.classList.add('dark-mode');
    } else {
      button.classList.remove('dark-mode');
    }
  }
  
  // Save preference
  localStorage.setItem('cs6035-theme', newTheme);
}

function initTheme() {
  // Check if jtd object exists
  if (typeof jtd === 'undefined') {
    // Retry after a short delay
    setTimeout(initTheme, 100);
    return;
  }
  
  var savedTheme = localStorage.getItem('cs6035-theme') || 'light';
  
  // Set theme using Just-the-Docs built-in function
  jtd.setTheme(savedTheme);
  
  // Update button appearance
  var button = document.getElementById('theme-toggle');
  if (button) {
    if (savedTheme === 'dark') {
      button.classList.add('dark-mode');
    } else {
      button.classList.remove('dark-mode');
    }
  }
}

function setupThemeToggle() {
  var button = document.getElementById('theme-toggle');
  if (button) {
    button.addEventListener('click', handleThemeToggle);
  }
}

// Initialize when page loads
function init() {
  setupThemeToggle();
  initTheme();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
} 