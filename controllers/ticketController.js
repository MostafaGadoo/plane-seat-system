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
    try {
        const ticketId = request.params.id;
        const ticketInfo ={
           status: request.body.status,
        }
        const ticket = await ticketSerive.findTicket(ticketId);
        if(ticket._id != ticketId){
            response.status(404);
            response.send({
                error: "Ticket not found"
            });
        }else{
            const ticektBooked = await ticketSerive.editTicket(ticket, ticketInfo);
            response.status(201);
            response.send({
                message: "Ticket booked successfully"
            });
        }
    } catch (error) {
        response.status(500);
             response.send({
                  error: error.message,
             });
    }
}

module.exports.upgradeTicket = async (request, response) => {
    try {
        const ticket = await ticketSerive.findTicket(request.params.id);
        const ticketInfo = {
            class: request.body.class,
        }
        const ticketUpgraded = await ticketSerive.editTicket(ticket, ticketInfo);
        return response.status(201).send({
            message: 'Ticket upgraded successfully',
        });
       } catch (error) {
             response.status(500);
             response.send({
                  error: error.message,
             });
       }

};

module.exports.editTicket = async (request, response) => {
   try {
    const ticket = await ticketSerive.findTicket(request.params.id);
    const ticketInfo = {
        date: request.body.date,
        departureTime: request.body.departureTime,
    }
    const ticketEdited = await ticketSerive.editTicket(ticket, ticketInfo);
    return response.status(201).send({
        message: 'Ticket edited successfully',
    });
   } catch (error) {
         response.status(500);
         response.send({
              error: error.message,
         });
   }
};

module.exports.cancelBooking = async (request, response) => {
    try {
        const ticket = await ticketSerive.findTicket(request.params.id);
        const ticketInfo = {
            status: request.body.status,
        }
        const ticketCanceled = await ticketSerive.editTicket(ticket, ticketInfo);
        return response.status(201).send({
            message: 'Ticket canceled successfully',
        });
       } catch (error) {
             response.status(500);
             response.send({
                  error: error.message,
             });
       }
}