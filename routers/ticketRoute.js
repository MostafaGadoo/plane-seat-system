const {Router} = require('express');
const ticketController = require('../controllers/ticketController');

const ticketsRouter = Router();

ticketsRouter.get('/', ticketController.getTickets);
ticketsRouter.put('/bookticket/:id', ticketController.bookTicket);
ticketsRouter.put('/uprgadeticket/:id', ticketController.upgradeTicket);

module.exports = ticketsRouter;