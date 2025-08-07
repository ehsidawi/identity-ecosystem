require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Add authentication routes
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

// Core modules will be added here
app.get('/', (req, res) => res.send('Identity Ecosystem Running'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
