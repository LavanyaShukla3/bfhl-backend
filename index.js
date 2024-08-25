const express = require('express');
const cors = require('cors'); 
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  // Validate input
  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ is_success: false, error: "Invalid input" });
  }

  const numbers = data.filter(item => !isNaN(item) && item !== '');
  const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
  const lowercaseAlphabets = alphabets.filter(item => /^[a-z]$/.test(item));

  // Find the highest lowercase alphabet
  const highestLowercaseAlphabet = lowercaseAlphabets.length > 0
    ? [lowercaseAlphabets.sort().pop()]
    : [];

  res.json({
    is_success: true,
    user_id: "lavanya1@", 
    email: "lavanya.shukla2021@vitstudent.ac.in",   
    roll_number: "21BCE6068",    
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet
  });
});

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});
