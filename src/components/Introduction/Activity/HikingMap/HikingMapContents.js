import React from "react";

// import FaAnchor from "react-icons/lib/fa/anchor";


export default class HikingMapContents extends React.Component {

  // addMarker = (hikings) => {
  //   for (var i = 0; i < hikings.length; i++) {
  //     var contentString = '<div id="content"><h1>' + hikings[i].placeName +
  //       '</h1><p>Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.</p></div>';

  //     const marker = new window.google.maps.Marker({
  //       position: hikings[i].LatLng[0],
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
      lat: -36.25178,
      lng: 146.370871
    };

    map = new window.google.maps.Map(document.getElementById('hikingmap'), {
      zoom: 7,
      center: centerCords
    });
    const hikings = [
      {
        title: "Woolshed Falls",
        LatLng: [{ lat: -36.212344,
        lng: 146.682244,
        }],FIELD4: ""
      },
      {
        title: "The Heritage Walk - Violet Town",
        LatLng: [{ lat: -36.584198,
        lng: 145.730574,
        }],FIELD4: ""
      },
      {
        title: "Wahgunyah River Walking and Cycle Trail",
        LatLng: [{ lat: -35.965086,
        lng: 146.404882,
        }],FIELD4: ""
      },
      {
        title: "Bush Tucker Garden - Bullawah Cultural Trail",
        LatLng: [{ lat: -36.218745,
        lng: 146.321422,
        }],FIELD4: "`"
      },
      {
        title: "Rutherglen Gold Battery Walk",
        LatLng: [{ lat: -35.931509,
        lng: 146.475625,
        }],FIELD4: ""
      },
      {
        title: "Falls to Hotham Alpine Crossing",
        LatLng: [{ lat: -36.800929,
        lng: 147.295744,
        }],FIELD4: ""
      },
      {
        title: "Euroa Apex Walking Track",
        LatLng: [{ lat: -36.701231,
        lng: 145.568629,
        }],FIELD4: ""
      },
      {
        title: "Honeysuckle Creek Walking Track",
        LatLng: [{ lat: -36.586565,
        lng: 145.712831,
        }],FIELD4: ""
      },
      {
        title: "Ovens Riverside Path & Bullawah Cultural Trail",
        LatLng: [{ lat: -36.25178,
        lng: 146.370871,
        }],FIELD4: ""
      },
      {
        title: "Yackandandah Lions Walk",
        LatLng: [{ lat: -36.234474,
        lng: 146.850772,
        }],FIELD4: ""
      },
      {
        title: "Benalla Heritage Trail",
        LatLng: [{ lat: -36.509912,
        lng: 145.984538,
        }],FIELD4: ""
      },
      {
        title: "Yackandandah Gorge Scenic Walk",
        LatLng: [{ lat: -36.243896,
        lng: 146.818146,
        }],FIELD4: ""
      },
      {
        title: "7 Peaks Run",
        LatLng: [{ lat: -37.036949,
        lng: 146.456247,
        }],FIELD4: ""
      },
      {
        title: "Howqua River, The Bluff Trail",
        LatLng: [{ lat: -37.154378,
        lng: 146.426705,
        }],FIELD4: "Length: 8km"
      },
      {
        title: "Mt Bogong via Staircase Spur Trail",
        LatLng: [{ lat: -36.606455,
        lng: 147.26406,
        }],FIELD4: "Length: 8km"
      },
      {
        title: "Wallaces Heritage Trail",
        LatLng: [{ lat: -36.816798,
        lng: 147.319125,
        }],FIELD4: "Length: 6km"
      },
      {
        title: "Falls to Hotham Alpine Crossing",
        LatLng: [{ lat: -36.737568,
        lng: 147.310831,
        }],FIELD4: ""
      },
      {
        title: "Mount Buller to Mt Stirling Trail",
        LatLng: [{ lat: -37.027957,
        lng: 146.447986,
        }],FIELD4: "Length: 7km"
      },
      {
        title: "The Horn Trail",
        LatLng: [{ lat: -36.669436,
        lng: 146.789846,
        }],FIELD4: "Length: 750m"
      }
     ]
    for (var i = 0; i < hikings.length; i++) {
      var contentString = '<div id="content"><h5>' + hikings[i].title +
        '</h5><p>'+ hikings[i].FIELD4 +'</p></div>';

      const marker = new window.google.maps.Marker({
        position: hikings[i].LatLng[0],
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
        infowindow.open(marker.get('hikingmap'), marker);
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
      <div style={{ width: 600, height: 600 }} id="hikingmap"></div>
    )

  }


}


