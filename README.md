# Login UI with Flexbox

## Objective

Create a visually appealing login user interface (UI) using HTML and CSS with Flexbox layout. The focus of this assignment is on styling and layout, so the UI does not need to be functional.

Additionally, an Issue Submission Widget has been added as a secondary feature, demonstrating API integration and backend functionality.

<hr>

## Project Overview

### Primary Feature: Login UI

This project implements a simple login UI using HTML and CSS with a Flexbox layout. The main features are:

1. Login Box Styling:

   - The login box has a minimum size and is responsive.

   - Box-shadow and rounded corners for a clean, modern look.

   - Flexbox used for centering and aligning elements.

2. Form Inputs:

   - Includes input fields for Username and Password with placeholder text.

   - Password field hides text input as asterisks or circles.

3. Submit Button:

   - A styled button (e.g., “Log In”) matches the overall UI design.

### Secondary Feature: Issue Submission Widget

An Issue Submission Widget has been integrated, allowing users to submit issues directly to a GitHub repository via the GitHub API.

1.  Form-Based Issue Creation:

    - Users can toggle the issue submission form.

    - Input fields for Name, Email, and Description of the issue.

2.  Github Integration:

    - Submits the issues to a GitHub repository specified in the .env file using a secure backend.

3.  Confirmation and Error Handling:

        - Displays confirmation for successful submissions.

        - Provides error messages and console logs for debugging in case of failure.

    <hr>

## Repository Setup

    1.	Clone the Repository:

`git clone https://github.com/mark-escosura/mark-escosura-login-ui-project.git`

`cd mark-escosura-login-ui-project`

    2.	Install Dependencies:

This project uses Jest for testing, Chokidar for watch mode, and Express for backend integration. To install the required dependencies, run:

`npm install`

    3.	Running Tests:

To check if all tests are passing, run the following command:

`npm test`

This will run the test suite using Jest, and it will provide feedback on whether the test cases pass. Each test is designed to verify that the login UI follows the styling and layout guidelines in the assignment.

    4.	Watch Mode (Using Chokidar):

This project is set up to watch for changes in the HTML and CSS files and automatically run tests every time you save a file. To enable this, run:

`npm run watch`

This command uses Chokidar to monitor the index.html and index.css files. When a file is modified, Jest tests will automatically run.

    5.	Exiting Watch Mode:

To stop the watch mode, press CTRL + C in your terminal. This will terminate the watch process, and you can return to normal terminal usage.

    6. Live Server:

To view the website in your browser with live reload functionality, you can use Live Server (if you have it installed in your VS Code).

### If you already have Live Server installed:

1. Open the project in Visual Studio Code.
2. Right-click on the index.html file.
3. Select “Open with Live Server”.
4. If you don’t have Live Server installed:

### You can install it easily through Visual Studio Code by following these steps:

1. Open Visual Studio Code.
2. Go to the Extensions tab (you can find it in the left sidebar or press Ctrl+Shift+X).
3. Search for “Live Server”.
4. Click Install on the Live Server extension by Ritwick Dey.

### Alternatively, you can install Live Server globally on your system by running:

`npm install -g live-server`

After installation, you can run the following command in your terminal to start the live server:

`live-server`

This will automatically open the website in your default browser, and you will be able to view and interact with the login UI. Any changes you make to the HTML or CSS files will be reflected in the browser in real time.

<hr>

## How to Use the Features

### Using the Login UI:

    1.	Open the index.html file in your browser or via a live server.
    2.	Enter your Username and Password in the login form.
    3.	Use this template as a starting point for authentication features.

### Using the Issue Submission Widget:

    1.	Toggle the Widget:
        • Click the “Open Issue Widget” button to reveal the form.
    2.	Fill Out the Form:
        • Provide your Name, Email, and a detailed Description of the issue.
        • Click Submit to send the issue to the GitHub repository.
    3.	Backend Integration:
        • Ensure the server is running (npm run server) for this feature.
        • The backend securely handles GitHub API requests.
    4.	Error Handling:
        • Any issues with submission will display an error message in the browser and log details to the console.

## Summary of Tests

The following features are validated with the tests:

1. Login Box Styling:

   • The login box should have a minimum size.

   • Box-shadow and border-radius properties are correctly applied.

   • Flexbox properties used for centering and responsiveness.

2. Form Inputs:

   • Includes input fields for Username and Password with placeholder text.

   • Password field hides text input as asterisks or circles.

3. Submit Button:

   • A styled button (e.g., “Log In”) matches the overall UI design.

<hr>

### TODO: Authentication Enhancement (Upcoming)

A future enhancement will allow users to authenticate via GitHub OAuth and submit issues under their own GitHub account.

### Key Benefits of the Issue Widget:

    •   Token Security: The backend securely stores the GitHub token, ensuring it’s never exposed to the client.
    •	Data Validation: The server validates and sanitizes data before interacting with GitHub.
    •	Extensibility: Backend logic can be extended without changing the frontend code.

Feel free to clone, modify, and extend this project! Let me know if you need any further updates or enhancements to this README.
