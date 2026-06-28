import {pool} from './database.js'
import './dotenv.js'
import eventsData from '../data/eventData.js'
import locationData from '../data/locationData.js'


const createLocationTable = async() =>{
    const createLocationTableQuery = `
        DROP TABLE IF EXISTS locations;

        CREATE TABLE IF NOT EXISTS locations(
            id SERIAL PRIMARY KEY,
            URLName VARCHAR(255) NOT NULL,
            location VARCHAR(255) NOT NULL,
            image TEXT NOT NULL

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
        dateAndTime TIMESTAMP NOT NULL
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
            text: 'INSERT INTO locations (id, urlname, location, image) VALUES ($1, $2, $3, $4)'
        }
        const values = [
            location.id,
            location.URLName,
            location.location,
            location.image
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
            text: 'INSERT INTO events (id, eventName, image, location, learnMore, dateAndTime) VALUES ($1, $2, $3, $4, $5, $6)'

        }

        const values = [
            event.id,
            event.eventName,
            event.image,
            event.location,
            event.learnMore,
            event.dateAndTime,
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