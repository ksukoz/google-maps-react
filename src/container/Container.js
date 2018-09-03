import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import Map from "./Map";

class Container extends Component {
  render() {
    const style = {
      width: "100vw",
      height: "100vh"
    };
    return (
      <div className="Map" style={style}>
        <Map google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC-CdkBwj8Y72IWZZdXdEwnBbEZJEb_0jM"
})(Container);
