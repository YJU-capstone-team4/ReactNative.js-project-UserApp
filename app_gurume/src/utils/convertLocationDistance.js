const convertLocationDistance = (argFirstLocation, argSecondLocation) => {
    const { lat : firstLat, lng : firstLng} = argFirstLocation
    const { lat : secondLat, lng : secondLng } = argSecondLocation

    const R = 6371e3; // metres
    const φ1 = firstLat * Math.PI / 180 // φ, λ in radians
    const φ2 = secondLat * Math.PI / 180
    const Δφ = (secondLat - firstLat) * Math.PI / 180
    const Δλ = (secondLng - firstLng) * Math.PI / 180

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    const distance = R * c // in metres

    // return to km (to 4 SF*)
    return distance * 1000
}

export default convertLocationDistance

