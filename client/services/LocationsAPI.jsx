const getAllLocations = async () =>
    {
    try{
         const response = await fetch("http://localhost:3000/")
          const data =await response.json()
          console.log("Successfully fetched events ")
          return data
    }
    catch(error){
        console.log({error: error.message})
    }

}
export default {getAllLocations}