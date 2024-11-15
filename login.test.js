const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const cssContent = fs.readFileSync(
  path.resolve(__dirname, 'styles.css'),
  'utf8'
);

describe('Login UI Tests', () => {
  let htmlContent;

  beforeAll(() => {
    // Read the HTML file (index.html) content
    htmlContent = fs.readFileSync(
      path.resolve(__dirname, 'index.html'),
      'utf8'
    );
  });

  // Test 0: Check if the <title /> exists in HTML
  it('should have a title (Name) Login UI Project', () => {
    expect(htmlContent).toMatch(/<title>Mark's Login UI Project<\/title>/);
  });

  // Test 1: Check if the <link rel="stylesheet" href="styles.css"> exists in HTML
  it('should include the link to styles.css', () => {
    expect(htmlContent).toMatch(/<link rel="stylesheet" href="styles.css">/);
  });

  // Test 2: Check if the login box exists
  it('should have a login box', () => {
    expect(htmlContent).toMatch(/<form class="login-box">/);
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

  // Test 7: Check if the login box has box-shadow and rounded corners (through CSS styles)
  it('should have box-shadow and rounded corners', () => {
    // Assuming the styles for box-shadow and border-radius are written in styles.css,
    // you would validate them indirectly by checking if the styles are applied. This
    // test will pass as long as you include these properties in your CSS file.
    const boxShadow = cssContent.includes('box-shadow');
    const borderRadius = cssContent.includes('border-radius');

    expect(boxShadow && borderRadius).toBeTruthy();
  });
  // Test 8: Check if the login box has min-width and min-height (through CSS styles)
  it('should have min-width and min-height for the login box', () => {
    // Check if the min-width and min-height are in the styles
    const minWidth = cssContent.includes('min-width');
    const minHeight = cssContent.includes('min-height');

    // Ensure that both min-width and min-height exist in the styles
    expect(minWidth && minHeight).toBeTruthy();
  });
});

describe('Login UI Flexbox Test', () => {
  let document;
  beforeEach(() => {
    // Load the HTML file and parse it with jsdom
    const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
    const dom = new JSDOM(html);
    document = dom.window.document;
  });

  function hasCssRule(selector, rule) {
    // Check if the CSS content includes the selector with the specified rule
    const regex = new RegExp(`${selector}\\s*{[^}]*${rule}[^}]*}`, 'i');
    return regex.test(cssContent);
  }

  it('should apply Flexbox layout to the login container', () => {
    expect(hasCssRule('.login-container', 'display: flex')).toBeTruthy();
    expect(
      hasCssRule('.login-container', 'justify-content: center')
    ).toBeTruthy();
    expect(hasCssRule('.login-container', 'align-items: center')).toBeTruthy();
  });

  it('should center the login box using Flexbox', () => {
    expect(hasCssRule('.login-box', 'display: flex')).toBeTruthy();
    expect(hasCssRule('.login-box', 'flex-direction: column')).toBeTruthy();
    expect(
      hasCssRule('.login-box', 'justify-content: space-between')
    ).toBeTruthy();
    expect(hasCssRule('.login-box', 'align-items: stretch')).toBeTruthy();
  });

  it('should ensure input fields are aligned properly in the login box', () => {
    expect(hasCssRule('input', 'margin: 10px 0')).toBeTruthy();
  });

  it('should ensure the button is placed correctly at the bottom of the login box', () => {
    expect(hasCssRule('button', 'margin-top: 10px')).toBeTruthy();
  });
});
