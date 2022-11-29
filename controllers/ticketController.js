const ticketSerive = require('../services/ticketServer');

module.exports.getTickets = async (request, response) => {
    try {
        const Ticket = await ticketSerive.findAllTickets();
        response.send({Ticket}); 
    } catch (error) {
        response.status(500);
        response.send({
            error: "Can't find tickets"
        });
    }
}

module.exports.bookTicket = async (request, response) => {
    const id = request.params._id;
const ticketInfo = {
    status: request.body.status,
}
const findTicket = await ticketSerive.findTicket(id);
if(findTicket ==  id){
    try {
        const ticketUpdated = await ticketSerive.bookTicket(ticketInfo);
        return response.status(200).send({
            msg: "Ticket is booked",
            ticketId: ticketUpdated._id,
        });
    } catch (error) {
        return response.status(500).send({
            error: "Can't book ticket",
        })
    }
}else{
    return response.status(404).send({
        error: "Invalid ticket ID",
    })
}

}