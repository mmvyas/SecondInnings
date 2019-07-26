import React from 'react';
import home from '../SideDrawer/home-page.png';
import info from '../SideDrawer/information.png';
import about from '../SideDrawer/question.png';
import fun from '../SideDrawer/dancer.png';
import fact from '../SideDrawer/lightbulb-idea.png';
import map from '../SideDrawer/facebook-placeholder-for-locate-places-on-maps.png';
import { Image } from 'react-bootstrap';
import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
    <div className="ActionMenu">Action Menu
    </div>
      <ul>
        <li>
        <div className="menuItem">       
            <Image src={home} width='25' height='20' />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <a href="/">Home</a> </div>
        </li>
        <li>
        <div className="menuItem"> 
        <Image src={info} width='25' height='20' />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <a href="/introduction/visa">Visa Policy </a></div>
        </li>
        <li>
        <div className="menuItem"> 
        <Image src={fun} width='25' height='20' />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <a href="/introduction/activity">Fun Activities </a></div>
        </li>
        <li>
        <div className="menuItem"> 
        <Image src={fact} width='25' height='20' />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <a href="/introduction/advantage">Why Regional Victoria?</a></div>
        </li>
        <li>
        <div className="menuItem"> 
        <Image src={map} width='25' height='20' />
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <a href="/mapExploration">Explore Regional Victoria </a></div>
        </li>
      </ul>
      
    </nav>
  );
};

export default sideDrawer;