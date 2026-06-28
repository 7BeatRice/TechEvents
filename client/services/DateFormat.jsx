const generateDate = async(dateAndTime) => {
    const currTime = new Date()
    dateAndTime = new Date(dateAndTime)
    const timeDiff = dateAndTime - currTime
    let hasPassed = false
    if (timeDiff < 0){
        hasPassed = true
         return{
        remaining: `0 days 0 hours 0 minutes 0 seconds`,
        timepassed: hasPassed
     }

    }

    const msPerSecond = 1000;
    const msPerMinute = msPerSecond * 60;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;

    const days = Math.floor(timeDiff / msPerDay);
    const hours = Math.floor((timeDiff % msPerDay) / msPerHour);
    const minutes = Math.floor((timeDiff % msPerHour) / msPerMinute);
    const seconds = Math.floor((timeDiff % msPerMinute) / msPerSecond);

    

     return{
        remaining: `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`,
        timepassed: hasPassed
     }



}
export default {generateDate}
