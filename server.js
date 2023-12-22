// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

// Create an Express application
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, etc.) from the 'public' directory
app.use(express.static('public'));

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


// Define a simple schema for form submissions
const submissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

const Submission = mongoose.model('Submission', submissionSchema);

// API endpoint for form submission
app.post('/api/submit', async (req, res) => {
  // Basic server-side validation
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  // Email validation
  if (email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Phone validation
  if (phone && (phone.length > 10 || !/^[0-9+\-]*$/.test(phone))) {
    return res.status(400).json({ error: 'Invalid phone number' });
  }

  try {
    // Save submission to the database
    const newSubmission = new Submission({ name, email, phone, subject, message });
    await newSubmission.save();

    // Respond with success
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
