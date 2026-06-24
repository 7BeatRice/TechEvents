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
        const selectQuery = 'SELECT eventName, location, dateAndTime, timeUntil, timePassed FROM events WHERE location = $1 ORDER BY id ASC'
        res.status(200).json(result.rows)
         const eventLocation = req.params.giftId
            const result = await pool.query(selectQuery, [eventLocation])
            res.status(200).json(result.rows[0] )
    }
    catch(error){
        res.status(409).json({error: error.message})

    }

}

export default {getEvents, getEventByLocation}