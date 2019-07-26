
import React from "react";
import { Marker } from "react-google-maps";
import CyclingIcon from "./cyclingicon.png";

export default class CyclingMarker extends React.Component {

  render(){
    return(
        <Marker
          position={this.props.location}
          icon={CyclingIcon}
        >
        </Marker>
    );
  }
}