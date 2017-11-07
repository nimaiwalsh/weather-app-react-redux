import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    //Refer to google API doc - 
    //https://developers.google.com/maps/documentation/javascript/adding-a-google-map
    new window.google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon, 
      }
    })
  }
  
  render() {
    return <div ref="map" style={{height: "180px", width: "180px", margin: "0 auto"}}/>
  }
}

export default GoogleMap