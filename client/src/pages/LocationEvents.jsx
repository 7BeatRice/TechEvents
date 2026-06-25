import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'

const LocationEvents = ({index}) => {
    const [location, setLocation] = useState([])
    const [events, setEvents] = useState([])

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    <img src={location.image} />
                </div>

                <div className='location-info'>
                    <h2>{location.location}</h2>
                    <p>Tech Events at {location.location}</p>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.eventName}
                            date={event.dateAndTime}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents