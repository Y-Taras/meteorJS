import axios from 'axios'

const fetchFourSquareApi = (searchItem, center) => {
  var encodedURI =
    `https://api.foursquare.com/v2/venues/search?v=20161012&ll=${center.lat},%20${center.lng}&query=${searchItem}&intent=checkin&client_id=PGJUSPKZEYJLKSRQNFLPLSABV51VUID4SC130GAJOBNSD1FP&client_secret=SGF0V0CXY5EARB21FE03SLRMW4VW4MHL0Q24R2KGFZF2APAK`

  return axios.get(encodedURI).then(function (response) {
    if (response.status !== 200) {
      console.log(
        `Looks like there was a problem. Status Code: ${response.status}`
      )
      return
    }
    return response.data.response.venues
  })
}
export default fetchFourSquareApi
