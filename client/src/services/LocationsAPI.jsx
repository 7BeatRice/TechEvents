const getAllLocations = async () => {
    try {
       
        const response = await fetch('http://localhost:3000/')
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error  fetching from getALLLocationAPI", error)
    }
}

export default getAllLocations