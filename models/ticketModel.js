const {Schema, model} = require('mongoose');

const ticketSchema = new Schema({
    date: { 
        type:'String',
        required : false,
    },
    departureTime: {
        type: 'String',
        required: false,
    },
    departureLocation: {
        type: 'String',
        required: false,
    },
    arrivalLocation: {
        type: 'String',
        required: false,
    },
    seatNumber: {
        type: 'String',
        required: false,
    },
    price: {
        type: 'String',
        required: false,
    },
    class: {
        type: 'String',
        required: false,
    },
    status: {
        type: 'String',
        required: true,
    },
    flightID: {
        type: 'String',
        required: false,
    },

});

const ticketModel = model('Ticket', ticketSchema);
module.exports = ticketModel;