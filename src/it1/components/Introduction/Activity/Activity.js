import React, { Component } from 'react'
import ActivityCard from './ActivityCard';
import ActivityCard1 from './ActivityCard1'
import ActivityCard2 from './ActivityCard2';
import './Activity.css'
import CyclingMap from './CyclingMap/CyclingMap'
import { Button } from 'react-bootstrap';
import HikingMap from './HikingMap/HikingMap';

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
    

    render(){
        let activityClose = () => this.setState({
          activityShow: false,
          hikingShow: false
      });
    return(
        <div className = 'activity'>
            <ActivityCard1
            img = '/assets/beach.jpg'
            header = 'Beach'
            content = "Regional Victoria offers the boating enthusiast a range of activities in a variety of environments. Those who like to get wet can choose from white sand beaches along the Murray River,
             the sheltered bay beaches that extend along the Mornington Peninsula from Frankston to the heads, or the pristine Ninety Mile Beach in Gippsland. Regional Victoria provides scuba divers a rich 
             underwater world of shipwrecks, diverse marine life, kelp forests and colorful soft corals. Surfers come from around the world to catch the famous breaks at Victoria's beaches, including Bells Beach.
              Learn to surf with an expert, or watch the champions at work at the annual Rip Curl Pro event. Murray River – the ultimate destination for waterskiing in Victoria. The Murray attracts experienced 
              water skiers and beginners learning for the first time. Pick from a number towns along the Murray, with great facilities available at Lake Boga, Lake Mulwala and Lake Hume. The Gippsland Lakes 
              and the Hazelwood Pondage in Central Gippsland, are ideal for waterskiing."
            
            /> 


            <br></br>

            <ActivityCard2 
            img = '/assets/cycling.jpg'
            header = 'Cycling'
            content = "With its thriving bike culture and a dizzying mix of bike-friendly terrain, regional Victoria is best seen on two wheels. Victoria's rail trails cater for all ages and abilities. From steep climbs to flat rides, there are plenty of options to choose from. Most trails are surfaced with gravel or dirt and are perfect for walking, mountain bikes and horses. Some sections are sealed and can take touring bikes too. Take it easy and follow a regional rail trail like the Great Victorian Rail Trail, stopping by cellar doors and farm gates to sample gourmet local produce. Take a self-guided tour or opt for a fully supported tour to make sure your ride goes smoothly."
            onClickButton= {this.showCycling}/> 
  
            <CyclingMap width='100%' show={this.state.activityShow}
          onHide={activityClose}></CyclingMap>

            <ActivityCard 
            img = '/assets/hiking.jpg'
            header = "Walking & Hiking"
            content = "The breathtaking scenery throughout regional Victoria really comes to life when taken in on foot. From the High Country and Gippsland's endless coastline to the rugged Great Ocean Road, there are plenty of hiking and bushwalking trails for visitors of all fitness levels. For short walks, meander along quiet beaches and explore rainforest, teeming with wildlife. Hike up granite slopes, walk to misty waterfalls and on through rugged coastal hinterland. Victoria's national parks offer a range of short day walks, suitable for families and the casual hiker. For challenging walks, Victoria provides challenging terrain such as the Razorback, these hikes test the limits of physical strength and mental endurance. For overnight walks, set aside a few days to enjoy long distance walks like the Australian Alps Walking Track, The Great South West Walk or the Great Ocean Walk. Take on the whole distance or choose from a range of shorter sections to suit your itinerary. Enjoy panoramic views, visit quaint towns and villages, and explore the beaches, forests and landmarks along the way."
            onClickButton= {this.showHiking}/> 

        <HikingMap width='100%' show={this.state.hikingShow}
          onHide={activityClose}></HikingMap>
            
                      

        </div>


  )
    }
}

export default Activities 

