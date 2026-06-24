import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'

const LocationEvents = ({index}) => {
    const [location, setLocation] = useParams()
    const [events, setEvents] = useState([])

    return (
        <div className='location-events'>
            <header>
                {/*<div className='location-image'>
                    <img src={location.image} />
                </div>*/}

                <div className='location-info'>
                    <h2>Tech Venues & Events</h2>
                    <p>Showing current listings found across: <strong>{location}</strong></p>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.eventName}             
                            date={new Date(event.dateAndTime).toLocaleDateString()} 
                            time={new Date(event.dateAndTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            timeUntil={event.timeUntil}         
                            timePassed={event.timePassed}       
                            learnMore={event.learnMore}          
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents