const FlightServices=require("../services/Flight")
module.exports.getFlights=async(req,res)=>{
    try {
        const Flight=await FlightServices.findAllFlights();
        res.send({Flight});

    } catch (error) {
        res.status(500);
        res.send({
            error:"Could not find Flights"
        });
    }
}
module.exports.AddFlights=async(req,res)=>{
const FlightInfo={
    Date:req.body.Date,
    Departure_Time:req.body.Departure_Time,
    Departure_loc:req.body.Departure_loc,
    Arrival_loc:req.body.Arrival_loc,
     Plane_No:req.body.Plane_No
}
try {
    const createdFlight=await FlightServices.AddFlight(FlightInfo);
    return res.status(201).send({
        msg:"Flight created successfully",
        flight_id:createdFlight._id
    })
} catch (error) {
    return res.status(500).send({
        error:"Creation failed"
    })
}
}