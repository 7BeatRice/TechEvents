import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'
import LocationsAPI from '../../services/LocationsAPI'
import EventsAPI from '../../services/EventsAPI'

const AllEvents = () => {
    
    const [location, setLocation] = useState([])
    const [events, setEvents] = useState([])

        useEffect(() => {
            (async () => {
                try {

                    const eventsData = await EventsAPI.getAllEvents()
                    setEvents(eventsData)
                    console.log(events)
                }
                catch (error) {
                    console.log({error: error.message})
                }
            }) ()
        }, [])

 
    return (
        <div className='location-events'>
            <header>
                <div className='filter-drop-down'>
                    <button className='drop-down-btn'>Show events at ...</button>
                    <div className='drop-down-options'>
                        <a href='san-francisco'>San Francisco, CA</a>
                        <a href='silicon-valley'>Silicon Valley, CA</a>
                        <a href='austin'>Austin, TX</a>
                        <a href='new-york'>New York, NY</a>
                        <a href='las-vagas'>Las Vegas, NV</a>
                    </div>
                </div>

                <div className='get-all-events'>
                    <button className='get-all-events-button'>All Events</button>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.eventname}
                            date={event.dateandtime}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default AllEvents