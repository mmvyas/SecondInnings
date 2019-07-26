import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default class ChartTest extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
          options: {
            chart: {
            zoom: {
              enabled: false
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [5, 5, 5],
            curve: 'straight',
            dashArray: [0, 5, 0]
          },

          title: {
            text: 'Page Statistics',
            align: 'left'
          },
          markers: {
            size: 0,
            
            hover: {
              sizeOffset: 6
            }
          },
          xaxis: {
            categories: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
          },
          tooltip: {
            y: [{
              title: {
                formatter: function (val) {
                  return val + " (mins)"
                }
              }
            }, {
              title: {
                formatter: function (val) {
                  return val + " per session"
                }
              }
            }, {
              title: {
                formatter: function (val) {
                  return val;
                }
              }
            }]
          },
          grid: {
            borderColor: '#f1f1f1',
          }
          },
          series: [{
            name: "Real",
            data: [1000, 1124, 1235, 1222, 1356, 1289, 1380, 1489, null, null, null, null, null]
          },
          {
            name: "Predict",
            data: [null, null, null, null, null, null, null, 1489, 1503, 1423, 1590, 1632, 1678]
          },
       
        ],
        }
      }

      render() {

        return (
          

          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="350" />
          </div>
  

        );
      }
    }

  