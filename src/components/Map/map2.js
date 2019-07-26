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
        console.log(choosedArea)
        if (choosedArea !== null){
            console.log("check")
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
        layer.on({
            // click: this.onClickFeature(feature)
            click: () => this.setState({
                currentLGA: feature.properties.lg_ply_pid,
                currentLGAName: feature.properties.vic_lga__3
            })
        })
        layer.on({
            click: this.zoomToFeature
        });

    }


    getColor2 = (d) => {
        return d > 150 ? '#800026' :
            d > 130 ? '#BD0026' :
                d > 110 ? '#E31A1C' :
                    d > 90 ? '#FC4E2A' :
                        d > 70 ? '#FD8D3C' :
                            d > 50 ? '#FEB24C' :
                                d > 30 ? '#FED976' :
                                    '#FFEDA0';
    }

    style2 = (feature) => {
        return {
            fillColor: this.getColor2(this.findCriminal(feature.properties.lg_ply_pid)),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };

    }

    findCriminal = (id) => {
        return (lgaFields[id].criminal_rate)

    }

    zoomToFeature = (e) => {
        this.map.fitBounds(e.target.getBounds());
    }

    componentDidMount() {
        const displayArea = this.props.lgas
        console.log(displayArea)
        let fiveGeoJson = null
        if (displayArea != null){
        let displayGeoJson = []
        for (var i = 0; i<displayArea.topFiveAreas.length;i++){
            for (var j = 0; j<lga.features.length;j++){
                if (displayArea.topFiveAreas[i].Lg_Ply_Pid == lga.features[j].properties.lg_ply_pid){
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


        let styleType = null
        
            styleType = this.style2
            var legend = L.control({ position: 'bottomright' });

            legend.onAdd = function (map) {
                var div = L.DomUtil.create('div', 'info legend')
                div.innerHTML =
                '<i style="background:#FFEDA0"></i> 0–30<br>'+
                '<i style="background:#FED976"></i> 30-50<br>'+
                '<i style="background:#FEB24C"></i> 50-70<br>'+
                '<i style="background:#FD8D3C"></i> 70-90<br>'+
                '<i style="background:#FC4E2A"></i> 90-110<br>'+
                '<i style="background:#E31A1C"></i> 110-130<br>'+
                '<i style="background:#BD0026"></i> 130-150<br>'+
                '<i style="background:#800026"></i> 150+</div>'

                return div;
            };

            legend.addTo(this.map);
        


        this.geojson = L.geoJson(fiveGeoJson, {
            onEachFeature: this.onEachFeatures,
            style: styleType
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