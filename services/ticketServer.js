const ticketModel = require('../models/ticketModel');

module.exports.findAllTickets = async () => {
    try {
        const Ticket = await ticketModel.find();
        return Ticket;
        
    } catch (error) {
        throw new Error('Error while fetching all tickets');
    }
};

module.exports.bookTicket = async (ticketInfo) =>{
    try {
        const ticket = new ticketModel({
            status: ticketInfo.status,
        });
        const ticketBooked = await ticket.save();
        return ticketBooked;
        
    } catch (error) {
        throw new Error('Error while booking ticket');
    }
}

module.exports.findTicket = async (ticketId) => {
    try {
        const ticket = await ticketModel.findById(ticketId);
        return ticket;
    } catch (error) { 
        throw new Error('Error while finding ticket');
    }
}