// Code your solution here
function findMatching(drivers,name){
    return drivers.filter((driverName)=>driverName.toLowerCase()=== name.toLowerCase())
}


function fuzzyMatch(drivers,intials){
    return drivers.filter((driverName)=> driverName.charAt(0)===intials.charAt(0))
}

function matchName(drivers,home){
    return drivers.filter((driverName)=> driverName.name===home)
}