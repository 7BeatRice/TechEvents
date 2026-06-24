import express from 'express'
import LocationController from '../controller/locations'


const router = express.Router()
router.get('/', LocationController.getLocations)

export default router