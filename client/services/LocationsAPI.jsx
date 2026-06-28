const getAllLocations = async () =>
    {
    try{
         const response = await fetch("/locations")
          const data =await response.json()
          console.log("Successfully fetched Locations ")
          return data
    }
    catch(error){
        console.log({error: error.message})
    }

}
export default {getAllLocations}