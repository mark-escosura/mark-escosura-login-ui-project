// script.js

// Toggle the visibility of the issue box when the button is clicked
document.getElementById('toggle-widget').addEventListener('click', function () {
  const issueBox = document.querySelector('.issue-box');

  // Check current state and toggle visibility
  if (issueBox.style.display === 'block') {
    issueBox.style.display = 'none';
  } else {
    issueBox.style.display = 'block';
  }
});
