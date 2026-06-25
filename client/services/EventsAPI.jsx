const getAllEvents= async() =>{
    try{
          const response = await fetch("http://localhost:3000/events")
          const data =await reponse.json()
          console.log("Successfully fetched events ")
          return data
    }
    catch(error){
        console.log({error: error.message})
    }
   

}

const getEventsByLocations = async(location) =>{
    try{
        const response = await fetch(`http://localhost:3000/${location}`)
        const data = await reponse.json()
        console.log(`Successfully fetched events for location: ${location}`)
        return data
    }
    catch(error){
        console.log({error: error.message})
    }
}

export default{
    getEventsByLocations,
    getAllEvents
}