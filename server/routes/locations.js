import express from 'express'
import LocationController from '../controller/locations.js'


const router = express.Router()
router.get('/', LocationController.getLocations)

export default router