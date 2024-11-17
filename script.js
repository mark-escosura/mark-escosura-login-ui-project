// script.js
const issueBox = document.querySelector('.issue-box');

// Toggle the visibility of the issue box when the button is clicked
document.getElementById('toggle-widget').addEventListener('click', function () {
  // Check current state and toggle visibility
  if (issueBox.style.display === 'block') {
    issueBox.style.display = 'none';
  } else {
    issueBox.style.display = 'block';
  }
});

// Handle the issue form submission
document
  .getElementById('issue-form')
  .addEventListener('submit', async function (e) {
    e.preventDefault(); // this prevents the form from reloading the page

    // Lets capture the data coming in..
    const name = document.getElementById('issue-name').value;
    const email = document.getElementById('issue-email').value;
    const description = document.getElementById('issue-description').value;

    try {
      // Lets send data to the server using axios
      const response = await axios.post(
        'http://localhost:3000/api/create-issue',
        {
          title: `Issue submitted by ${name}`,
          body: `Name: ${name}\nEmail: ${email}\nDescription: ${description}`,
        }
      );

      // Handle the response from the server
      if (response.status === 201) {
        const confirmationMessage = document.getElementById('confirmation');
        confirmationMessage.style.display = 'block';
        document.getElementById('issue-form').reset();

        setTimeout(() => {
          confirmationMessage.style.display = 'none';
          issueBox.style.display = 'none';
        }, 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error connecting to the server.');
    }
  });
