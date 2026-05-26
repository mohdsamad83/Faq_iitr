const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const queryRoutes = require('./routes/queryRoutes');
const faqRoutes = require('./routes/faqRoutes');

// Load env vars
dotenv.config();

// Connect to database
// connectDB(); // We will connect when we start defining models

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
    res.send('Vicharanashala API is running...');
});

// Mount routes
app.use('/api/users', userRoutes);
app.use('/api/queries', queryRoutes);
app.use('/api/faqs', faqRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
