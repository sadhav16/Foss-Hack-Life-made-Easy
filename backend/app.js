const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const path = require('path');
const db = require('./config/db.js');

dotenv.config({ path: './.env' });

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());

// Serve static files from the 'frontend/public' directory
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Route to serve the index.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public/js/index.html'));
});

app.use('/auth', require('./routes/auth.js'));
app.use('/queue', require('./routes/queue.js'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
