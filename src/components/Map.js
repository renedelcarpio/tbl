import React from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

import GoogleMapKey from '../components/GoogleMapKey'
class Map extends React.Component {
    render() {
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
                defaultZoom={15}
                defaultCenter={{ lat: -17.83692, lng: -63.19385 }}>
            <Marker
                position={{ lat: -17.83692, lng: -63.19385 }}
            />
            </GoogleMap>
        ))
        return(
            <MapWithAMarker
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GoogleMapKey}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }
};

export default Map
