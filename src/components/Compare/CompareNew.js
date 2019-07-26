import React from 'react'
import Samplecard from './SamplecardCatogried'
import './Compare.css'
import JobPrediction from './JobPrediction/JobPrediction'
import { Jumbotron } from 'reactstrap';
import {Animated} from "react-animated-css";


export default class CompareNew extends React.Component {
    constructor(props) {
        super(props)
        let displayArea = this.props.location.state

        this.state = {
            displayArea: displayArea,
            clickedRegionForJob: null,
            clickedRegionForJobName: null,
            region0Show: true,
            region1Show: true,
            region2Show: true,
            region3Show: true,
            region4Show: true,
            jobShow: false

        }


          this.handleJobShow = () => {
            this.setState({ jobShow: true });
          };

          this.handleHide = () => {
            this.setState({
              
              jobShow: false
      
            });
          };
      

    }
    // scrollToAnchor = (anchorName) => {
    //     if (anchorName) {
    //         let anchorElement = document.getElementById(anchorName);
    //         if (anchorElement) { anchorElement.scrollIntoView(); }
    //     }
    // }

    jumpToJobView0 = () => {
        this.handleJobShow()
        this.setState({
            clickedRegionForJob: this.state.displayArea.topFiveAreas[0].id,
            clickedRegionForJobName: this.state.displayArea.topFiveAreas[0].name
        })
    }
    jumpToJobView1 = () => {
        this.handleJobShow()
        this.setState({
            clickedRegionForJob: this.state.displayArea.topFiveAreas[1].id,
            clickedRegionForJobName: this.state.displayArea.topFiveAreas[1].name
        })
    }
    jumpToJobView2 = () => {
        this.handleJobShow()
        this.setState({
            clickedRegionForJob: this.state.displayArea.topFiveAreas[2].id,
            clickedRegionForJobName: this.state.displayArea.topFiveAreas[2].name
        })
    }
    jumpToJobView3 = () => {
        this.handleJobShow()
        this.setState({
            clickedRegionForJob: this.state.displayArea.topFiveAreas[3].id,
            clickedRegionForJobName: this.state.displayArea.topFiveAreas[3].name
        })
    }
    jumpToJobView4 = () => {
        this.handleJobShow()
        this.setState({
            clickedRegionForJob: this.state.displayArea.topFiveAreas[4].id,
            clickedRegionForJobName: this.state.displayArea.topFiveAreas[4].name
        })
    }

