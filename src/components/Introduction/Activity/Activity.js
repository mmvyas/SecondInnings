import React, { Component } from 'react'
import ActivityCard from './ActivityCard';
import ActivityCard1 from './ActivityCard1'
import ActivityCard2 from './ActivityCard2';
import './Activity.css'
import CyclingMap from './CyclingMap/CyclingMap'
import HikingMap from './HikingMap/HikingMap';
import { Jumbotron } from 'reactstrap';

class Activities extends Component {
    constructor(...args){
        super(...args)
        this.state = {
            activityShow: false,
            hikingShow: false
        }
    }

    showCycling = () =>{
      this.setState({ activityShow: true})
  }

  showHiking = () =>{
    this.setState({ hikingShow: true})
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
    

    render(){
        let activityClose = () => this.setState({
          activityShow: false,
          hikingShow: false
      });
    return(

        <div className = 'activity'>
        <Jumbotron className="activity-jumbo">
        <div className="actJumboContent">
            <h1>The best 3 outdoor activities to enjoy <br/> in regional Victoria </h1>

            
          </div>
        
        </Jumbotron>
        <div className="actContent"><p style={{maxWidth:'800px'}}>With a temperate climate and changing landscapes, Regional Victoria offers a wide variety of tourist spots and adventures. Looking for fun things to do in regional Victoria? <p></p> 
        Although, everywhere you turn there's something special to see and do in regional Victoria, cycling on the coast of the Great Ocean Road, hiking on The Pinnacle and walking 1000 steps on Kokoda Memorial Walk are some of the best experiences.
        </p></div>
            <ActivityCard1
            img = '/assets/beach.jpg'
            header = 'Beach'
            content = <div>
            <ul>
            <li>Whether you go to white sand beaches along the Murray River or the sheltered bay beaches that extend along the Mornington Peninsula, or the Ninety Mile Beach in Gippsland, you will find nothing but Australia’s unspoilt nature and the most pristine landscapes.</li>
            <li>Scuba divers and surfers come a long way to enjoy on the Bells Beach.</li>
            <li>Murray River is considered a paradise for water skiers.</li>
            </ul></div>
            
            /> 


            <br></br>

            <ActivityCard2 
            img = '/assets/cycling.jpg'
            header = 'Cycling'
            content = <div>
            <ul>
            <li>Regional Victoria offers a thriving bike culture and a bike-friendly terrain along with short drives and walking trails that make a perfect day trip.</li>
            <li>Great cycling spots along the Great Ocean Road.</li>
            <li>The  Goldfields Track  offers outstanding trails for a mountain bike ride.</li>
            <li>Enjoy the Great Ocean Road Race where elite racers with professional credibility participate.</li>
            </ul>
            </div>
            onClickButton= {this.showCycling}/> 
  
            <CyclingMap width='100%' show={this.state.activityShow}
          onHide={activityClose}></CyclingMap>

            <ActivityCard 
            img = '/assets/hiking.jpg'
            header = "Walking & Hiking"
            content = 
            <div>
            <ul>
            <li>Plenty of hiking and bushwalking trails for visitors of all fitness levels in High Country and Gippsland.</li>
            <li>Enjoy short walks along the quiet beaches in coastal hinterland. </li>
            <li>The 1000-step Kokoda memorial walk is one of the most exciting experience.</li>
            <li>If you are up for a challenging hike, Razorback hikes can test your physical strength and mental endurance. </li>
            
            </ul>
            </div>
            onClickButton= {this.showHiking}/> 

        <HikingMap width='100%' show={this.state.hikingShow}
          onHide={activityClose}></HikingMap>
            
                      

        </div>


  )
    }
}

export default Activities 

