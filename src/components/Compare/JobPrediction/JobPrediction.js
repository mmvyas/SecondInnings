import Select from 'react-select';
import React from 'react'
import './JobPrediction.css'
import makeAnimated from 'react-select/lib/animated';
import ReactApexChart from 'react-apexcharts'
import { Modal } from 'react-bootstrap'


export default class JobPrediction extends React.Component {
  constructor(props) {
    super(props);

    let jobIndustry = this.props.Industry
    console.log(jobIndustry)
    this.state = {
      Job: jobIndustry,
      multiValue: null,
      options: {
        chart: {
          zoom: {
            enabled: false
          },
        },

        dataLabels: {
          enabled: true
        },
        stroke: {
          width: [5, 5, 5, 5],
          curve: 'straight',
          dashArray: [0, 5, 0, 5]
        },

        title: {
          text: 'Job Employments',
          align: 'left'
        },
        markers: {
          size: 0,

          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        },
        tooltip: {
          y: [{
            title: {
              formatter: function (val) {
                return val
              }
            }
          }, {
            title: {
              formatter: function (val) {
                return val
              }
            }
          }, {
            title: {
              formatter: function (val) {
                return val;
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
      pred_jobs: null,
      pred_job_growth: null,
      series: [{
        name: "Real",
        data: [null, null, null, null, null, null, null, null, null]
      },
      {
        name: "Predict",
        data: [null, null, null, null, null, null, null, null, null]
      }]



    };
    this.handleMultiChange = this.handleMultiChange.bind(this);

  }
  componentDidUpdate(previousProps, previousState) {

    if (previousProps.SelectRegion !== this.props.SelectRegion) {
      console.log('change props')
      this.setState({
        multiValue: [{ 'value': this.props.SelectRegion, 'label': this.props.SelectRegionName }]
      })
    }

    if (previousState.multiValue !== this.state.multiValue) {
      if (this.state.multiValue.length === 1) {
        console.log('change length')
        const industry = this.props.Industry
        var multipleSeries = []
        // for (var i = 0; i <this.state.multiValue.length;i++){
        let regionId0 = this.state.multiValue[0].value
        let regionName0 = this.state.multiValue[0].label
        let url = 'https://scin-model-dev.appspot.com/predemp?jin=' + industry + '&lgaid=' + regionId0
        var res = encodeURI(url);
        var x = new XMLHttpRequest();
        x.open('GET', res);
        x.onload = x.onerror = function () {
          var data = x.responseText;
          var jsonResponse
          jsonResponse = JSON.parse(data);
          multipleSeries.push({
            name: "Job employment projection in " + jsonResponse.sa4,
            data: jsonResponse.real
          })
          multipleSeries.push({
            name: "Predicted Job employment projection in" + jsonResponse.sa4,
            data: jsonResponse.predicted
          })

          console.log(multipleSeries)
          this.setState({
            series: multipleSeries,
            pred_jobs: jsonResponse.pred_jobs,
            pred_job_growth: jsonResponse.pred_job_growth,
            SA4: jsonResponse.sa4

          })
        }.bind(this)
        x.send();
      }
    }

    // else if (this.state.multiValue.length > 1){
    //   const industry = this.props.Industry
    //   var multipleSeries = []
    // // for (var i = 0; i <this.state.multiValue.length;i++){
    //   let regionId0 = this.state.multiValue[0].value
    //   let regionName0 = this.state.multiValue[0].label
    //   let url = 'https://scin-reg-model.appspot.com/predemp?jin=' + industry + '&rid=' + regionId0
    //   var res = encodeURI(url);
    //   var x = new XMLHttpRequest();
    //   x.open('GET', res);
    //   x.onload = x.onerror = function () {
    //   var data = x.responseText;
    //   var jsonResponse
    //   jsonResponse = JSON.parse(data);
    //   multipleSeries.push({
    //     name: "Real job employments in " + regionName0,
    //     data: jsonResponse.real
    //   })

    //   console.log(multipleSeries)

    // }.bind(this)
    // x.send();

    //   let regionId1 = this.state.multiValue[1].value
    //   let regionName1 = this.state.multiValue[1].label
    //   let url1 = 'https://scin-reg-model.appspot.com/predemp?jin=' + industry + '&rid=' + regionId1
    //   var res1 = encodeURI(url1);
    //   var y = new XMLHttpRequest();
    //   y.open('GET', res1);
    //   y.onload = y.onerror = function () {
    //   var data1 = y.responseText;
    //   var jsonResponse1
    //   jsonResponse1 = JSON.parse(data1);
    //   multipleSeries.push({
    //     name: "Real job employments in " + regionName1,
    //     data: jsonResponse1.real
    //   })

    //   console.log(multipleSeries)
    //   this.setState({
    //     series: multipleSeries
    //   })
    // }.bind(this)
    // y.send();

    // }


  }

  handleMultiChange(option) {
    this.setState(state => {
      return {
        multiValue: option
      };
    });
  }

  JobSelectionChanged = (e) => {
    this.setState({
      Job: e.value
    });
  }

  render() {
    const industry = [
      {
        "label": "Not concern",
        "value": ""
      },
      {
        "label": "Accommodation and Food Services",
        "value": "Accommodation and Food Services"
      },
      {
        "label": "Administrative and Support Services",
        "value": "Administrative and Support Services"
      },
      {
        "label": "Agriculture Forestry and Fishing",
        "value": "Agriculture Forestry and Fishing"
      },
      {
        "label": "Arts and Recreation Services",
        "value": "Arts and Recreation Services"
      },
      {
        "label": "Construction",
        "value": "Construction"
      },
      {
        "label": "Education and Training",
        "value": "Education and Training"
      },
      {
        "label": "Electricity Gas Water and Waste Services",
        "value": "Electricity Gas Water and Waste Services"
      },
      {
        "label": "Financial and Insurance Services",
        "value": "Financial and Insurance Services"
      },
      {
        "label": "Health Care and Social Assistance",
        "value": "Health Care and Social Assistance"
      },
      {
        "label": "Information Media and Telecommunications",
        "value": "Information Media and Telecommunications"
      },
      {
        "label": "Manufacturing",
        "value": "Manufacturing"
      },
      {
        "label": "Mining",
        "value": "Mining"
      },

      {
        "label": "Professional Scientific and Technical Services",
        "value": "Professional Scientific and Technical Services"
      },
      {
        "label": "Public Administration and Safety",
        "value": "Public Administration and Safety"
      },
      {
        "label": "Rental Hiring and Real Estate Services",
        "value": "Rental Hiring and Real Estate Services"
      },
      {
        "label": "Retail Trade",
        "value": "Retail Trade"
      },
      {
        "label": "Transport Postal and Warehousing",
        "value": "Transport Postal and Warehousing"
      },
      {
        "label": "Wholesale Trade",
        "value": "Wholesale Trade"
      },
      {
        "label": "Other Services",
        "value": "Other Services"
      }
    ]
    function log(value) {
      console.log(value); //eslint-disable-line
    }

    const lgalist = [
      {
        "label": "ALPINE",
        "value": 451
      },
      {
        "label": "ARARAT",
        "value": 593
      },
      {
        "label": "BALLARAT",
        "value": 599
      },
      {
        "label": "BASS COAST",
        "value": 351
      },
      {
        "label": "BAW BAW",
        "value": 605
      },
      {
        "label": "BENALLA",
        "value": 556
      },
      {
        "label": "BULOKE",
        "value": 587
      },
      {
        "label": "CAMPASPE",
        "value": 588
      },
      {
        "label": "CENTRAL GOLDFIELDS",
        "value": 591
      },
      {
        "label": "COLAC OTWAY",
        "value": 582
      },
      {
        "label": "CORANGAMITE",
        "value": 475
      },
      {
        "label": "EAST GIPPSLAND",
        "value": 466
      },
      {
        "label": "GANNAWARRA",
        "value": 506
      },
      {
        "label": "GLENELG",
        "value": 544
      },
      {
        "label": "GOLDEN PLAINS",
        "value": 484
      },
      {
        "label": "GREATER BENDIGO",
        "value": 589
      },
      {
        "label": "GREATER GEELONG",
        "value": 601
      },
      {
        "label": "GREATER SHEPPARTON",
        "value": 576
      },
      {
        "label": "HEPBURN",
        "value": 594
      },
      {
        "label": "HINDMARSH",
        "value": 562
      },
      {
        "label": "HORSHAM",
        "value": 566
      },
      {
        "label": "INDIGO",
        "value": 492
      },
      {
        "label": "LATROBE",
        "value": 574
      },
      {
        "label": "LODDON",
        "value": 563
      },
      {
        "label": "MACEDON RANGES",
        "value": 432
      },
      {
        "label": "MANSFIELD",
        "value": 603
      },
      {
        "label": "MILDURA",
        "value": 520
      },
      {
        "label": "MITCHELL",
        "value": 584
      },
      {
        "label": "MOIRA",
        "value": 491
      },
      {
        "label": "MOORABOOL",
        "value": 600
      },
      {
        "label": "MOUNT ALEXANDER",
        "value": 585
      },
      {
        "label": "MOYNE",
        "value": 560
      },
      {
        "label": "MURRINDINDI",
        "value": 554
      },
      {
        "label": "MURRINDINDI",
        "value": 353
      },
      {
        "label": "NORTHERN GRAMPIANS",
        "value": 590
      },
      {
        "label": "PYRENEES",
        "value": 592
      },
      {
        "label": "QUEENSCLIFFE",
        "value": 413
      },
      {
        "label": "SOUTH GIPPSLAND",
        "value": 579
      },
      {
        "label": "SOUTHERN GRAMPIANS",
        "value": 525
      },
      {
        "label": "STRATHBOGIE",
        "value": 577
      },
      {
        "label": "SURF COAST",
        "value": 583
      },
      {
        "label": "SWAN HILL",
        "value": 586
      },
      {
        "label": "TOWONG",
        "value": 410
      },
      {
        "label": "WANGARATTA",
        "value": 602
      },
      {
        "label": "WARRNAMBOOL",
        "value": 304
      },
      {
        "label": "WELLINGTON",
        "value": 597
      },
      {
        "label": "WEST WIMMERA",
        "value": 522
      },
      {
        "label": "WODONGA",
        "value": 493
      },
      {
        "label": "YARRIAMBIACK",
        "value": 474
      }
    ]
    const { industrySelectedOption } = this.state.Job;

    let seekLink = null
    if(this.state.multiValue !== null){
      const industry = this.props.Industry
      const lgaName =  this.state.multiValue[0].label
      let replaced1 = industry.split(' ').join('-')
      let replaced2 = lgaName.split(' ').join('-')

      seekLink = 'https://www.seek.com.au/'+ replaced1 + '-jobs/in-' + replaced2

    console.log(seekLink)
    }
    


    // return (


    //   <div id='JobPrediction'>
    //     <div className="jobPredictionChart">
    //       <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="400" />
    //     </div>

    //   </div>
    // )

    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title" style={{ color: '#4c4c4c' }}>
          {this.props.Industry} Job Employment Chart with Future Job Projection of {this.state.SA4}
      </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <div id='JobPrediction'>
        <p>({this.props.SelectRegionName} is a part of {this.state.SA4} main region)</p>
        <div className="jobPredictionChart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="400" />
        </div>
        <div className = 'seek'>
        <a href={seekLink} target="_blank">See {this.props.Industry} job posting in the area in seek.com</a>
        </div>

      </div>
        </Modal.Body>

      </Modal>
    )
  }
}