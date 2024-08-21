const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

require('dotenv').config();
// Middleware
app.use(cors());
app.use(express.json());


//Connect to mongoDB
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define Routes
app.get('/', (req, res) => res.send('Signature Backend is Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
