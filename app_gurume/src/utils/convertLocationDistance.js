function getDistanceFromLatLonInKm(argFirstLocation, argSecondLocation) {
    const { lat: lat1, lng: lng1 } = argFirstLocation
    const { lat: lat2, lng: lng2 } = argSecondLocation


    function deg2rad(deg) { return deg * (Math.PI / 180) }
    const R = 6371 // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1) // deg2rad below 
    const dLon = deg2rad(lng2 - lng1)
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) 
    + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c // Distance in km
    return d.toFixed(3)
}
export default getDistanceFromLatLonInKm

