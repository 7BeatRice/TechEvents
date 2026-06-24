import {pool} from './database.js'
import './dotenv.js'
import eventsData from '../data/eventData.js'
import locationData from '../data/locationData.js'

const generateData = (dateAndTime) => {
    const currTime = new Date()
    dateAndTime = new Date(dateAndTime)
    const timeDiff = dateAndTime - currTime
    let hasPassed = false
    if (timeDiff < 0){
        hasPassed = true
         return{
        timeUntil: `0 days 0 hours 0 minutes 0 seconds`,
        timepassed: hasPassed
     }

    }

    const msPerSecond = 1000;
    const msPerMinute = msPerSecond * 60;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;

    const days = Math.floor(timeDiff / msPerDay);
    const hours = Math.floor((timeDiff % msPerDay) / msPerHour);
    const minutes = Math.floor((timeDiff % msPerHour) / msPerMinute);
    const seconds = Math.floor((timeDiff % msPerMinute) / msPerSecond);

     return{
        timeUntil: `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`,
        timepassed: hasPassed
     }



}

const createLocationTable = async() =>{
    const createLocationTableQuery = `
        DROP TABLE IF EXISTS locations;

        CREATE TABLE IF NOT EXISTS locations(
            id SERIAL PRIMARY KEY,
            location VARCHAR(255) NOT NULL 

        )
    `
    try{
        const reponse = await pool.query(createLocationTableQuery)  
        console.log("CREATED LOCATION TABLE SUCESSFULLY!")
    }
    catch(err){
        console.error("Error creating LOCATION TABLE: ", err)
    }
        
     
}
const createEventTable = async() =>{
    const createEventTableQuery = `
    DROP TABLE IF EXISTS events;
    CREATE TABLE IF NOT EXISTS events(
        id SERIAL PRIMARY KEY,
        eventName VARCHAR(255) NOT NULL,
        image TEXT NOT NULL,
        location VARCHAR(255) NOT NULL,
        learnMore TEXT NOT NULL,
        dateAndTime TIMESTAMP NOT NULL,
        timeUntil INTERVAL NOT NULL,
        timePassed BOOLEAN NOT NULL
    )
    `
    try {
        const response =await pool.query(createEventTableQuery)
        console.log("CREATED EVENT TABLE SUCESSFULLY!")
    }
    catch(err){
        console.error("Error creating  event table: ", err)
    }
}

const seedLocationTable = async() => {
    await createLocationTable()
    locationData.forEach( (location) => {
        const insertQuery  = {
            text: 'INSERT INTO locations (id, location) VALUES ($1, $2)'
        }
        const values = [
            location.id,
            location.location
        ]

          pool.query(insertQuery, values, (err, res) => {
            if (err){
                console.error("Error inserting location: ", err)
                return
            }
            console.log(`${location.location} added successfully!`)
        })
        
    });

}
const seedEventTable = async () =>{
    await createEventTable()
    eventsData.forEach((event) => {
        const insertQuery  = {
            text: 'INSERT INTO events (id, eventName, image, location, learnMore, dateAndTime, timeUntil, timePassed) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'

        }
        const dynamicData = generateData(event.dateAndTime)

        const values = [
            event.id,
            event.eventName,
            event.image,
            event.location,
            event.learnMore,
            event.dateAndTime,
            dynamicData.timeUntil,
            dynamicData.timepassed
        ]

        
        pool.query(insertQuery, values, (err, res) => {
            if (err){
                console.error("Error inserting event: ", err)
                return
            }
            console.log(`${event.eventName} added successfully!`)
        })
    
    })
}

seedEventTable()
seedLocationTable()