import React from 'react';
import logo from '../Toolbar/logo1.jpg';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import Favicon from 'react-favicon';

const toolbar = props => (
    <header className="toolbar">
    <Favicon url="/assets/eco-home.png" />
        <nav className="toolbar__navigation" default collapseOnSelect>
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><Link to="/">
                <Image src={logo} width='200' height='50' /></Link></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/introduction/visa">VISA</a></li>
                    <li><a href="/introduction/activity">FUN ACTIVITIES</a></li>
                    <li><a href="/introduction/advantage">WHY REGIONAL VICTORIA?</a></li>                   
                    {/* <li><a href="/mapExploration">MAP EXPLORATION</a></li> */}

                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;