
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config()
const app = express();

app.use(express.json());
app.use(cors());


app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));

mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
