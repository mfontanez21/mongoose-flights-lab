import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()


// GET localhost3000/flights/new
router.get('/new', flightsCtrl.new)

//POST localhost:3000/flights
router.post('/', flightsCtrl.create)

router.get('/', flightsCtrl.index)

export {
	router
}