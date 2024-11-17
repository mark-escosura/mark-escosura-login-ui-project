const express = require('express');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Load environment variables
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO_OWNER = process.env.GITHUB_REPO_OWNER;
const GITHUB_REPO_NAME = process.env.GITHUB_REPO_NAME;

app.use(express.json());

// Create the endpoint that will create the Issue
app.post('/api/create-issue', async (req, res) => {
  const { title, body } = req.body; // Issue title and body from frontend

  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/issues`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      res.status(201).json(data); // Respond with the created issue
    } else {
      const errorData = await response.json();
      res.status(response.status).json(errorData); // Respond with error details
    }
  } catch (error) {
    console.error('Error creating issue:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}...`);
});
