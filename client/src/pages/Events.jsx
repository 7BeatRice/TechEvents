import React, { useState, useEffect } from 'react'
import EventAPI from '../services/EventsAPI' 
import Event from '../components/Event'
import '../css/Event.css' 

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchAllEventsData = async () => {
            try {
                // Calls the getAllEvents function from your exported default object
                const allEvents = await EventAPI.getAllEvents()
                
                if (allEvents) {
                    setEvents(allEvents)
                }
            } catch (error) {
                console.error("Failed to load events:", error)
            }
        }

        fetchAllEventsData()
    }, [])

    return (
        <div className="all-events-page">
            <header className="events-page-header">
                <h2>Event Schedule</h2>
                <p>Browse through all undergraduate tech events across all available regions.</p>
            </header>

            <main className="events-grid-container">
                {events && events.length > 0 ? (
                    events.map((event) => (
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.eventName}             
                            date={new Date(event.dateAndTime).toLocaleDateString()} 
                            time={new Date(event.dateAndTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            location={event.location}          
                            timeUntil={event.timeUntil}          
                            timePassed={event.timePassed}        
                            learnMore={event.learnMore}         
                        />
                    ))
                ) : (
                    <div className="no-events-fallback">
                        <h2>
                            <i className="fa-regular fa-calendar-xmark fa-shake"></i> 
                            {' No events found in the database system.'}
                        </h2>
                    </div>
                )}
            </main>
        </div>
    )
}

export default Events