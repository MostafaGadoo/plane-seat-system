const {Router} = require('express');
const ticketController = require('../controllers/ticketController');

const ticketsRouter = Router();

ticketsRouter.get('/', ticketController.getTickets);
ticketsRouter.put('/:id', ticketController.bookTicket);

module.exports = ticketsRouter;