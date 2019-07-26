import React from 'react'
import L from 'leaflet'
import lga from './vic-simplist.json'
export default class MapPage extends React.Component {
    constructor(props) {
        super(props)

    // }
    }



    
    // highlightFeature = (e) =>{
    //     var layer = e.target;
    
    //     layer.setStyle({
    //         // weight: 5,
    //         fillColor: '#990000'
    //         // dashArray: ''
    //         // fillOpacity: 0.7
    //     });
    
    //     if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    //         layer.bringToFront();
    //     }
    //     this.info.update(layer.feature.properties)

    // }

    // resetHighlight = (e) => {

    //     this.geojson.setStyle(
    //         this.style1
    //     );
    //     this.info.update()
    // }


    componentDidMount() {
        if(this.map) {
            this.map.remove();
          }
          else{
        this.map = L.map('map').setView([-36.202806, 144.990440], 6);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox.light'
        })
            .addTo(this.map);

            this.info = L.control();

            this.info.onAdd = function (map) {
                this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
                this.update();
                 return this._div;
            };
            
            this.info.update = function (props) {
                const id = (props ?
                    props.lg_ply_pid
                    : null)
                
                    
                this._div.innerHTML = '<h4>Information of the area</h4>' +  (props ?
                '<b>' + 'Name: ' + props. vic_lga__3 + '</b><br />'
                 + 'Population: ' + "test" 
                
                : 'Hover over a state');
};

this.info.addTo(this.map);
        
        

        this.geojson = L.geoJson(lga, {
            onEachFeature: this.onEachFeatures,
            style: this.style1
        }).addTo(this.map);

        
    }
    }





    render() {

        return (<div className='mapChart'>
            <div id="map">
            </div>
        </div>
        )
    }

}