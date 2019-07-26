import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,

} from "react-google-maps";
import HikingIcon from "./adventurer.png"
// import FaAnchor from "react-icons/lib/fa/anchor";


const CyclingMap = withScriptjs(withGoogleMap((props) =>{
                    
    return (
        <GoogleMap
          defaultZoom={7}
          center={ { lat:  -37.809715, lng: 144.962871 } }
          >
          <Marker
            title = "testTitle"
            position={{ lat: -36.960210, lng: 147.155817 }}
            icon={HikingIcon}
          />

<Marker
            title = "testTitle"
            position={{ lat: -36.638920, lng: 146.980138 }}
            icon={HikingIcon}
          />

<Marker
            title = "testTitle"
            position={{ lat:-37.119078, lng: 145.846857}}
            icon={HikingIcon}
          />

<Marker
            title = "testTitle"
            position={{ lat: -37.150774, lng: 147.253456 }}
            icon={HikingIcon}
          />

<Marker
            title = "testTitle"
            position={{ lat:-36.596596, lng: 147.253456 }}
            icon={HikingIcon}
          />

<Marker
            title = "testTitle"
            position={{ lat:-36.776275, lng: 147.307546 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.758598, lng: 147.292324 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.917890, lng: 146.470556 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.224668, lng: 146.818191 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.242320, lng: 146.316461 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.893628, lng: 147.158540 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.278474, lng: 146.698445 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.669541, lng: 146.986475 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-37.114642, lng: 145.855024 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.628280, lng: 146.811226}}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-37.887935, lng: 146.453267 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.870355, lng: 147.116614 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-37.628391, lng: 145.521384 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.212344,  lng: 146.682244 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.584198,  lng: 145.730574 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-35.965086,   lng:  146.404882 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.218745,  lng: 146.321422 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-35.931509 , lng: 146.475625 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.800929 , lng: 147.295744 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.701231 , lng: 145.568629 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.586565, lng:  145.712831 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.251780 , lng: 146.370871 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.234474 , lng: 146.850772 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.243896, lng:  146.818146 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-37.036949 , lng: 146.456247 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-37.154378, lng:  146.426705 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.606455 , lng: 147.264060 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.816798 , lng: 147.319125 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.737568 , lng: 147.310831 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-37.027957  , lng: 146.447986 }}
            icon={HikingIcon}
          />
<Marker
            title = "testTitle"
            position={{ lat:-36.669436 , lng:  146.789846 }}
            icon={HikingIcon}
          />




          
  
        </GoogleMap>
      );
    }
  ))
  
  export default CyclingMap;