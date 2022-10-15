import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMapStyle extends Component {
  static defaultProps = {
    center: {
      lat: 38.764707512533896,
      lng: -75.21168627823053
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="google-map-style-1">
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={38.764707512533896}
            lng={-75.21168627823053}
            text="KronicLabz LLC"  
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapStyle;