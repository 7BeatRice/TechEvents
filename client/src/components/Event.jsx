import React, { useState, useEffect } from 'react'
import '../css/Event.css'
import EventsAPI from '../../services/EventsAPI'
import dates from  '../../services/DateFormat.jsx'
const Event = (props) => {

    const [event, setEvent] = useState([])
    const [remaining, setRemaining] = useState([])
    const [passed, setPassed] = useState([])
    const [time, setTime] = useState([])

    useEffect(() => {
        (async () => {
            
            try {
                const eventData = await EventsAPI.getEventById(props.id)
                await setEvent(eventData[0])
            }
            catch (error) {
                console.error("ERROR: eventsAPI.getEventById not working")
            }
        }) ()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const newTime = new Date(event.dateandtime).toString()
                const newRemaining = (await dates.generateDate(event.dateandtime)).remaining
                setRemaining(newRemaining)
                setTime(newTime)
            }
            catch (error) {
                console.error("ERROR: Error formating event's time")
            }
        }) ()
    }, [event])

    useEffect(() => {
        (async () => {
            try {
                const hasPassed = await dates.generateDate(event.dateandtime).timepassed
                setPassed(hasPassed)
            }
            catch (error) {
                console.error("Error: error determining if time has passed")
            }
        }) ()
    }, [event])

    return (
        <article className='event-information'>
            <img src={event.image} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{event.eventname}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {time}</p>
                    <p id={`remaining-${event.id}`}>{remaining}</p>
                </div>
            </div>
        </article>
    )
}

export default Event