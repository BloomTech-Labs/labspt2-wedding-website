export default (lat, lng, placeId) => {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${placeId}`
}
