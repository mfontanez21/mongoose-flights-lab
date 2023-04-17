import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()


// GET localhost3000/flights/new
router.get('/new', flightsCtrl.new)

//POST localhost:3000/flights
router.post('/', flightsCtrl.create)

router.get('/', flightsCtrl.index)

//GET localhost3000/flights/details
router.get('/:flightId', flightsCtrl.show)

// localhost:3000/flights/:flightId
router.delete("/:flightId", flightsCtrl.delete)

// localhost:3000/flights/:flightId/edit
router.get("/:flightId/edit", flightsCtrl.edit)

// localhost:3000/flights/:flightId
router.put("/:flightId", flightsCtrl.update)

router.post('/:flightId/tickets', flightsCtrl.createTicket)

router.post('/:flightId/meals', flightsCtrl.addToMeals);

export {
	router
}