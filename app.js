const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const initiateDBConnection = require('./config/db');
const ticketRouter = require('./routers/ticketRoute');

dotenv.config({
    path: './config/.env',
});

const PORT = process.env.PORT || 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/ticket', ticketRouter);

app.listen(PORT, async () => {
    console.log(`Server has been started and is listening to port ${PORT}`);
    // Call the asynchronous function to initiate the DB connection once the server starts listening.
    await initiateDBConnection();
  });