    toggleRegion0 = () => {
        this.setState({
            region0Show: !this.state.region0Show
        })
    }
    toggleRegion1 = () => {
        this.setState({
            region1Show: !this.state.region1Show
        })
    }
    toggleRegion2 = () => {
        this.setState({
            region2Show: !this.state.region2Show
        })
    }
    toggleRegion3 = () => {
        this.setState({
            region3Show: !this.state.region3Show
        })
    }
    toggleRegion4 = () => {
        this.setState({
            region4Show: !this.state.region4Show
        })
    }
    render() {
        let jobIndustry = this.state.displayArea.jobIndustry
        
        let jobExist = false
        if (jobIndustry !== '') {
            jobExist = true
        }
        let culture = this.state.displayArea.culture
        let cultureExist = false
        if (culture !== '') {
            cultureExist = true
        }
        const regionId0 = this.state.displayArea.topFiveAreas[0].id
        let regionId1 = this.state.displayArea.topFiveAreas[1].id
        let regionId2 = this.state.displayArea.topFiveAreas[2].id
        let regionId3 = this.state.displayArea.topFiveAreas[3].id
        let regionId4 = this.state.displayArea.topFiveAreas[4].id




        return (

            <div className='compareNew'>
            <Jumbotron className="compare-jumbo">
                <div className="cmpJumboContent">
                    <h1>Don't know where to go among the top 5 choices you have? </h1>
                    <h2>We understand that it is difficult to make choice where to move given many choices. <br/> You can compare the living factors among all 5 regions and see the difference </h2>    <p></p>      
                    <h3>See all the criteria and select what's best for you</h3>
                </div>
        
            </Jumbotron>
            <div className = "cmpContent">
                <h1>The Top 5 regions for you based on your preferences:</h1>
                <div className="my-legend">
                    <div className="legend-title" style={{textAlign:'center'}}>Data Range Color</div>
                    <div className="legend-scale">
                        <ul className="legend-labels">
                            <li><span style={{ background: '#49a942' }}></span>High</li>
                            <li><span style={{ background: '#ec7800' }}></span>Average</li>
                            <li><span style={{ background: '#bd0018' }}></span>Low</li>
                        </ul>
                    </div>
                    <div className="legend-source"><a></a></div>
                </div>

                
                <div className="cardWithName">
                    <span className="nameWithIcon">
                        <h2 className='regionName'>{this.state.displayArea.topFiveAreas[0].name}</h2>
                        {this.state.region0Show ? <i className="fas fa-minus-square" onClick={this.toggleRegion0}></i> : <i class="fas fa-plus-square" onClick={this.toggleRegion0}></i>}

                    </span>
                    {this.state.region0Show ?
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                    <Samplecard
                            id={this.state.displayArea.topFiveAreas[0].id}
                            name={this.state.displayArea.topFiveAreas[0].name}
                            jobExist={jobExist}
                            cultureExist={cultureExist}
                            job={jobExist ? this.state.displayArea.topFiveAreas[0].job.industry : null}
                            jobNumber={jobExist ? this.state.displayArea.topFiveAreas[0].job.count : null}
                            cultureName={cultureExist ? this.state.displayArea.topFiveAreas[0].nationality.name : null}
                            cultureNumber={cultureExist ? this.state.displayArea.topFiveAreas[0].nationality.count : null}
                            housePrice={this.state.displayArea.topFiveAreas[0].house.price}
                            rentPrice={this.state.displayArea.topFiveAreas[0].house.rent}
                            distance={this.state.displayArea.topFiveAreas[0].dist}
                            hospitalNumber={this.state.displayArea.topFiveAreas[0].num_of_hospitals}
                            criminal={this.state.displayArea.topFiveAreas[0].crime_rate}
                            jobClick={this.jumpToJobView0}
                            jobv1={jobExist ?this.state.displayArea.topFiveAreas[2].range.employments.v1 : null}
                            jobv2={jobExist ?this.state.displayArea.topFiveAreas[2].range.employments.v2 : null}
                            popv1={cultureExist ?this.state.displayArea.topFiveAreas[2].range.population.v1:null}
                            popv2={cultureExist ?this.state.displayArea.topFiveAreas[2].range.population.v2:null}
                        /> 
                    </Animated>
                        : null}
                </div>

                <div className="cardWithName">
                    <span className="nameWithIcon">
                        <h2 className='regionName'>{this.state.displayArea.topFiveAreas[1].name}</h2>
                        {this.state.region1Show ? <i className="fas fa-minus-square" onClick={this.toggleRegion1}></i> : <i class="fas fa-plus-square" onClick={this.toggleRegion1}></i>}
                    </span>
                    {this.state.region1Show ?
                        (<Samplecard
                            animationIn="fadeIn" 
                            animationOut="fadeOut"
                            id={this.state.displayArea.topFiveAreas[1].id}
                            name={this.state.displayArea.topFiveAreas[1].name}
                            jobExist={jobExist}
                            cultureExist={cultureExist}
                            job={jobExist ? this.state.displayArea.topFiveAreas[1].job.industry : null}
                            jobNumber={jobExist ? this.state.displayArea.topFiveAreas[1].job.count : null}
                            cultureName={cultureExist ? this.state.displayArea.topFiveAreas[1].nationality.name : null}
                            cultureNumber={cultureExist ? this.state.displayArea.topFiveAreas[1].nationality.count : null}
                            housePrice={this.state.displayArea.topFiveAreas[1].house.price}
                            rentPrice={this.state.displayArea.topFiveAreas[1].house.rent}
                            distance={this.state.displayArea.topFiveAreas[1].dist}
                            hospitalNumber={this.state.displayArea.topFiveAreas[1].num_of_hospitals}
                            criminal={this.state.displayArea.topFiveAreas[1].crime_rate}
                            jobClick={this.jumpToJobView1}
                            jobv1={jobExist ?this.state.displayArea.topFiveAreas[2].range.employments.v1 : null}
                            jobv2={jobExist ?this.state.displayArea.topFiveAreas[2].range.employments.v2 : null}
                            popv1={cultureExist ?this.state.displayArea.topFiveAreas[2].range.population.v1:null}
                            popv2={cultureExist ?this.state.displayArea.topFiveAreas[2].range.population.v2:null}
                        />) : null}

                </div>


                <div className="cardWithName">
                    <span className="nameWithIcon">
                        <h2 className='regionName'>{this.state.displayArea.topFiveAreas[2].name}</h2>
                        {this.state.region2Show ? <i className="fas fa-minus-square" onClick={this.toggleRegion2}></i> : <i class="fas fa-plus-square" onClick={this.toggleRegion2}></i>}
                    </span>
                    {this.state.region2Show ?
                        <Samplecard
                            id={this.state.displayArea.topFiveAreas[2].id}
                            name={this.state.displayArea.topFiveAreas[2].name}
                            jobExist={jobExist}
                            cultureExist={cultureExist}
                            job={jobExist ? this.state.displayArea.topFiveAreas[2].job.industry : null}
                            jobNumber={jobExist ? this.state.displayArea.topFiveAreas[2].job.count : null}
                            cultureName={cultureExist ? this.state.displayArea.topFiveAreas[2].nationality.name : null}
                            cultureNumber={cultureExist ? this.state.displayArea.topFiveAreas[2].nationality.count : null}
                            housePrice={this.state.displayArea.topFiveAreas[2].house.price}
                            rentPrice={this.state.displayArea.topFiveAreas[2].house.rent}
                            distance={this.state.displayArea.topFiveAreas[2].dist}
                            hospitalNumber={this.state.displayArea.topFiveAreas[2].num_of_hospitals}
                            criminal={this.state.displayArea.topFiveAreas[2].crime_rate}
                            jobClick={this.jumpToJobView2}
                            jobv1={jobExist ?this.state.displayArea.topFiveAreas[2].range.employments.v1 : null}
                            jobv2={jobExist ?this.state.displayArea.topFiveAreas[2].range.employments.v2 : null}
                            popv1={cultureExist ?this.state.displayArea.topFiveAreas[2].range.population.v1:null}
                            popv2={cultureExist ?this.state.displayArea.topFiveAreas[2].range.population.v2:null}
                        /> : null}
                </div>

                <div className="cardWithName">
                    <span className="nameWithIcon">
                        <h2 className='regionName'>{this.state.displayArea.topFiveAreas[3].name}</h2>
                        {this.state.region3Show ? <i className="fas fa-minus-square" onClick={this.toggleRegion3}></i> : <i class="fas fa-plus-square" onClick={this.toggleRegion3}></i>}
                    </span>
                    {this.state.region3Show ?
                        <Samplecard
                            id={this.state.displayArea.topFiveAreas[3].id}
                            name={this.state.displayArea.topFiveAreas[3].name}
                            jobExist={jobExist}
                            cultureExist={cultureExist}
                            job={jobExist ? this.state.displayArea.topFiveAreas[3].job.industry : null}
                            jobNumber={jobExist ? this.state.displayArea.topFiveAreas[3].job.count : null}
                            cultureName={cultureExist ? this.state.displayArea.topFiveAreas[3].nationality.name : null}
                            cultureNumber={cultureExist ? this.state.displayArea.topFiveAreas[3].nationality.count : null}
                            housePrice={this.state.displayArea.topFiveAreas[3].house.price}
                            rentPrice={this.state.displayArea.topFiveAreas[3].house.rent}
                            distance={this.state.displayArea.topFiveAreas[3].dist}
                            hospitalNumber={this.state.displayArea.topFiveAreas[3].num_of_hospitals}
                            criminal={this.state.displayArea.topFiveAreas[3].crime_rate}
                            jobClick={this.jumpToJobView3}
                            jobv1={jobExist ?this.state.displayArea.topFiveAreas[2].range.employments.v1 : null}
                            jobv2={jobExist ?this.state.displayArea.topFiveAreas[2].range.employments.v2 : null}
                            popv1={cultureExist ?this.state.displayArea.topFiveAreas[2].range.population.v1:null}
                            popv2={cultureExist ?this.state.displayArea.topFiveAreas[2].range.population.v2:null}
                        /> : null}
                </div>


                <div className="cardWithName">
                    <span className="nameWithIcon">
                        <h2 className='regionName'>{this.state.displayArea.topFiveAreas[4].name}</h2>
                        {this.state.region4Show ? <i className="fas fa-minus-square" onClick={this.toggleRegion4}></i> : <i class="fas fa-plus-square" onClick={this.toggleRegion4}></i>}
                    </span>
                    {this.state.region4Show ?
                        <Samplecard
                            id={this.state.displayArea.topFiveAreas[4].id}
                            name={this.state.displayArea.topFiveAreas[4].name}
                            jobExist={jobExist}
                            cultureExist={cultureExist}
                            job={jobExist ? this.state.displayArea.topFiveAreas[4].job.industry : null}
                            jobNumber={jobExist ? this.state.displayArea.topFiveAreas[4].job.count : null}
                            cultureName={cultureExist ? this.state.displayArea.topFiveAreas[4].nationality.name : null}
                            cultureNumber={cultureExist ? this.state.displayArea.topFiveAreas[4].nationality.count : null}
                            housePrice={this.state.displayArea.topFiveAreas[4].house.price}
                            rentPrice={this.state.displayArea.topFiveAreas[4].house.rent}
                            distance={this.state.displayArea.topFiveAreas[4].dist}
                            hospitalNumber={this.state.displayArea.topFiveAreas[4].num_of_hospitals}
                            criminal={this.state.displayArea.topFiveAreas[4].crime_rate}
                            jobClick={this.jumpToJobView4}
                            jobv1={jobExist ?this.state.displayArea.topFiveAreas[2].range.employments.v1 : null}
                            jobv2={jobExist ?this.state.displayArea.topFiveAreas[2].range.employments.v2 : null}
                            popv1={cultureExist ?this.state.displayArea.topFiveAreas[2].range.population.v1:null}
                            popv2={cultureExist ?this.state.displayArea.topFiveAreas[2].range.population.v2:null}
                        /> : null}
                </div></div>

                <div className = 'linkToExploration'>
                    <a href='/mapExploration'>
                    Explore regional Victoria in map to see more details
                    </a>
                </div>

                <JobPrediction SelectRegion={this.state.clickedRegionForJob}
                    SelectRegionName={this.state.clickedRegionForJobName}
                    Industry={jobIndustry} 
                    show={this.state.jobShow}
                    onHide={this.handleHide}
                />
            </div>
        )
    }
}