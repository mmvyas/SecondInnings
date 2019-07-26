import React from 'react';
import './Samplecard.css';
import {Image } from 'react-bootstrap';
import './Legend.css';


const SampleCard = () => (
  <cardrow className="cardrow">
  <head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
  
  </head>
  <body>
  <div class="my-legend">
 <div class="legend-title">Legend to understand comparision between 5 regions</div>
 <div class="legend-scale">
   <ul class="legend-labels">
     <li><span style={{background:'#49a942'}}></span>Good</li>
     <li><span style={{background:'#ec7800'}}></span>Average</li>
     <li><span style={{background:'#bd0018'}}></span>Bad</li>
   </ul>
 </div>
 <div class="legend-source">Source: <a>Based on our research</a></div>
 </div> 
  <h2>Region - Living Factors</h2>

<div class="row1">
  <div class="column">
    <div class="Samplecard">
    <span class="info"><i class="material-icons" data-toggle="tooltip" title="View Hospitals" >info</i></span>
      <h3>Hospitals</h3>
      <p>Number of Hospitals</p>
      <Image src = "/assets/Ghospital.png"  width='30' height='30'></Image>
      <Image src = "/assets/Ghospital.png"  width='30' height='30'></Image>
      <Image src = "/assets/Ghospital.png"  width='30' height='30'></Image>
    </div>
  </div>

  <div class="column">
    <div class="Samplecard">
      <h3>House Price</h3>
      <p>Average house price</p>
      <Image src = "/assets/Rhouse.png"  width='30' height='30'></Image>
      <Image src = "/assets/Rhouse.png"  width='30' height='30'></Image>
      <Image src = "/assets/Rhouse.png"  width='30' height='30'></Image>
    </div>
  </div>
  
  <div class="column">
    <div class="Samplecard">
    <span class="info"><i class="material-icons" data-toggle="tooltip" title="View Job Prediction" >info</i></span>
      <h3>Jobs</h3>      
      <p>Number of available jobs</p>      
      <Image src = "/assets/Gportfolio.png"  width='30' height='30'></Image>
      <Image src = "/assets/Gportfolio.png"  width='30' height='30'></Image>
      <Image src = "/assets/Gportfolio.png"  width='30' height='30'></Image>
    </div>
  </div>
  
  <div class="column">
    <div class="Samplecard">
      <h3>Distance to City</h3>
      <p>Distance in Kilometers</p>
      <Image src = "/assets/Oroad.png"  width='35' height='30'></Image>
      <Image src = "/assets/Oroad.png"  width='35' height='30'></Image>
    </div>
  </div>

  <div class="column">
    <div class="Samplecard">
    <span class="info"><i class="material-icons" data-toggle="tooltip" title="View Crime Rate" >info</i></span>
      <h3>Criminal Rate</h3>
      <p>Number of crimes</p>
      <Image src = "/assets/Rthief.png"  width='30' height='30'></Image>
      <Image src = "/assets/Rthief.png"  width='30' height='30'></Image>
      <Image src = "/assets/Rthief.png"  width='30' height='30'></Image>
    </div>
  </div>

  <div class="column">
    <div class="Samplecard">
      <h3>Your Community</h3>
      <p>Number of people</p>
      <Image src = "/assets/Olotus-flower.png"  width='35' height='30'></Image>
      <Image src = "/assets/Olotus-flower.png"  width='35' height='30'></Image>
    </div>
  </div>
</div>
<p></p>
<div class="row2">
  <div class="column">
    <div class="Samplecard">
    <span class="info"><i class="material-icons" data-toggle="tooltip" title="View Hospitals" >info</i></span>
      <h3>Hospitals</h3>
      <p>Number of Hospitals</p>
      <Image src = "/assets/Rhospital-buildings.png"  width='40' height='30'></Image>
      
    </div>
  </div>

  <div class="column">
    <div class="Samplecard">
      <h3>House Price</h3>
      <p>Average house price</p>
      
      <Image src = "/assets/Ghouse.png"  width='40' height='30'></Image>
    </div>
  </div>
  
  <div class="column">
    <div class="Samplecard">
    <span class="info"><i class="material-icons" data-toggle="tooltip" title="View Job Prediction" >info</i></span>
      <h3>Jobs</h3>
      <p>Number of available jobs</p>
      
      <Image src = "/assets/Oportfolio.png"  width='35' height='30'></Image>
      <Image src = "/assets/Oportfolio.png"  width='35' height='30'></Image>
    </div>
  </div>
  
  <div class="column">
    <div class="Samplecard">
      <h3>Distance to City</h3>
      <p>Distance in Kilometers</p>
      <Image src = "/assets/Rroad.png"  width='30' height='30'></Image>
      <Image src = "/assets/Rroad.png"  width='30' height='30'></Image>
      <Image src = "/assets/Rroad.png"  width='30' height='30'></Image>
    </div>
  </div>

  <div class="column">
    <div class="Samplecard">
    <span class="info"><i class="material-icons" data-toggle="tooltip" title="View Crime Rate" >info</i></span>
      <h3>Criminal Rate</h3>
      <p>Number of crimes</p>
      
      <Image src = "/assets/Gthief.png"  width='30' height='30'></Image>
    </div>
  </div>

  <div class="column">
    <div class="Samplecard">
      <h3>Your Community</h3>
      <p>Number of people</p>
      <Image src = "/assets/Rlotus-flower.png"  width='40' height='30'></Image>
    </div>
  </div>
</div>
<div class="row3">
  <div class="column">  
    <div class="Samplecard">
    <span class="info"><i class="material-icons" data-toggle="tooltip" title="View Hospitals" >info</i></span>
      <h3>Hospitals</h3>
      <p>Number of Hospitals</p>
      <Image src = "/assets/Ohospital.png"  width='35' height='30'></Image>
      <Image src = "/assets/Ohospital.png"  width='35' height='30'></Image>
    </div>
  </div>

  <div class="column">
    <div class="Samplecard">
      <h3>House Price</h3>
      <p>Average house price</p>
      <Image src = "/assets/Ohouse.png"  width='35' height='30'></Image>
      <Image src = "/assets/Ohouse.png"  width='35' height='30'></Image>
    </div>
  </div>
  
  <div class="column">
    <div class="Samplecard">
    <span class="info"><i class="material-icons" data-toggle="tooltip" title="View Job Prediction" >info</i></span>
      <h3>Jobs</h3>
      <p>Number of available jobs</p>
      <Image src = "/assets/Rportfolio.png"  width='40' height='30'></Image>
    </div>
  </div>
  
  <div class="column">
    <div class="Samplecard">
      <h3>Distance to City</h3>
      <p>Distance in Kilometers</p>
      
      <Image src = "/assets/Groad.png"  width='30' height='30'></Image>
    </div>
  </div>

  <div class="column">
    <div class="Samplecard">
    <span class="info"><i class="material-icons" data-toggle="tooltip" title="View Crime Rate" >info</i></span>
      <h3>Criminal Rate</h3>
      <p>Number of crimes</p>
      <Image src = "/assets/Othief.png"  width='35' height='30'></Image>
      <Image src = "/assets/Othief.png"  width='35' height='30'></Image>
    </div>
  </div>

  <div class="column">
    <div class="Samplecard">
      <h3>Your Community</h3>
      <p>Number of people</p>
      
      <Image src = "/assets/Glotus-flower.png"  width='30' height='30'></Image>
      <Image src = "/assets/Glotus-flower.png"  width='30' height='30'></Image>
      <Image src = "/assets/Glotus-flower.png"  width='30' height='30'></Image>
    </div>
  </div>
</div>

</body>


  </cardrow>



);


export default SampleCard;