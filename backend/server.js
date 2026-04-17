const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 1. Middleware configuration
app.use(cors()); 
app.use(express.json()); 

// 2. Database connection
const uri = process.env.MONGO_URI;
mongoose.connect(uri)
  .then(() => console.log('✅ Database connection successful! MongoDB Connected!'))
  .catch(err => console.log('❌ Database connection failed: ', err));

// 3. Define data model
const projectSchema = new mongoose.Schema({
  title: String,
  category: String,
  year: String,
  number: String,
  role: String,
  scope: String,
  stack: [String],
  description: String,
  challenge: String,
  visualSystem: {
    description: String,
    colors: [String],
    fonts: [
      { name: String, type: String }
    ],
    mainImage: String
  },
  gallery: [String] 
});


const Project = mongoose.model('Project', projectSchema);

// Contact
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now } // 自动记录留言时间
});
const Contact = mongoose.model('Contact', contactSchema);

// 4. Core API Interface

// Interface A: Interface for retrieving all portfolios
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects); 
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve data' });
  }
});

// Receive messages from the front end and store them in the database.
app.post('/api/contact', async (req, res) => {
  try {
    // Extract data from the request (req.body) sent from the front end.
    const { name, email, message } = req.body;

    // Create a new database record
    const newContact = new Contact({
      name,
      email,
      message
    });

    // Save to MongoDB
    await newContact.save();

    // Return a success signal to the front end
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
    
  } catch (error) {
    console.error("❌ Message saved failed:", error);
    res.status(500).json({ success: false, error: 'Failed to send message.' });
  }
});


// 5. Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Back-end server is running on port: http://localhost:${PORT}`);
});