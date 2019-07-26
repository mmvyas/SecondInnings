import React from 'react';
import './Samplecard.css';
import { Image } from 'react-bootstrap';
import MapChart from './MapChart'
import { OverlayTrigger } from 'react-bootstrap'


export default class SampleCard extends React.Component {
  constructor(props) {
    
    super(props)
    this.state = {
      criminalShow: false,
      hospitalShow: false,
      jobShow: false,

    }

    this.handleHospitalShow = () => {
      this.setState({ hospitalShow: true });
    };
    this.handleJobShow = () => {
      this.setState({ jobShow: true });
    };
    this.handleCriminalShow = () => {
      this.setState({ criminalShow: true });
    };

    this.handleHide = () => {
      this.setState({
        criminalShow: false,
        hospitalShow: false,
        jobShow: false

      });
    };




  }

  render() {
   
    let hospital = null
    if (this.props.hospitalNumber > 5) {
      hospital = <div className="column">
       
        <div className="Samplecard">
        
          <span className="info"><i onClick={this.handleHospitalShow} className="material-icons" data-toggle="tooltip" title="View Hospitals" >info</i></span>

          <h3>Hospitals</h3>
          <p>{this.props.hospitalNumber}</p>
          <div className = "iconGroup">
          <Image src="/assets/Ghospital.png" width='30' height='30'></Image>

          </div>
        </div>
      </div>
    }

    else if (this.props.hospitalNumber <= 5 && this.props.hospitalNumber > 1) {
      hospital = <div className="column">
        <div className="Samplecard">
          <span className="info"><i onClick={this.handleHospitalShow} className="material-icons" data-toggle="tooltip" title="View Hospitals" >info</i></span>

          <h3>Hospitals</h3>
          <p>{this.props.hospitalNumber}</p>
          <div className = "iconGroup">
          <Image src="/assets/Ohospital.png" width='30' height='30'></Image>
          </div>
          </div>
        </div>
            }

    else if (this.props.hospitalNumber < 2) {
      hospital = <div className="column">
        <div className="Samplecard">
          <span className="info"><i onClick={this.handleHospitalShow} className="material-icons" data-toggle="tooltip" title="View Hospitals" >info</i></span>

          <h3>Hospitals</h3>
          <p>{this.props.hospitalNumber}</p>
          <div className = "iconGroup">
          <Image src="/assets/Rhospital-buildings.png" width='30' height='30'></Image>
          </div>

        </div>
      </div>
    }

    let distance = null
    if (this.props.distance > 300.75) {
      distance = <div className="column">
        <div className="Samplecard">
          <h3>Distance to City</h3>
          <p>{this.props.distance} km</p>
          <div className = "iconGroup">
          <Image src="/assets/Rroad.png" width='35' height='30'></Image>

          </div>
        </div>
      </div>

    }

    else if (this.props.distance <= 300.75 && this.props.distance >= 138.75) {
      distance = <div className="column">
        <div className="Samplecard">
          <h3>Distance to City</h3>
          <p>{this.props.distance} km</p>
          <div className = "iconGroup">
          <Image src="/assets/Oroad.png" width='35' height='30'></Image>
          </div>
        </div>
      </div>
    }

    else if (this.props.distance < 138.75) {
      distance = <div className="column">
        <div className="Samplecard">
          <h3>Distance to City</h3>
          <p>{this.props.distance} km</p>
          <div className = "iconGroup">
          <Image src="/assets/Groad.png" width='35' height='30'></Image>
          </div>
        </div>
      </div>
    }

    let housePrice = null
    if (this.props.housePrice >= 889402) {
      housePrice = <div className="column">
        <div className="Samplecard">
          <h3>House Price</h3>
          <p>${this.props.housePrice}</p>
          <div className = "iconGroup">
          <Image src="/assets/Rhouse.png" width='30' height='30'></Image>

          </div>
        </div>
      </div>
    }

    else if (this.props.housePrice <= 889402 && this.props.housePrice >= 246560.25) {
      housePrice = <div className="column">
        <div className="Samplecard">
          <h3>House Price</h3>
          <p>${this.props.housePrice}</p>
          <div className = "iconGroup">
          <Image src="/assets/Ohouse.png" width='30' height='30'></Image>
          </div>
        </div>
      </div>
    }

    else if (this.props.housePrice < 246560.25) {
      housePrice = <div className="column">
        <div className="Samplecard">
          <h3>House Price</h3>
          <p>${this.props.housePrice}</p>
          <div className = "iconGroup">
          <Image src="/assets/Ghouse.png" width='30' height='30'></Image>
          </div>
        </div>
      </div>
    }

    
    let jobNumber = null
    if (this.props.jobExist) {
      
    let jobIndustry = this.props.job
    let jobIndustryInCard = null
    let jobHoveron = jobIndustry + " Jobs"
    if (jobIndustry.length > 10) {
      jobIndustryInCard = jobIndustry.substring(0, 10) + '... '
    }

    else {
      jobIndustryInCard = jobIndustry
    }

    const renderJobTooltip = props => (
      <div
        {...props}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          padding: '2px 10px',
          color: 'white',
          borderRadius: 3,
          ...props.style,
        }}
      >
        {jobHoveron}
      </div>
    );
      if (this.props.jobNumber > this.props.jobv2) {
        jobNumber = <div className="column">
          <div className="Samplecard">
            <span className="info"><i onClick={this.props.jobClick} className="material-icons" data-toggle="tooltip" title="View Job Prediction">info</i></span>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderJobTooltip}
            >
              <h3>{jobIndustryInCard}</h3>
            </OverlayTrigger>
            
            <p>{this.props.jobNumber}</p>
            <div className = "iconGroup">
            <Image src="/assets/Gportfolio.png" width='30' height='30'></Image>

