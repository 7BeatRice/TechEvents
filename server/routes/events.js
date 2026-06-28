import express from 'express'
import EventController from '../controller/events.js'


const router = express.Router()
router.get('/', EventController.getEvents)
//The colon acts has a variable so anything after the / would trigger

router.get('/id/:id', EventController.getEventById)
router.get('/:eventLocation', EventController.getEventByLocation)


export default router