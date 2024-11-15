# Login UI with Flexbox

## Objective

Create a visually appealing login user interface (UI) using HTML and CSS with Flexbox layout. The focus of this assignment is on styling and layout, so the UI does not need to be functional.

## Project Overview

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

## Summary of Tests

The following features are validated with the tests:

1. Login Box Styling:

   • The login box should have a minimum size.

   • Box-shadow and border-radius properties are correctly applied.

   • Flexbox properties used for centering and responsiveness.

2. Form Inputs:

   • Username and Password fields have proper placeholder text.

   • Password text is hidden.

3. Button:

   • A functional and styled button exists.

### Repository Setup

    1.	Clone the Repository:

`git clone https://github.com/mark-escosura/loginUI.git`

`cd loginUI`

    2.	Install Dependencies:

This project uses Jest for testing and Chokidar for automatically running tests whenever a file changes. To install the required dependencies, run:

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

### Additional Notes

    •	Each test in the Jest suite corresponds to a specific styling guideline mentioned in the assignment.
    •	Feel free to ask for clarification if any tests fail, and I will provide further guidance.

Good luck, and happy coding!

### Key Updates:

    •	Watch Mode (Chokidar): A script using Chokidar is set up to automatically run tests whenever changes are made to the index.html or index.css files.
    •	Exiting Watch Mode: You can exit Chokidar watch mode by pressing CTRL + C in the terminal.
    •	Live Server Setup: Instructions have been added on how to install and use Live Server to view your website in real-time.
