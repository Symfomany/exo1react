import React, { Component } from "react";
import { GoogleMap, Marker } from "react-google-maps";

class Gmap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="map">
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
          {true && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
      </div>
    );
  }
}

export default Gmap;
