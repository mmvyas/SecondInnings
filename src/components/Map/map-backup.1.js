import React from 'react'
import Chart from './Chart'
import L from 'leaflet'
import './vis.css'
import lga from './vic.json'
import lgaFields from './geojsonprops.json'


export default class MapPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentLGA: null,
            chartType: 'demographic',
            colorVisType: 'population'
        }
    }



    onEachFeatures = (feature, layer) => {
        layer.on({
            // click: this.onClickFeature(feature)
            click: () => this.setState({
                currentLGA: feature.properties.lg_ply_pid
            })
        })
        layer.on({
            click: this.zoomToFeature
        });

    }

    getColor1 = (d) => {
        return d > 70000 ? '#224D17' :
            d > 60000 ? '#099441' :
                d > 50000 ? '#60A830' :
                    d > 40000 ? '#9FDA40' :
                        d > 30000 ? '#AAD197' :
                            d > 20000 ? '#D9DF1D' :
                                d > 10000 ? '#FFFFE0' :
                                    '#FFFFFF';
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

    findPopulation = (id) => {
        return (lgaFields[id].population)

    }
    findCriminal = (id) => {
        return (lgaFields[id].criminal_rate)

    }

    zoomToFeature = (e) => {
        this.map.fitBounds(e.target.getBounds());
    }

    componentDidMount() {

        this.map = L.map('map').setView([-36.86706675, 147.24201818], 7);
        var population = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox.light'
        })
        .addTo(this.map);


        let visType = this.state.colorVisType
        let styleType = null
        if (visType == 'population') {
            styleType = this.style1
            var legend = L.control({ position: 'bottomright' });

            legend.onAdd = function (map) {

                var div = L.DomUtil.create('div', 'info legend'),
                    grades = [0, 10, 20, 50, 100, 200, 500, 1000],
                    labels = [];

                // loop through our density intervals and generate a label with a colored square for each interval
                for (var i = 0; i < grades.length; i++) {
                    div.innerHTML +=
                        '<p>test1</p>';
                }

                return div;
            };

            legend.addTo(this.map);
        }
        if (visType == 'criminal') {
            styleType = this.style2
            var legend = L.control({ position: 'bottomright' });

            legend.onAdd = function (map) {

                var div = L.DomUtil.create('div', 'info legend'),
                    grades = [0, 10, 20, 50, 100, 200, 500, 1000],
                    labels = [];

                // loop through our density intervals and generate a label with a colored square for each interval
                for (var i = 0; i < grades.length; i++) {
                    div.innerHTML +=
                        '<p>test2</p>';
                }

                return div;
            };

            legend.addTo(this.map);
        }


        this.geojson = L.geoJson(lga, {
            onEachFeature: this.onEachFeatures,
            style: styleType
        }).addTo(this.map);
    }



    render() {



        return (<div className='mapChart'>
            <div id="map">
            </div>
            <Chart lga={this.state.currentLGA} />
        </div>
        )
    }

}