            </div>
          </div>
        </div>
      }

      else if (this.props.jobNumber <= this.props.jobv2 && this.props.jobNumber >= this.props.jobv1) {
        jobNumber = <div className="column">
          <div className="Samplecard">
            <span className="info"><i onClick={this.props.jobClick} className="material-icons" data-toggle="tooltip" title="View Job Prediction" >info</i></span>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderJobTooltip}
            >
              <h3>{jobIndustryInCard}</h3>
            </OverlayTrigger>
            
            <p>{this.props.jobNumber}</p>
            <div className = "iconGroup">
            <Image src="/assets/Oportfolio.png" width='30' height='30'></Image>
            </div>
          </div>
        </div>
      }

      else if (this.props.jobNumber < this.props.jobv1) {
        jobNumber = <div className="column">
          <div className="Samplecard">
            <span className="info"><i onClick={this.props.jobClick} className="material-icons" data-toggle="tooltip" title="View Job Prediction" >info</i></span>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderJobTooltip}
            >
              <h3>{jobIndustryInCard}</h3>
            </OverlayTrigger>
            <p>{this.props.jobNumber}</p>
            <div className = "iconGroup">
            <Image src="/assets/Rportfolio.png" width='30' height='30'></Image>
            </div>
          </div>
        </div>
      }
    }

    let criminalRate = null
    let criminalRateNumber = this.props.criminal.toString().substring(0,4)

    if (this.props.criminal > 1.0835245485) {
      criminalRate = <div className="column">
        <div className="Samplecard">
          <span className="info"><i onClick={this.handleCriminalShow} className="material-icons" data-toggle="tooltip" title="View Crime Rate" >info</i></span>

          <h3>Criminal Rate</h3>
          <p>{criminalRateNumber}%</p>
          <div className = "iconGroup">
          <Image src="/assets/Rthief.png" width='30' height='30'></Image>

          </div>
        </div>
      </div>
    }

    else if (this.props.criminal >= 0.6544539574999999 && this.props.criminal <= 1.0835245485) {
      criminalRate = <div className="column">
        <div className="Samplecard">
          <span className="info"><i onClick={this.handleCriminalShow} className="material-icons" data-toggle="tooltip" title="View Crime Rate" >info</i></span>

          <h3>Criminal Rate</h3>
          <p>{criminalRateNumber}%</p>
          <div className = "iconGroup">
          <Image src="/assets/Othief.png" width='30' height='30'></Image>
          </div>
        </div>
      </div>
    }

    else if (this.props.criminal < 0.6544539574999999) {
      criminalRate = <div className="column">
        <div className="Samplecard">
          <span className="info"><i onClick={this.handleCriminalShow} className="material-icons" data-toggle="tooltip" title="View Crime Rate" >info</i></span>
          <h3>Criminal Rate</h3>
          <p>{criminalRateNumber}%</p>
          <div className = "iconGroup">
          <Image src="/assets/Gthief.png" width='30' height='30'></Image>
          </div>
        </div>
      </div>
    }

    
    let nationality = null
    if (this.props.cultureExist) {
      
    let cultureTooltip = 'People from ' + this.props.cultureName
    const renderNationlityTooltip = props => (
      <div
        {...props}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          padding: '2px 10px',
          color: 'white',
          borderRadius: 3,
          ...props.style,
        }}
      >
        {cultureTooltip}
      </div>
    );
      let nationalityName = this.props.cultureName
    let nationalityNameInCard = null
    if (nationalityName.length > 10) {
      nationalityNameInCard = nationalityName.substring(0, 10) + '... '
    }

    else {
      nationalityNameInCard = nationalityName
    }
      if (this.props.cultureNumber > this.props.popv2) {
        nationality = <div className="column">
          <div className="Samplecard">
          <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderNationlityTooltip}
            >
              <h3>{nationalityNameInCard}</h3>
            </OverlayTrigger>

            <p>{this.props.cultureNumber}</p>
            <div className = "iconGroup">
            <Image src="/assets/Gpeople.png" width='35' height='30'></Image>

            </div>
          </div>
        </div>
      }

      else if (this.props.cultureNumber >= this.props.popv1 && this.props.cultureNumber <= this.props.popv2) {
        nationality = <div className="column">
          <div className="Samplecard">
          <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderNationlityTooltip}
            >
              <h3>{nationalityNameInCard}</h3>
            </OverlayTrigger>
            <p>{this.props.cultureNumber}</p>
            <div className = "iconGroup">
            <Image src="/assets/Opeople.png" width='35' height='30'></Image>
            </div>
          </div>
        </div>
      }

      else if (this.props.cultureNumber < this.props.popv1) {
        nationality = <div className="column">
          <div className="Samplecard">
          <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderNationlityTooltip}
            >
              <h3>{nationalityNameInCard}</h3>
            </OverlayTrigger>
            <p>{this.props.cultureNumber}</p>
            <div className = "iconGroup">
            <Image src="/assets/Rpeople.png" width='35' height='30'></Image>
            </div>
          </div>
        </div>
      }
    }

    return (<div className="cardrow">


      <div className='sampleCardRow'>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        {hospital}
        {distance}
        {housePrice}
        {jobNumber}
        {criminalRate}
        {nationality}
      </div>
      <MapChart chart="hospital" show={this.state.hospitalShow} id={this.props.id}
        onHide={this.handleHide}></MapChart>
     
      <MapChart chart="criminal" show={this.state.criminalShow} id={this.props.id}
        onHide={this.handleHide}></MapChart>


      <MapChart chart="job" show={this.state.jobShow} id={this.props.id}
        onHide={this.handleHide}></MapChart>
    </div>)
  }
}


