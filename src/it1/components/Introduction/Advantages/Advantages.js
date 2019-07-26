import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import TableauReport from 'tableau-react';
import Aux from '../../../hoc/Auxiliary'
import './Advantage.css'

export default class Advantage extends Component {

state = {
    chart: ""
  }


    render(){
      const chartName = this.state.chart


      let chartInPage = (
        <div className = "Vischart">
          <h2 className = "advh2">Please select a chart</h2>
            
          
        </div>
      );

      
    if (chartName === 'population') {
      chartInPage = (
        <div className = "Vischart">
          <h2 className = "advh2">Population</h2>
            <TableauReport
            url="https://public.tableau.com/views/VICRegionalPopulation/RegionPopulation"
            loading = {true}
          />
        </div>
      );
    }

    else if (chartName === 'job') {
      chartInPage = (
        <div className = "Vischart">
          <h2 className = "advh2">Job by Industry
</h2>
  <TableauReport
    url="https://public.tableau.com/views/JobbyIndustry/JobbyIndustryinRegional"
    loading = {true} 
  />
        </div>
      );
    }

    else if (chartName === 'hospital') {
      chartInPage = (
        <div className = "Vischart">
          <h2 className = "advh2">Hospitals</h2>
  <TableauReport
    url="https://public.tableau.com/views/pophosp/PopulationHospitalRatio"
    loading = {true}
  />
        </div>
      );
    }

    else if (chartName === 'criminal') {
      chartInPage = (
        <div className = "Vischart">
          <h2 className = "advh2">Criminal</h2>
          <TableauReport
          url="https://public.tableau.com/views/crmnrec/CriminalRecordedIncidents"
          loading = {true}
  />
        </div>
      );
    }

    else if (chartName === 'house') {
      chartInPage = (
        <div className = "Vischart">
          <h2 className = "advh2">House Price
</h2>
  <TableauReport
    url="https://public.tableau.com/views/houpri/YearlyPriceGrowth"
    loading = {true}
  />
        </div>
      );
    }

    else if (chartName === 'rent') {
      chartInPage = (
        <div className = "Vischart">
         <h2 className = "advh2">Rent Price
</h2>
  <TableauReport
  url="https://public.tableau.com/views/rentpri/RentPrice2018"
  loading = {true}
/>
        </div>
      );
    }


        return(
            <Aux>
              <div className = "AdvantageButtons">
              <Button className = "AdvantageButton" onClick = {()=>this.setState({chart: "poplulation"})}>Population</Button>
              <Button className = "AdvantageButton" onClick = {()=>this.setState({chart: "job"})}>Job by Industry</Button>
              <Button className = "AdvantageButton" onClick = {()=>this.setState({chart: "hospital"})}>Hospitals</Button>
              <Button className = "AdvantageButton" onClick = {()=>this.setState({chart: "criminal"})}>Criminal</Button>
              <Button className = "AdvantageButton" onClick = {()=>this.setState({chart: "house"})}>House Price</Button>
              <Button className = "AdvantageButton" onClick = {()=>this.setState({chart: "rent"})}>Rent Price</Button>
          
              
              </div>
              {chartInPage}
                
</Aux>

        )
    }



}

