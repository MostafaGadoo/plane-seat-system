const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');



dotenv.config({
    path: './config/.env',
});

port = process.env.PORT || 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());


app.listen (port, () => {
    console.log(`Listening on port ${port}`);
});