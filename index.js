const express = require('express');
const cors = require('cors');  // Add this line
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());  // Add this line to use CORS middleware
app.use(express.json()); // Middleware to parse JSON request bodies

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// POST endpoint at /bfhl
app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  // Validate input
  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ is_success: false, error: "Invalid input" });
  }

  // Filter numbers and alphabets from the input
  const numbers = data.filter(item => !isNaN(item) && item !== '');
  const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
  const lowercaseAlphabets = alphabets.filter(item => /^[a-z]$/.test(item));

  // Find the highest lowercase alphabet
  const highestLowercaseAlphabet = lowercaseAlphabets.length > 0
    ? [lowercaseAlphabets.sort().pop()]
    : [];

  // Respond with the filtered data and user information
  res.json({
    is_success: true,
    user_id: "your_full_name_ddmmyyyy", // Replace with your actual user_id
    email: "your_email@college.com",    // Replace with your actual email
    roll_number: "YourRollNumber",      // Replace with your actual roll number
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet
  });
});

// GET endpoint at /bfhl
app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});
