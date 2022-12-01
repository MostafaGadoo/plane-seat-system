const ticketModel = require('../models/ticketModel');
const { lock } = require('../routers/ticketRoute');

module.exports.findAllTickets = async () => {
    try {
        const Ticket = await ticketModel.find();
        return Ticket;
        
    } catch (error) {
        throw new Error('Error while fetching all tickets');
    }
};

module.exports.bookTicket = async (ticketInfo, ticketID) =>{
    try {
        const ticket = new ticketModel({
            status: ticketInfo.status,
        });
        const ticketBooked = await ticket.updateOne({status: ticketInfo.status}).where('_id').equals(ticketID);
        console.log(ticketBooked);
        return ticketBooked;
        
    } catch (error) {
        console.log(error);
        throw new Error('Error while booking ticket');
        
    }
}

module.exports.findTicket = async (ticketId) => {
    try {
        const ticketAvailble = await ticketModel.findById({_id: ticketId});
        if(ticketAvailble){
            console.log(ticketAvailble);
            return ticketAvailble;
        }else {
            return false;
        }
    } catch (error) {
        throw new Error('Error while finding ticket');
    }

}

// module.exports.upgradeTIcket = async (ticketInfo, ticketID) =>{
//     try {
//         const ticket = new ticketModel({
//             class: ticketInfo.class,
//         });
//         const ticketBooked = await ticket.updateOne({class: ticketInfo.class}).where('_id').equals(ticketID);
//         console.log(ticketBooked);
//         return ticketBooked;
        
//     } catch (error) {
//         console.log(error);
//         throw new Error('Error while updating ticket');
        
//     }
// }

module.exports.editTicket = async (ticket, ticketInfo) =>{
    try {
        const ticketEdited = await ticketModel.findByIdAndUpdate(ticket._id,ticketInfo);
        return ticketEdited;
    } catch (error) {
        throw new Error('Error while editing ticket');
    }
}

