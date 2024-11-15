const fs = require('fs');
const path = require('path');

describe('Login UI Tests', () => {
  let htmlContent;

  beforeAll(() => {
    // Read the HTML file (index.html) content
    htmlContent = fs.readFileSync(
      path.resolve(__dirname, 'index.html'),
      'utf8'
    );
  });

  // Test 1: Check if the <link rel="stylesheet" href="styles.css"> exists in HTML
  it('should include the link to index.css', () => {
    expect(htmlContent).toMatch(/<link rel="stylesheet" href="index.css">/);
  });

  // Test 2: Check if the login box exists
  it('should have a login box', () => {
    expect(htmlContent).toMatch(/<div class="login-box">/);
  });

  // Test 3: Check if there is a username input field
  it('should have a username input field', () => {
    expect(htmlContent).toMatch(
      /<input type="text" id="username" placeholder="Username">/
    );
  });

  // Test 4: Check if there is a password input field
  it('should have a password input field', () => {
    expect(htmlContent).toMatch(
      /<input type="password" id="password" placeholder="Password">/
    );
  });

  // Test 5: Check if the login button exists
  it('should have a submit (login) button', () => {
    expect(htmlContent).toMatch(/<button type="submit">Log In<\/button>/);
  });

  // Test 6: Check if password input is of type password (to hide input)
  it('should hide password input (type="password")', () => {
    const passwordInput = htmlContent.match(
      /<input type="password" id="password" placeholder="Password">/
    );
    expect(passwordInput).toBeTruthy();
  });

  // Test 7: Ensure login box has a minimum size (you could adjust based on your layout)
  it('should have a minimum size for the login box', () => {
    // You can check if the login box has a minimum size using CSS properties or if an inline style is used
    // This check will depend on how you implement the minimum size in your CSS.
    const minSize =
      htmlContent.includes('min-width') || htmlContent.includes('min-height');
    expect(minSize).toBeTruthy();
  });

  // Test 8: Check if the login box has box-shadow and rounded corners (through CSS styles)
  it('should have box-shadow and rounded corners', () => {
    // Assuming the styles for box-shadow and border-radius are written in styles.css,
    // you would validate them indirectly by checking if the styles are applied. This
    // test will pass as long as you include these properties in your CSS file.
    const boxShadow = htmlContent.includes('box-shadow');
    const borderRadius = htmlContent.includes('border-radius');
    expect(boxShadow && borderRadius).toBeTruthy();
  });
});
