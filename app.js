const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { getUser } = require('./controllers/userController');
const cors = require("cors");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express
const app = express();

app.use(cors());

// Middleware for parsing JSON
app.use(express.json());

// API routes
app.use('/api/v1', userRoutes);
app.use('/api/v1', getUser);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
