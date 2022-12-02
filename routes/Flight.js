const { Router } = require("express");
const FlightController = require("../controller/Flight");
const FlightRouter = Router();
FlightRouter.get("/", FlightController.getFlights)
FlightRouter.get("/:flight_id", FlightController.getFlightsByID)
FlightRouter.post("/",FlightController.AddFlights)
FlightRouter.put("/:flight_id",FlightController.UpdateFlight)
module.exports = FlightRouter;
