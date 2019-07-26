import React from "react";

import CyclingIcon from "./cyclingicon.png"
// import FaAnchor from "react-icons/lib/fa/anchor";


export default class CyclingMap extends React.Component {

  // addMarker = (cyclings) => {
  //   for (var i = 0; i < cyclings.length; i++) {
  //     var contentString = '<div id="content"><h1>' + cyclings[i].placeName +
  //       '</h1><p>Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.</p></div>';

  //     const marker = new window.google.maps.Marker({
  //       position: cyclings[i].LatLng[0],
  //       map: map
  //     });

  //     const infowindow = new window.google.maps.InfoWindow({
  //       content: contentString,
  //       maxWidth: 200
  //     });

  //     marker.addListener('click', function () {
  //       this.closeOtherInfo
  //       infowindow.open(marker.get('cyclingmap'), marker);
  //       InforObj[0] = infowindow;
  //     }.bind(this)
  //     );

  //   }
  // }


  

  componentDidMount() {
    var map;
    var InforObj = []
    var centerCords = {
      lat: -37.150113,
      lng: 145.577728
    };

    map = new window.google.maps.Map(document.getElementById('cyclingmap'), {
      zoom: 7,
      center: centerCords
    });
    const cyclings = [
      {
        title: "High Country Rail Trail",
        LatLng: [{
          lat: -35.978382,
          lng: 146.885724,
        }], length: "35km"
      },
      {
        title: "Great Victorian Rail Trail",
        LatLng: [{
          lat: -37.150113,
          lng: 145.577728,
        }], length: "134km"
      },
      {
        title: "Murray to Mountains Rail",
        LatLng: [{
          lat: -36.361175,
          lng: 146.317842,
        }], length: "100km"
      },
      {
        title: "Copperhead",
        LatLng: [{
          lat: -37.146319,
          lng: 146.445769,
        }], length: "3km"
      },
      {
        title: "Great Southern Rail Trail",
        LatLng: [{
          lat: -38.677534,
          lng: 146.456433,
        }], length: "72km"
      },
      {
        title: "The Goldfields Track",
        LatLng: [{
          lat: -36.701477,
          lng: 144.2757,
        }], length: "210km"
      }
    ]
    for (var i = 0; i < cyclings.length; i++) {
      var contentString = '<div id="content"><h5>' + cyclings[i].title +
        '</h5><p>Length: '+ cyclings[i].length +'</p></div>';

      const marker = new window.google.maps.Marker({
        position: cyclings[i].LatLng[0],
        map: map
      });

      const infowindow = new window.google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200
      });

      marker.addListener('click', function () {
        if (InforObj.length > 0) {
          /* detach the info-window from the marker ... undocumented in the API docs */
          InforObj[0].set("marker", null);
          /* and close it */
          InforObj[0].close();
          /* blank the array */
          InforObj.length = 0;
        }
        infowindow.open(marker.get('cyclingmap'), marker);
        InforObj[0] = infowindow;
      }.bind(this)
      )

      // closeOtherInfo =()=> {
      //   if (InforObj.length > 0) {
      //     /* detach the info-window from the marker ... undocumented in the API docs */
      //     InforObj[0].set("marker", null);
      //     /* and close it */
      //     InforObj[0].close();
      //     /* blank the array */
      //     InforObj.length = 0;
      //   }
      // }

    }


  }
  render() {
    return (
      <div style={{ width: 600, height: 600 }} id="cyclingmap"></div>
    )

  }


}


