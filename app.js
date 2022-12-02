const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const FlightRouter=require("./routes/Flight")
const initiateDBConnection = require('./config/db');
const ComplaintRouter=require("./routes/Complaint")
const FeedbackRouter=require("./routes/Feedback")

dotenv.config({
    path: './config/.env',
});

const PORT = process.env.PORT || 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use("/Flights",FlightRouter);
app.use("/Flights/:flight_id",FlightRouter);
app.use("/Complaints",ComplaintRouter);
app.use("/Feedbacks",FeedbackRouter)


app.listen(PORT, async () => {
    console.log(`Server has been started and is listening to port ${PORT}`);
    // Call the asynchronous function to initiate the DB connection once the server starts listening.
    await initiateDBConnection();
  });