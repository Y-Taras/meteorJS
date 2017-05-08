import React, { PropTypes } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import withScriptjs from 'react-google-maps/lib/async/withScriptjs'
import MarkerClusterer from 'react-google-maps/lib/addons/MarkerClusterer'

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 35.6895, lng: 139.6917 }}
      ref={props.onMapLoad}
    >
      <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
        {props.markers.map(marker => (
          <Marker
            position={{ lat: marker.location.lat, lng: marker.location.lng }}
            key={marker.id}
          />
        ))}
      </MarkerClusterer>
    </GoogleMap>
  ))
)

Map.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.object),
  onMapClick: PropTypes.func
}

export default Map
