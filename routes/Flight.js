const { Router } = require("express");
const FlightController = require("../controller/Flight");
const FlightRouter = Router();
FlightRouter.get("/", FlightController.getFlights)
FlightRouter.post("/",FlightController.AddFlights)
module.exports = FlightRouter;
