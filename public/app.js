// get user's data
// get user's coordinates


// get user's time
function userTime(){
    const now = new Date() 
    return now.getHours()
}
console.log(userTime())

// helper functions
// check time of day
function getMealTime(){
    const mal = userTime()
    if (mal >= 20) {return 'late night snacky'}
    else if (mal > 16) {return 'Dinner'}
    else if (tod > 11) {return 'lunch'}
    else {return 'breakfast'}
 }

function buildAd1 () {
    const mealTime = getMealTime()
    let content = document.querySelector('.ad1')
    let inner = document.createElement('p')
    inner.innerHTML = `We have the BEST <span>${mealTime}</span> in Town!`
    content.append(inner) 
}

// build ad 1


// build ad 2
async function getCoords(){
    position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })   
    return [position.coords.latitude, position.coords.longitude]
}
                                                             
function buildAd2(coordinates){
    const coords = coordinates
    const href = `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z/`
    let content = document.querySelector('.ad2')
    let inner = document.createElement('p')
    inner.innerHTML = `It's time to try our coffee! <span><a href="${href}" target="_blank">We're this close!</a></span>`
    content.append(inner)
}

// event listeners
// on load, build ads
                                                        
window.onload = async () => {
    buildAd1()
    const coords = await getCoords()
    buildAd2(coords)
}



