const FlightModel=require("../Model/Flight");
module.exports.findAllFlights=async()=>{
    try {
        const Flight=await FlightModel.find();
        return Flight;

    } catch (error) {
        throw new Error("Could not retrive Flights")
    }
}
module.exports.AddFlight=async(FlightInfo)=>{
    try {
        const Flight=new FlightModel({
            Date:FlightInfo.Date,
            Departure_Time:FlightInfo.Departure_Time,
            Departure_loc:FlightInfo.Departure_loc,
            Arrival_loc:FlightInfo.Arrival_loc,
            Plane_No:FlightInfo.Plane_No
        })
        const createdFlight=await Flight.save();
        return createdFlight;
    } catch (error) {
        throw new Error("could not add Flight");
        
    }
}