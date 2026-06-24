import express from 'express'
import EventController from '../controller/events'


const router = express.Router()
router.get('/events', EventController.getEvents)
router.get('/:eventLocation', EventController.getEventByLocation)

export default Router