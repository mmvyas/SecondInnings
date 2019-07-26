import React from 'react'
import Chart from './Chart'
import L from 'leaflet'
import './vis.css'
import lga from './vic-simplist.json'
import lgaFields from './geojsonprops.json'


export default class MapPage extends React.Component {
    constructor(props) {
        super(props)
        const choosedArea = this.props.chooseArea 
        if (choosedArea !== null){
            this.state({
                currentLGA: choosedArea.id,
                currentLGAName: choosedArea.name
            })
        }
        else{
        this.state = {
            currentLGA: null,
            currentLGAName: null

        }
    }
    }



    onEachFeatures = (feature, layer) => {
        // var circleMarker = L.marker(layer.getBounds().getCenter());
        // circleMarker.bindPopup(feature.properties.vic_lga__3 + <br/> + feature.properties.lg_ply_pid, { permanent: true})
  
        // circleMarker.on(
        //     { click: this.zoomToFeatureMarker
        // });

        // circleMarker.addTo(this.map);
    
        layer.on({            
            click: () => this.setState({
                currentLGA: feature.properties.lg_ply_pid,
                currentLGAName: feature.properties.vic_lga__3
            })
        })

        layer.on({
            click: this.zoomToFeature
        });
        layer.on({
            click: this.resetHighlight
        });

        layer.on({
            click: this.highlightFeature
        });

    }

    style1 = (feature) => {
        return {
            fillColor: this.getColor1(this.findPopulation(feature.properties.lg_ply_pid)),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };

    }



    findPopulation = (id) => {
        return (lgaFields[id].population)

    }

    zoomToFeature = (e) => {
        this.map.fitBounds(e.target.getBounds());
        console.log(e.target)
    }


    highlightFeature = (e) =>{
        var layer = e.target;
    
        layer.setStyle({
            // weight: 5,
            fillColor: '#2471A3'
            // dashArray: ''
            // fillOpacity: 0.7
        });
    
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
        this.info.update(layer.feature.properties)

    }

    resetHighlight = (e) => {

        this.geojson.setStyle(
            this.style1
        );
        this.info.update()
    }


    getColor1 = (d) => {
        return d > 100000 ? '#224D17' :
            d > 80000 ? '#099441' :
                d > 60000 ? '#60A830' :
                    d > 40000 ? '#9FDA40' :
                        d > 20000 ? '#AAD197' :
                                    '#D9DF1D';
    }
    componentDidMount() {
        const displayArea = this.props.lgas
        let fiveGeoJson = null
        if (displayArea != null){
        let displayGeoJson = []
        for (var i = 0; i<displayArea.topFiveAreas.length;i++){
            for (var j = 0; j<lga.features.length;j++){
                if (displayArea.topFiveAreas[i].id == lga.features[j].properties.lg_ply_pid){
                displayGeoJson.push(lga.features[j])
                }
            }
        }
        fiveGeoJson = {"type":"FeatureCollection", "features": []}
        fiveGeoJson.features = displayGeoJson
    }
    else{
        fiveGeoJson = lga
    }
   
        this.map = L.map('map').setView([-36.202806, 144.990440], 7);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox.light'
        })
            .addTo(this.map);
            var legend = L.control({ position: 'bottomright' });

            legend.onAdd = function (map) {
                var div = L.DomUtil.create('div', 'legend')
                div.innerHTML =

                    '<i style="background:#D9DF1D"></i> 0–20000<br>' +
                    '<i style="background:#AAD197"></i> 20000-40000<br>' +
                    '<i style="background:#9FDA40"></i> 40000-60000<br>' +
                    '<i style="background:#60A830"></i> 60000-80000<br>' +
                    '<i style="background:#099441"></i> 80000-100000<br>' +
                    '<i style="background:#224D17"></i> >100000</div>'

                return div;
            };
            legend.addTo(this.map);

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
                
                const population = (props ?
                    lgaFields[id].population
                    : null)
                    
                this._div.innerHTML = '<h4>Information of the area</h4>' +  (props ?
                '<b>' + 'Name: ' + props. vic_lga__3 + '</b><br />'
                 + 'Population: ' + population 
                
                : 'Hover over a state');
};

this.info.addTo(this.map);
        
        

        this.geojson = L.geoJson(fiveGeoJson, {
            onEachFeature: this.onEachFeatures,
            style: this.style1
        }).addTo(this.map);

        

    }





    render() {

        return (<div className='mapChart'>
            <div id="map">
            </div>
            <Chart lga={this.state.currentLGA}
                    lgaName = {this.state.currentLGAName} />
        </div>
        )
    }

}