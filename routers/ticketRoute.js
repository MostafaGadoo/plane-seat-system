const {Router} = require('express');
const ticketController = require('../controllers/ticketController');

const ticketsRouter = Router();

ticketsRouter.get('/', ticketController.getTickets);
ticketsRouter.put('/bookticket/:id', ticketController.bookTicket);
ticketsRouter.put('/cancelreservation/:id', ticketController.cancelBooking);
ticketsRouter.put('/upgradeticket/:id', ticketController.upgradeTicket);
ticketsRouter.put('/editticket/:id', ticketController.editTicket);

module.exports = ticketsRouter;