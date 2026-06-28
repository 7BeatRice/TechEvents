import {pool} from '../config/database.js'



const getEvents =  async(req, res) => {
    try{
        const result = await pool.query('SELECT * FROM events ORDER BY id ASC') 
        res.status(200).json(result.rows)
    }
    catch(error){
        res.status(409).json({error: error.message})

    }
}

const getEventByLocation = async(req, res) => {
       try{
         const selectLocationQuery = 'SELECT urlname, location FROM locations WHERE urlname = $1'
         const locationUrlName = req.params.eventLocation
         const locationResult = await pool.query(selectLocationQuery, [locationUrlName])
         const location = locationResult.rows[0]
         const selectQuery = 'SELECT id, eventName, image, location, dateAndTime FROM events WHERE location = $1 ORDER BY id ASC'
         const result = await pool.query(selectQuery, [location.location])
        res.status(200).json(result.rows)
    }
    catch(error){
        res.status(409).json({error: error.message})

    }

}

const getEventById = async(req, res) => {
    try{
        const selectQuery = 'SELECT  id, eventName, image, location, dateAndTime FROM events WHERE id = $1'
        const eventId = req.params.id
        console.log(`eventID: ${eventId}`)
        const result = await pool.query(selectQuery, [eventId])
        res.status(200).json(result.rows)
    }
    catch(error){
      res.status(409).json({error: error.message})
    }

    

}

export default {getEvents, getEventByLocation, getEventById}