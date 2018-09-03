import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";

class Container extends Component {
  render() {
    const style = {
      width: "100vw",
      height: "100vh"
    };
    return (
      <div>
        <Map google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC-CdkBwj8Y72IWZZdXdEwnBbEZJEb_0jM"
})(Container);
