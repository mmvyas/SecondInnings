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
     <li><span style={{background:'#49a942'}}></span>High</li>
     <li><span style={{background:'#ec7800'}}></span>Average</li>
     <li><span style={{background:'#bd0018'}}></span>Low</li>
   </ul>
 </div>
 <div class="legend-source">Source: <a>Based on our research</a></div>
 </div> 
  <h2>Region 1 - Ballarat </h2>

<div class="row1">
  <div class="column">
    <div class="Samplecard">
    <span class="info"><i class="material-icons" data-toggle="tooltip" title="View Hospitals" >info</i></span>
    
      <h3>Hospitals</h3>
      <p>12</p>
      <Image src = "/assets/Ghospital.png"  width='30' height='30'></Image>
      
    </div>
  </div>

  <div class="column">
    <div class="Samplecard">
      <h3>House Price</h3>
      <p>$500,000</p>
      <Image src = "/assets/Rhouse.png"  width='30' height='30'></Image>
    </div>
  </div>
  
  <div class="column">
    <div class="Samplecard">
    <span class="info"><i class="material-icons" data-toggle="tooltip" title="View Job Prediction" >info</i></span>
      <h3>Agriculture</h3>      
      <p>500</p>      
      <Image src = "/assets/Gportfolio.png"  width='30' height='30'></Image>
    </div>
  </div>
  
  <div class="column">
    <div class="Samplecard">
      <h3>Distance to City</h3>
      <p>50km</p>
      <Image src = "/assets/Oroad.png"  width='35' height='30'></Image>
    </div>
  </div>

  <div class="column">
    <div class="Samplecard">
    <span class="info"><i class="material-icons" data-toggle="tooltip" title="View Crime Rate" >info</i></span>
      <h3>Criminal Rate</h3>
      <p>0.7</p>
      <Image src = "/assets/Rthief.png"  width='30' height='30'></Image>
    </div>
  </div>

  <div class="column">
    <div class="Samplecard">
      <h3>India</h3>
      <p>1547</p>
      <Image src = "/assets/Opeople.png"  width='35' height='30'></Image>
    </div>
  </div>
</div>
<div class="row2">
<div class="column">
    <div class="Samplecard">
    <span class="info"><i class="material-icons" data-toggle="tooltip" title="View Hospitals" >info</i></span>
    
      <h3>Hospitals</h3>
      <p>12</p>
      <Image src = "/assets/Ghospital.png"  width='30' height='30'></Image>
      
    </div>
  </div>

  <div class="column">
    <div class="Samplecard">
      <h3>House Price</h3>
      <p>$500,000</p>
      <Image src = "/assets/Rhouse.png"  width='30' height='30'></Image>
    </div>
  </div>
  
  <div class="column">
    <div class="Samplecard">
    <span class="info"><i class="material-icons" data-toggle="tooltip" title="View Job Prediction" >info</i></span>
      <h3>Agriculture</h3>      
      <p>500</p>      
      <Image src = "/assets/Gportfolio.png"  width='30' height='30'></Image>
    </div>
  </div>
  
  <div class="column">
    <div class="Samplecard">
      <h3>Distance to City</h3>
      <p>50km</p>
      <Image src = "/assets/Oroad.png"  width='35' height='30'></Image>
    </div>
  </div>

  <div class="column">
    <div class="Samplecard">
    <span class="info"><i class="material-icons" data-toggle="tooltip" title="View Crime Rate" >info</i></span>
      <h3>Criminal Rate</h3>
      <p>0.7</p>
      <Image src = "/assets/Rthief.png"  width='30' height='30'></Image>
    </div>
  </div>

  <div class="column">
    <div class="Samplecard">
      <h3>India</h3>
      <p>1547</p>
      <Image src = "/assets/Opeople.png"  width='35' height='30'></Image>
    </div>
  </div>
</div>
<div class="row3">
<div class="column">
    <div class="Samplecard">
    <span class="info"><i class="material-icons" data-toggle="tooltip" title="View Hospitals" >info</i></span>
    
      <h3>Hospitals</h3>
      <p>12</p>
      <Image src = "/assets/Ghospital.png"  width='30' height='30'></Image>
      
    </div>
  </div>

  <div class="column">
    <div class="Samplecard">
      <h3>House Price</h3>
      <p>$500,000</p>
      <Image src = "/assets/Rhouse.png"  width='30' height='30'></Image>
    </div>
  </div>
  
  <div class="column">
    <div class="Samplecard">
    <span class="info"><i class="material-icons" data-toggle="tooltip" title="View Job Prediction" >info</i></span>
      <h3>Agriculture</h3>      
      <p>500</p>      
      <Image src = "/assets/Gportfolio.png"  width='30' height='30'></Image>
    </div>
  </div>
  
  <div class="column">
    <div class="Samplecard">
      <h3>Distance to City</h3>
      <p>50km</p>
      <Image src = "/assets/Oroad.png"  width='35' height='30'></Image>
    </div>
  </div>

  <div class="column">
    <div class="Samplecard">
    <span class="info"><i class="material-icons" data-toggle="tooltip" title="View Crime Rate" >info</i></span>
      <h3>Criminal Rate</h3>
      <p>0.7</p>
      <Image src = "/assets/Rthief.png"  width='30' height='30'></Image>
    </div>
  </div>

  <div class="column">
    <div class="Samplecard">
      <h3>India</h3>
      <p>1547</p>
      <Image src = "/assets/Opeople.png"  width='35' height='30'></Image>
    </div>
  </div>
</div>

</body>


  </cardrow>



);


export default SampleCard;