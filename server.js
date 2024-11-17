const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());

// Load environment variables
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO_OWNER = process.env.GITHUB_REPO_OWNER;
const GITHUB_REPO_NAME = process.env.GITHUB_REPO_NAME;

app.use(express.json());

app.post('/api/create-issue', async (req, res) => {
  const { title, body } = req.body;

  try {
    const response = await axios.post(
      `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/issues`,
      {
        title,
        body,
      },
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );
    // Send back the Github response
    res.status(201).json(response.data);
  } catch (error) {
    console.error('Error creating issue:', error);
    // Handle the error response from GitHub
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}...`);
});
