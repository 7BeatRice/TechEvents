export const getAllEvents = async () => {
    try {
        const response = await fetch('http://localhost:3000/events')
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error with getAllEvents API:", error)
    }
}

export const getEventsByLocation = async (eventLocation) => {
    try {
    
        
        
        const response = await fetch(`http://localhost:3000/events/${eventLocation}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(`Error with getEventsByLocation API for ${eventLocation}:`, error)
    }
}
export default {getAllEvents, getEventsByLocation}