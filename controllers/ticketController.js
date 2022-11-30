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
    const ticketId = request.params.id;
    const ticketInfo = request.body;
    console.log(ticketInfo);
    try {
        const ticket = await ticketSerive.findTicket(ticketId);
        if (ticket._id != ticketId) {
            response.status(404);
            response.send({
                error: "Ticket not found"
            });
        }else{
            const ticketBooked = await ticketSerive.bookTicket(ticketInfo, ticketId);
            return response.status(201).send({
                message: 'Ticket booked successfully',
                status: ticketInfo,
            });
        }
    } catch (error) {
        response.status(500).send({
            error: error.message,
        });
    }

}