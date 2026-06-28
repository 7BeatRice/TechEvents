const getAllEvents= async() =>{
    try{
          const response = await fetch("/events")
          const data =await response.json()
          console.log("Successfully fetched events ")
          return data
    }
    catch(error){
        console.log({error: error.message})
    }
   

}

const getEventsByLocations = async(location) =>{
    try{
        const response = await fetch(`/events/${location.urlname}`)
        if (response.headers.get('content-length') == "0"){
            console.error("Event by Location is Null!")
            return null
        }
        const data = await response.json()
        console.log(`Successfully fetched events for location: ${location.location}`)
        return data
    }
    catch(error){
        console.error("Could Not Fetch event by Location")
    }
}
const getEventById = async(id) =>{
    try{
        console.log(`In events api, id is: ${id}  `)
        const response = await fetch(`/events/id/${id}`)
        const data = await response.json()
        console.log(`Successfully fetched event with id: ${id}`)
        return data
    }
    catch(error){
        console.error("Error: Could not fetch event by id")
    }
}

export default{
    getEventsByLocations,
    getAllEvents,
    getEventById
}