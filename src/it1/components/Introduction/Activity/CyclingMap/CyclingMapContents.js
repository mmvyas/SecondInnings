import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,

} from "react-google-maps";
import CyclingIcon from "./cyclingicon.png"
// import FaAnchor from "react-icons/lib/fa/anchor";


const CyclingMap = withScriptjs(withGoogleMap((props) =>{
                    
    return (
        <GoogleMap
          defaultZoom={7}
          center={ { lat:  -37.809715, lng: 144.962871 } }
          >
          <Marker
            title = "testTitle"
            position={{ lat: -35.978382, lng: 146.885724 }}
            icon={CyclingIcon}
          />

<Marker
            title = "testTitle"
            position={{ lat: -37.150113, lng: 146.317842 }}
            icon={CyclingIcon}
          />

<Marker
            title = "testTitle"
            position={{ lat:-37.146319, lng: 146.445769 }}
            icon={CyclingIcon}
          />

<Marker
            title = "testTitle"
            position={{ lat: -38.677534, lng: 146.456433 }}
            icon={CyclingIcon}
          />

<Marker
            title = "testTitle"
            position={{ lat: -36.701477, lng: 144.275700 }}
            icon={CyclingIcon}
          />


          
  
        </GoogleMap>
      );
    }
  ))
  
  export default CyclingMap;